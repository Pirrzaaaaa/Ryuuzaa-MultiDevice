/**
 * ============================================================
 *  Ryuuzaa MD - Main Configuration
 * ============================================================
 *  Edit file ini untuk mengubah perilaku bot.
 *  Semua setting bisa di-override lewat environment variable
 *  (lihat .env.example).
 * ============================================================
 */

import 'dotenv/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* eslint-disable no-undef */
export const config = {
  // ===========================================================
  // BOT IDENTITY
  // ===========================================================
  botName: 'Ryuuzaa MD',

  /** Nomor WA bot (yang dipakai saat input pairing code di HP) */
  botNumber: process.env.BOT_NUMBER || '6289520307004',

  /** Daftar nomor owner. Tambahkan nomor lain kalau owner lebih dari satu. */
  ownerNumber: [
    process.env.OWNER_NUMBER || '6289517185039',
  ],

  /** Nama owner (untuk tampilan di menu, dll) */
  ownerName: 'Ryuuzaa',

  // ===========================================================
  // LOGIN METHOD
  // ===========================================================
  /**
   * Metode login awal:
   *   'pairing' = pakai pairing code (8 digit, recommended)
   *   'qr'      = pakai QR code (scan dari HP)
   */
  loginMethod: process.env.LOGIN_METHOD || 'pairing',

  /**
   * Custom pairing code: 8 karakter, A-Z dan 0-9 (huruf kapital).
   * Kosongkan ('') untuk auto-generate dari WhatsApp.
   */
  customPairingCode: process.env.CUSTOM_PAIRING_CODE || 'RYUUZAAA',

  // ===========================================================
  // PREFIX & COMMAND
  // ===========================================================
  /**
   * Multi-prefix: array karakter yang dianggap valid sebagai prefix command.
   * Contoh: '.menu', '!menu', '/menu', '#menu' semua valid.
   */
  prefix: ['.', '!', '/', '#', '$', '+', '?', '&', '*', ',', ';', '=', '-', '~'],

  /**
   * Kalau true: SEMUA karakter non-alfanumerik di awal pesan dianggap prefix
   * (override array prefix di atas). Default: false.
   */
  acceptAnyPrefix: false,

  // ===========================================================
  // BOT MODE
  // ===========================================================
  /**
   * 'public' = semua orang bisa pakai bot
   * 'self'   = cuma owner yang bisa pakai
   */
  mode: 'public',

  // ===========================================================
  // AUTO FEATURES (default semua OFF, aktifkan sesuai kebutuhan)
  // ===========================================================
  autoRead: false,         // auto-read pesan masuk
  autoTyping: false,       // tampilkan "typing..." saat reply
  autoRecording: false,    // tampilkan "recording..." saat reply audio
  autoBio: false,          // auto-update bio bot
  rejectCall: false,       // tolak panggilan otomatis
  antiDelete: false,       // simpan pesan yg di-delete oleh user

  // ===========================================================
  // PATHS (jangan diubah kecuali tahu apa yang dilakukan)
  // ===========================================================
  sessionPath: path.join(__dirname, 'session'),
  databasePath: path.join(__dirname, 'database', 'ryuuzaa.db'),
  pluginsPath: path.join(__dirname, 'plugins'),
  tempPath: path.join(__dirname, 'tmp'),

  // ===========================================================
  // CONNECTION
  // ===========================================================
  /** Auto-reconnect saat disconnect */
  autoReconnect: true,

  /** Delay (ms) sebelum reconnect setelah disconnect */
  reconnectDelay: 3000,

  /** Max attempt reconnect berturut-turut sebelum exit */
  maxReconnectAttempts: 10,

  // ===========================================================
  // PLUGIN LOADER
  // ===========================================================
  /** Hot-reload plugin saat file plugins/* berubah (untuk development) */
  hotReloadPlugins: true,

  // ===========================================================
  // LOGGER
  // ===========================================================
  /** Log level: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent' */
  logLevel: process.env.LOG_LEVEL || 'info',

  // ===========================================================
  // MISC
  // ===========================================================
  /** Timezone (untuk runtime, log, dll) */
  timezone: 'Asia/Jakarta',

  /** Footer text di pesan reply */
  footer: 'Ryuuzaa MD',

  /** Link channel/grup untuk menu */
  channelLink: '',
  groupLink: '',
};

export default config;
