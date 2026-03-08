# Spectrogram Backend

Generates animated spectrogram videos from audio files (WAV or MP3).

## Requirements

- Python 3.9+
- **FFmpeg** (must be installed and in PATH)
- pydub (for MP3 conversion)

## Setup

```bash
cd backend
pip install -r requirements.txt
```

## Run

```bash
python app.py
```

The API runs at `http://localhost:5000`. The Vite dev server proxies `/api` requests to this backend.

## Endpoints

- `GET /api/health` — Health check
- `POST /api/create-spectrogram` — Create spectrogram video
  - Body: `{ "audioUrl": "...", "recordId": "...", "numScreens": 1, "resolution": 1280 }`
- `GET /api/spectrogram/<filename>` — Serve generated video

## Notes

- Videos are stored temporarily in the system temp directory
- FFmpeg is required for audio conversion and muxing
