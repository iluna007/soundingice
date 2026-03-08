"""
Spectrogram video generator - adapted from create_spectrogram_video_from_audio.py
Accepts WAV or MP3 (converts MP3 to WAV via pydub).
"""

import io
import shutil
import warnings
import subprocess
import tempfile
from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec
from scipy.io import wavfile
from scipy import signal
import imageio.v2 as imageio


def _ensure_wav(input_path: str) -> str:
    """Convert MP3 to WAV if needed. Returns path to WAV file."""
    p = Path(input_path)
    if p.suffix.lower() in ('.mp3', '.m4a', '.ogg'):
        from pydub import AudioSegment
        audio = AudioSegment.from_file(input_path)
        wav_path = input_path.rsplit('.', 1)[0] + '_temp.wav'
        audio.export(wav_path, format='wav')
        return wav_path
    return input_path


def create_spectrogram_video_from_audio(
    wav_file_name: str,
    num_screens: int = 1,
    chart_title: str = 'Spectrogram',
    resolution: int = 1920,
    output_file: str = 'animated_SpectrumVideo.mp4',
    transparent: bool = False,
    convert_to_wav: bool = True,
) -> str:
    """
    Create an animated MP4 video from spectrograms of an audio file.
    Returns the path to the output file.
    """
    original_path = wav_file_name
    wav_path = wav_file_name
    temp_wav = None

    if convert_to_wav:
        wav_path = _ensure_wav(wav_file_name)
        if wav_path != wav_file_name:
            temp_wav = wav_path

    fs, x = wavfile.read(wav_path)

    if len(x.shape) > 1:
        x = np.mean(x, axis=1)

    if x.dtype == np.int16:
        x = x.astype(np.float32) / 32768.0
    elif x.dtype == np.int32:
        x = x.astype(np.float32) / 2147483648.0

    len_in_sec = len(x) / fs
    window_length = len_in_sec / num_screens
    win = int(window_length * fs) - 2

    video_fps = 24
    frames_per_window = max(1, int(window_length * video_fps))
    total = num_screens

    freq_min = 100
    freq_max = 10000
    time_resolution = 0.05
    min_threshold_db = -80

    nperseg = int(fs * time_resolution)
    noverlap = nperseg // 2

    dpi = 100
    if resolution == 1280:
        figsize = (12.8, 7.2)
        output_width, output_height = 1280, 720
    else:
        figsize = (19.2, 10.88)
        output_width, output_height = 1920, 1088

    with tempfile.NamedTemporaryFile(suffix='.mp4', delete=False) as tmp:
        temp_video = tmp.name

    writer = imageio.get_writer(
        temp_video,
        fps=video_fps,
        codec='libx264',
        quality=8,
        pixelformat='yuv420p'
    )

    I = 0
    count = 0

    try:
        while I + win < len(x):
            temp_x = x[I:I + win + 1]

            f, t, Sxx = signal.spectrogram(
                temp_x, fs, nperseg=nperseg, noverlap=noverlap
            )

            Sxx_db = 10 * np.log10(Sxx + 1e-10)
            Sxx_db = np.maximum(Sxx_db, min_threshold_db)

            freq_mask = (f >= freq_min) & (f <= freq_max)
            f_filtered = f[freq_mask]
            Sxx_filtered = Sxx_db[freq_mask, :]

            fig = plt.figure(figsize=figsize, dpi=dpi)
            fig.patch.set_facecolor('none' if transparent else 'black')
            gs = GridSpec(2, 2, height_ratios=[3, 1], width_ratios=[0.5, 4],
                          hspace=0.08, wspace=0.08, figure=fig)

            tick_fontsize = max(8, int(9 * output_width / 1280))

            def style_ax(ax):
                ax.set_facecolor('none' if transparent else 'black')
                ax.tick_params(colors='white')
                for spine in ax.spines.values():
                    spine.set_color('white')

            ax_psd = fig.add_subplot(gs[0, 0])
            f_psd, psd = signal.welch(temp_x, fs, nperseg=nperseg)
            psd_db = 10 * np.log10(psd + 1e-10)
            psd_db = np.maximum(psd_db, min_threshold_db)
            psd_mask = (f_psd >= freq_min) & (f_psd <= freq_max)
            ax_psd.fill_betweenx(f_psd[psd_mask], psd_db[psd_mask],
                                min_threshold_db, color='white', alpha=0.7)
            ax_psd.set_yscale('log')
            ax_psd.set_ylim([freq_min, freq_max])
            ax_psd.set_xlim([min_threshold_db, 0])
            ax_psd.invert_xaxis()
            ax_psd.set_xticks([-80, -60, -40, -20, 0])
            ax_psd.set_xticklabels(['-80', '-60', '-40', '-20', '0'],
                                   fontsize=tick_fontsize, color='white')
            ax_psd.set_yticks([250, 500, 1000, 2000, 4000, 8000])
            ax_psd.set_yticklabels(['250', '500', '1k', '2k', '4k', '8k'],
                                  fontsize=tick_fontsize, color='white')
            ax_psd.set_title('Power Spectral Density (PSD)',
                            fontsize=tick_fontsize, color='white')
            style_ax(ax_psd)

            t_start = -window_length
            t_end = 0
            extent = [t_start, t_end, f_filtered[0], f_filtered[-1]]
            ax = fig.add_subplot(gs[0, 1], sharey=ax_psd)
            im = ax.imshow(
                Sxx_filtered,
                aspect='auto',
                extent=extent,
                origin='lower',
                cmap='viridis',
                vmin=min_threshold_db,
                vmax=0,
                interpolation='bilinear'
            )
            ax.set_yscale('log')
            ax.set_ylim([freq_min, freq_max])
            ax.set_yticks([250, 500, 1000, 2000, 4000, 8000])
            ax.set_yticklabels(['250', '500', '1k', '2k', '4k', '8k'],
                              fontsize=tick_fontsize, color='white')
            ax.set_title('Spectrogram', fontsize=tick_fontsize, color='white')
            style_ax(ax)

            ax_wave = fig.add_subplot(gs[1, 1], sharex=ax)
            time_wave = np.linspace(t_start, t_end, len(temp_x))
            ax_wave.fill_between(time_wave, temp_x, 0, color='white', alpha=0.7)
            ax_wave.set_ylim([-1.1, 1.1])
            ax_wave.set_yticks([-1, 0, 1])
            ax_wave.set_yticklabels(['-1', '0', '1'],
                                   fontsize=tick_fontsize, color='white')
            ax_wave.set_title('Amplitude over time',
                             fontsize=tick_fontsize, color='white')
            style_ax(ax_wave)

            n_ticks = min(6, max(3, int(window_length)))
            n_ticks = max(2, n_ticks)
            tick_positions = np.linspace(t_start, t_end, n_ticks)
            tick_labels = [str(int(round(tp))) for tp in tick_positions]
            for ax_x in [ax, ax_wave]:
                ax_x.set_xticks(tick_positions)
                ax_x.set_xticklabels(tick_labels, fontsize=tick_fontsize,
                                     color='white')

            ax_cbar = fig.add_subplot(gs[1, 0])
            cbar = fig.colorbar(im, cax=ax_cbar, orientation='horizontal')
            cbar.ax.set_facecolor('none' if transparent else 'black')
            cbar.set_label('dBFS', fontsize=tick_fontsize, color='white')
            cbar.ax.tick_params(labelsize=tick_fontsize, colors='white')
            cbar.outline.set_edgecolor('white')
            style_ax(ax_cbar)

            with warnings.catch_warnings():
                warnings.simplefilter('ignore', UserWarning)
                fig.tight_layout(rect=[0.02, 0.02, 0.98, 0.98])

            fig.canvas.draw()
            pos = ax_wave.get_position()

            buf = io.BytesIO()
            facecolor = 'none' if transparent else 'black'
            fig.savefig(buf, format='png', dpi=dpi, facecolor=facecolor,
                        edgecolor='none', bbox_inches=None, pad_inches=0,
                        transparent=transparent)
            buf.seek(0)
            base_img = imageio.imread(buf)
            buf.close()
            plt.close(fig)

            if base_img.shape[2] == 4 and not transparent:
                base_img = base_img[:, :, :3]
            elif base_img.shape[2] == 4 and transparent:
                alpha = base_img[:, :, 3:4] / 255.0
                base_img = (base_img[:, :, :3] * alpha).astype(np.uint8)

            h, w_img = base_img.shape[0], base_img.shape[1]
            x_min = int(pos.x0 * w_img)
            x_max = int(pos.x1 * w_img)
            y_min = int((1 - pos.y1) * h)
            y_max = int((1 - pos.y0) * h)
            y_min_wave, y_max_wave = y_min, y_max

            from PIL import Image, ImageDraw
            base_pil = Image.fromarray(base_img)
            line_width = max(2, int(3 * output_width / 1280))

            for frame_idx in range(frames_per_window):
                frac = (frame_idx / (frames_per_window - 1)
                        if frames_per_window > 1 else 1.0)
                line_x = x_min + int(frac * (x_max - x_min))
                line_x = max(x_min, min(x_max, line_x))

                img_pil = base_pil.copy()
                draw = ImageDraw.Draw(img_pil)
                left = max(x_min, line_x - line_width // 2)
                right = min(x_max, line_x + line_width // 2)
                if right <= left:
                    right = left + line_width
                draw.rectangle([left, y_min_wave, right, y_max_wave],
                               fill='red', outline='red')

                img = np.array(img_pil)
                if img.shape[1] != output_width or img.shape[0] != output_height:
                    img_pil = img_pil.resize((output_width, output_height),
                                             Image.Resampling.LANCZOS)
                    img = np.array(img_pil)
                writer.append_data(img)

            count += 1
            I += win

    finally:
        writer.close()

    ffmpeg_path = 'ffmpeg'
    try:
        import imageio_ffmpeg
        ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        pass

    try:
        audio_input = wav_path  # Use WAV (converted from MP3 if needed)
        cmd = [
            ffmpeg_path, '-y',
            '-i', temp_video,
            '-i', audio_input,
            '-c:v', 'copy',
            '-c:a', 'aac',
            '-map', '0:v:0',
            '-map', '1:a:0',
            '-shortest',
            output_file
        ]
        subprocess.run(cmd, check=True, capture_output=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        shutil.copy(temp_video, output_file)
    finally:
        Path(temp_video).unlink(missing_ok=True)
        if temp_wav and Path(temp_wav).exists():
            Path(temp_wav).unlink(missing_ok=True)

    return output_file
