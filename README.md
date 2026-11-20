
ELKASARI DSP S3

1. Arsitektur Audio & Hardware (ESP32-S3)

  - Audio Full-Duplex 48 kHz / 24-bit I2S: 1 Input Stereo ADC (PCM1808) →
    pemrosesan DSP floating-point presisi di Core 0 → 2 Output Stereo DAC
    (PCM5102A: OUT 1–2 Main/Top & OUT 3–4 Sub/Low).
  - Tampilan Hardware OLED SSD1306 + Rotary Encoder: Layar Home menampilkan
    Volume Input, judul, Bank Preset aktif, serta RTA 32-Band
    real-time; dilengkapi menu navigasi penuh, tombol fisik BACK & MUTE, serta
    sinkronisasi dua arah dengan HP.

2. Fitur Pengolah Suara DLMS (2-In × 4-Out)

  - Matrix Routing & Fasa Independen: Patch bebas per output (LEFT, RIGHT, MIX
    L+R mendukung Sub stereo maupun mono) dan pembalik fasa 0° / 180° per
    channel.
  - Crossover 2-Way / Subsonic: Filter Linkwitz-Riley, Butterworth, Bessel,
    Bypass (6 / 12 / 24 / 48 dB/oct) untuk pasangan OUT 1&2 dan OUT 3&4, dengan
    slider horisontal dan ketik angka presisi lewat keyboard.
  - 9-Band Parametric EQ per Channel: Frekuensi ISO 20 Hz – 20 kHz, Gain ±12 dB,
    Q 0.3 – 10.0, geser node langsung di grafik HiDPI, 6 Template EQ siap pakai,
    Bypass, Flat, serta Copy/Paste antar channel.
  - Subharmonic Synthesizer ("Glerr"): Pembangkit sub-bass oktaf bawah untuk
    OUT 3 & 4 dengan pengatur intensitas dan frekuensi deteksi (60 / 80 / 100
    Hz).
  - Time Alignment Delay (4-Channel): Delay independen 0.0 – 100.0 ms (PSRAM) /
    50.0 ms (SRAM) dengan konversi jarak meter/feet dan kompensasi suhu udara
    panggung (15–45°C).
  - Dynamic Compressor / Brickwall Limiter + Live GR Meter: Pengaturan
    Threshold, Ratio (1:1 – ∞:1), Attack, Release, serta Gain Reduction Meter
    real-time via BLE yang hemat bandwidth (hanya kirim 3 byte saat limiter
    aktif).
  - Test Signal Generator DSP Internal: Pink Noise, Sine Tone (20 Hz – 20 kHz),
    Log Sweep, dan Warble Tone.

3. Manajemen Preset & Penyimpanan NVS Aman

  - 8 Bank Preset (01–08): DEFAULT, TWEETER PROTECT, VOCAL CLARITY, BASS SUB
    HOREG, AUDIOPHILE HIFI, dan 3 slot User (Load, Save, Rename, Reset Factory,
    serta Export/Import .JSON).
  - Autosave Non-Blocking: Penulisan flash NVS terpisah di NVS_Writer task
    (storage_busy protection) agar audio dan koneksi BLE tetap mulus tanpa
    glitch.

4. Dashboard Kontrol Mobile & Offline (index.html/apk)

  - Komunikasi BLE NimBLE Stabil (Two-Way Sync): Teroptimasi untuk ESP32-S3
    Arduino Core 3.x (internal SRAM lega, antrean kirim throttled, proteksi
    slider saat drag, opsi PIN keamanan USE_BLUETOOTH_PIN).
  - Navigasi Ergonomis 4 Tab:
      - Overview 1 Baris: Kartu INPUT A/B (hijau) sejajar OUT 1–2 (cyan) dan
        OUT 3–4 (amber).
      - 4 Tab Utama: TUNE (Signal Flow ROUTE | X-OVER | PEQ | DELAY | LIMIT),
        MIX / IO (Master Input + Mixer 4-Channel), PRESET, dan TOOLS (RTA & GEN
        | SETUP & LISENSI | RADIO).
      - Mode Fokus Layar Penuh: Tombol panah & auto-hide scroll untuk
        menyembunyikan Header dan Mini Player + Tab Menu secara bersamaan.
      - Global Lock & Panic Mute: Pengaman agar parameter panggung tidak
        tersenggol tanpa sengaja.
  - Tema Dual Pro-Audio + Offline Tools: Mode Dark & Pure White + warna aksen
    kustom, ikon SVG 100% offline, RTA Web Audio API (Player & Mic terisolasi
    anti-feedback) + Waterfall Spectrogram, Mini Player lokal + tombol cepat ke
    Internet Radio.

5. Sistem Lisensi Komersial Offline (ECDSA P-256)
  -info (081318574216)
  - Varian Lisensi: TRIAL (48 jam aktif) dengan batas aman → EXPIRED (audio
    tetap bunyi maks -12.0 dB, edit terkunci) → FULL (semua fitur terbuka
    permanen secara offline).
