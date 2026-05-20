<p align="center">
  <img src="https://raw.githubusercontent.com/Leoojon/dat1/main/uploads/25eb4e-1767859162744.jpg" width="200" height="200" alt="Ryuuzaa-MD">
</p>

<h1 align="center">Ryuuzaa-MD - WhatsApp Bot</h1>

<p align="center">
  <a href="https://github.com/Pirrzaaaaa/Ryuuzaa-MultiDevice">
    <img src="https://img.shields.io/github/stars/Pirrzaaaaa/Ryuuzaa-MultiDevice?style=social" alt="Stars">
  </a>
  <a href="https://github.com/Pirrzaaaaa/Ryuuzaa-MultiDevice/fork">
    <img src="https://img.shields.io/github/forks/Pirrzaaaaa/Ryuuzaa-MultiDevice?style=social" alt="Forks">
  </a>
</p>

---

## About

Bot WhatsApp modular yang powerful menggunakan JavaScript + ESModule, dibangun dengan sistem plugin untuk fleksibilitas maksimal. Menggunakan Baileys Multi-Device library.

---

## Features

- Multi-device support (tanpa scan QR berulang)
- Sistem plugin modular (hot-reload)
- AI Integration (Copilot, Auto-AI)
- Downloader (YouTube, TikTok, Instagram, Spotify, MediaFire)
- Sticker creator & converter
- Group management (welcome, kick, promote, mute)
- Search tools (Pinterest, GSMArena)
- Owner tools (eval, exec, plugin manager)
- Levelling system
- Anti-crash handler

---

## Requirements

- **Node.js** >= 20.x
- **FFmpeg** (untuk media processing)
- **ImageMagick** (opsional, untuk sticker)

---

## Installation

```bash
git clone https://github.com/Pirrzaaaaa/Ryuuzaa-MultiDevice.git
cd Ryuuzaa-MultiDevice
npm install
```

### Configuration

Edit `config.json` sesuai kebutuhan:
- `owner` — nomor WhatsApp owner (format: `628xxx`)
- `nomor` — nomor WhatsApp bot
- `pairing` — pairing code untuk koneksi
- `botname` — nama bot
- `ownername` — nama owner

Atau gunakan `.env` file (lihat `.env.example`).

### Running

```bash
npm start
```

---

## Environment Variables (Optional)

Buat file `.env` untuk menyimpan secrets:

```env
GIT_TOKEN=your_github_token_here
API_KEY_IZUMI=https://api.ootaizumi.web.id
```

---

## Credits & Upstream

| Role | Name | Link |
|------|------|------|
| **Modified & Maintained by** | Pirrrzaaaa | [GitHub](https://github.com/Pirrzaaaaa) |
| **Original Script** | IZUKU-MII / Keigo | [Kashiwada-MultiDevice](https://github.com/izuku-mii/Kashiwada-MultiDevice) |
| **Base Script** | Ryzumi / Shirokami Ryzen | NAO-MD |
| **WA Library** | @blckrose/baileys | [npm](https://www.npmjs.com/package/@blckrose/baileys) |

> This project is a fork/modification of [Kashiwada-MultiDevice](https://github.com/izuku-mii/Kashiwada-MultiDevice) by IZUKU-MII, which is based on NAO-MD by Shirokami Ryzen. All original credits are preserved as required by the license.

---

## License

Licensed under [GPL-3.0-or-later](LICENSE). You are free to modify and redistribute this software under the same license terms, provided original credits remain intact.
