"""
Flask API for spectrogram video generation.
Run with: python app.py
"""

import os
import tempfile
import uuid
from pathlib import Path

import requests
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS

from spectrogram_generator import create_spectrogram_video_from_audio

app = Flask(__name__)
CORS(app)

# Directory for temporary spectrogram videos (served as static)
OUTPUT_DIR = Path(tempfile.gettempdir()) / "soundingice_spectrograms"
OUTPUT_DIR.mkdir(exist_ok=True)


def download_audio(url: str) -> str:
    """Download audio from URL to temp file. Returns path."""
    ext = ".mp3" if ".mp3" in url.lower() else ".wav"
    path = Path(tempfile.gettempdir()) / f"audio_{uuid.uuid4().hex}{ext}"
    resp = requests.get(url, timeout=60)
    resp.raise_for_status()
    path.write_bytes(resp.content)
    return str(path)


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


@app.route("/api/create-spectrogram", methods=["POST"])
def create_spectrogram():
    """
    POST body: { "audioUrl": "...", "recordId": "...", "numScreens": 1 }
    Returns: { "videoUrl": "/api/spectrogram/<filename>" }
    """
    try:
        data = request.get_json() or {}
        audio_url = data.get("audioUrl")
        record_id = data.get("recordId", "rec")
        num_screens = int(data.get("numScreens", 1))
        resolution = int(data.get("resolution", 1280))

        if not audio_url:
            return jsonify({"error": "audioUrl is required"}), 400

        # Download audio
        audio_path = download_audio(audio_url)
        try:
            output_filename = f"spectrogram_{record_id}_{uuid.uuid4().hex[:8]}.mp4"
            output_path = OUTPUT_DIR / output_filename

            create_spectrogram_video_from_audio(
                wav_file_name=audio_path,
                num_screens=num_screens,
                chart_title=f"Spectrogram {record_id}",
                resolution=resolution,
                output_file=str(output_path),
                transparent=False,
                convert_to_wav=True,
            )

            video_url = f"/api/spectrogram/{output_filename}"
            return jsonify({"videoUrl": video_url, "filename": output_filename})
        finally:
            Path(audio_path).unlink(missing_ok=True)

    except requests.RequestException as e:
        return jsonify({"error": f"Failed to download audio: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/spectrogram/<filename>", methods=["GET"])
def serve_spectrogram(filename):
    """Serve a generated spectrogram video file."""
    path = OUTPUT_DIR / filename
    if not path.exists():
        return jsonify({"error": "Video not found"}), 404
    return send_file(path, mimetype="video/mp4", as_attachment=False)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
