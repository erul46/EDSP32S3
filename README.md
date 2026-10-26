# ELKASARI DSP
Perangkat ini adalah unit Digital Loudspeaker Management System (DLMS) berbasis ESP32-S3 yang bekerja pada resolusi audio 24-Bit / 48.000 Hz Full-Duplex secara *real-time*.

Pemrosesan Audio (Core 0)
Input Jalur: 2 Channel (Input A & Input B) via ADC PCM1808.
Output Jalur: 4 Channel via Dual DAC PCM5102A:
• OUT 1 & OUT 2: Satelit High/Mid (DAC Utama).
• OUT 3 & OUT 4: Subwoofer Bass/Low (DAC Kedua).
Algoritma DSP: 9-Band PEQ (Simper TPT SVF + TDF2), Crossover Linkwitz-Riley/Butterworth 6-48dB, Subsonic Subwoofer, Matrix Routing riil, Subharmonic Glerr Synthesizer, Brickwall Limiter, dan Time Alignment Delay (hingga 8.0 ms).
Kendali Antarmuka (Core 1)
Layar Fisik: OLED 0.96" SSD1306 (I2C 400kHz) menampilkan 32-Band RTA Spektrum & Menu Navigasi.
Kontrol Fisik: Rotary Encoder KY-040 + Tombol MUTE Cepat & Tombol BACK Cepat.
Kontrol Nirkabel: Web Bluetooth Low Energy (BLE) Dashboard responsif tanpa aplikasi tambahan.
Penyimpanan: NVS Flash Internal (Autosave state & 5 Slot Bank Preset).
