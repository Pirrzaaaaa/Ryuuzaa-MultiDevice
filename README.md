# Ryuuzaa MD

WhatsApp Multi-Device bot dibangun dengan [Baileys](https://github.com/WhiskeySockets/Baileys).

> **Status:** WIP — sedang dalam tahap pengembangan.

## Fitur

- Multi-device support (Baileys 7.0.0-rc13)
- Pairing code login (custom: `RYUUZAAA`) atau QR fallback
- LID/JID resolver — kompatibel WhatsApp modern (post-LID migration)
- ESM module
- Hybrid arsitektur: plugin-first + case fallback
- Multi-prefix (14 karakter default, configurable)
- SQLite database (`better-sqlite3`)
- Helper untuk semua tipe pesan: button, list, interactive, native flow, carousel, fake quoted, sticker pack, poll, album, dll

## Persyaratan

- **Node.js** >= 20.0.0
- **ffmpeg** (untuk fitur sticker dari video)
- Pterodactyl panel (atau VPS Linux/Termux)

## Instalasi

```bash
# 1. Clone repository
git clone https://github.com/Pirrzaaaaa/Ryuuzaa-MultiDevice.git
cd Ryuuzaa-MultiDevice

# 2. Install dependencies
npm install

# 3. (Opsional) Copy .env
cp .env.example .env

# 4. Edit config.js sesuai kebutuhan
#    (nomor bot, owner, prefix, mode, dll)

# 5. Jalankan
npm start
```

## Konfigurasi Singkat

Semua setting ada di `config.js`:

| Setting | Default | Keterangan |
|---|---|---|
| `botNumber` | `6289520307004` | Nomor WA bot (untuk pairing code) |
| `ownerNumber` | `['6289517185039']` | Daftar owner |
| `loginMethod` | `'pairing'` | `'pairing'` atau `'qr'` |
| `customPairingCode` | `'RYUUZAAA'` | 8 huruf kapital |
| `prefix` | `['.','!','/','#',...]` | 14 prefix multi |
| `mode` | `'public'` | `'public'` atau `'self'` |

## Struktur Project

```
Ryuuzaa-MultiDevice/
├── index.js                  # Entry point
├── config.js                 # Konfigurasi utama
├── package.json
│
├── lib/                      # Library internal (prefix: ryuuzaa-*)
│   ├── ryuuzaa-logger.js
│   ├── ryuuzaa-database.js
│   ├── ryuuzaa-connection.js
│   ├── ryuuzaa-lid-resolver.js
│   ├── ryuuzaa-functions.js
│   ├── ryuuzaa-message-builder.js
│   └── scraper/
│       └── ryuuzaa-tiktok.js
│
├── handler/                  # Event & command handler
│   ├── ryuuzaa-plugins-loader.js
│   ├── ryuuzaa-message-handler.js
│   └── ryuuzaa-case.js
│
├── plugins/                  # Command modular
│   ├── _core/
│   │   ├── menu.js
│   │   ├── ping.js
│   │   └── owner.js
│   └── downloader/
│       └── tiktok.js
│
├── database/                 # File DB (auto-generated, gitignored)
└── session/                  # Session WA (auto-generated, gitignored)
```

## License

MIT © Ryuuzaa
