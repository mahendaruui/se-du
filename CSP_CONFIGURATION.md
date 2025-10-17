# Content Security Policy (CSP) Configuration

## Overview

Content Security Policy (CSP) adalah security header yang membantu mencegah serangan XSS (Cross-Site Scripting) dan data injection dengan mengontrol sumber daya yang boleh dimuat oleh browser.

## Konfigurasi

CSP dikonfigurasi di `app/Http/Middleware/SecurityHeaders.php`.

## Development vs Production

### Development Environment

Di environment **local** (development), CSP mengizinkan Vite development server:

```php
if (app()->environment('local')) {
    $vitePort = env('VITE_PORT', 5173);
    $viteUrl = "https://se-du.test:{$vitePort}";
    $scriptSrc .= " {$viteUrl}";
    $connectSrc .= " {$viteUrl} ws://se-du.test:{$vitePort} wss://se-du.test:{$vitePort}";
}
```

**Allowed in Development:**

- ✅ Vite dev server scripts dari `https://se-du.test:5173`
- ✅ Vite HMR (Hot Module Replacement) via WebSocket
- ✅ Inline scripts dan eval (untuk Vite)

### Production Environment

Di production, CSP jauh lebih ketat:

**script-src:**

- ✅ `'self'` - Script dari domain yang sama
- ✅ `'unsafe-inline'` - Inline scripts (untuk React inline handlers)
- ❌ Vite dev server - Tidak diizinkan

**connect-src:**

- ✅ `'self'` - Hanya koneksi ke domain sendiri
- ❌ WebSocket ke Vite - Tidak diizinkan

## Direktif CSP yang Digunakan

| Direktif          | Nilai                                                 | Keterangan                                |
| ----------------- | ----------------------------------------------------- | ----------------------------------------- |
| `default-src`     | `'self'`                                              | Default untuk semua resource              |
| `script-src`      | `'self' 'unsafe-inline' 'unsafe-eval'` + Vite (dev)   | Sumber script yang diizinkan              |
| `style-src`       | `'self' 'unsafe-inline' https://fonts.googleapis.com` | Sumber CSS yang diizinkan (Google Fonts)  |
| `font-src`        | `'self' https://fonts.gstatic.com`                    | Sumber font yang diizinkan (Google Fonts) |
| `img-src`         | `'self' data: https:`                                 | Sumber gambar yang diizinkan              |
| `connect-src`     | `'self'` + Vite WebSocket (dev)                       | Sumber koneksi AJAX/WebSocket             |
| `frame-ancestors` | `'self'`                                              | Mencegah clickjacking                     |
| `base-uri`        | `'self'`                                              | Membatasi base tag                        |
| `form-action`     | `'self'`                                              | Membatasi form submission                 |

## Troubleshooting

### Error: CSP Blocking Vite Scripts

**Symptom:**

```
Content-Security-Policy: The page's settings blocked the loading of a resource at
https://se-du.test:5173/@react-refresh because it violates the following directive:
"script-src 'self' 'unsafe-inline' 'unsafe-eval'"
```

**Solution:**
Pastikan `APP_ENV=local` di file `.env`:

```env
APP_ENV=local
```

### Error: CSP Blocking External Resources

Jika perlu menambahkan external resource (CDN, API, dll), tambahkan di middleware:

```php
$csp = [
    // ...
    "script-src 'self' https://cdn.example.com",
    "connect-src 'self' https://api.example.com",
    // ...
];
```

## Environment Detection

Middleware secara otomatis mendeteksi environment menggunakan:

```php
app()->environment('local')
```

**Environments:**

- `local` - Development (CSP relaxed untuk Vite)
- `staging` - Testing (CSP strict)
- `production` - Production (CSP strict)

## Vite Port Configuration

Default Vite port adalah `5173`. Untuk mengubahnya, tambahkan di `.env`:

```env
VITE_PORT=5173
```

Dan update `vite.config.ts`:

```typescript
export default defineConfig({
    server: {
        port: 5173,
        // ...
    },
});
```

## Security Considerations

### Development

- ⚠️ `'unsafe-inline'` dan `'unsafe-eval'` diperlukan untuk Vite HMR
- ⚠️ Vite dev server menggunakan HTTPS dengan self-signed certificate
- ⚠️ WebSocket connections (ws:// dan wss://) diperlukan untuk HMR

### Production

- ✅ Remove `'unsafe-eval'` jika memungkinkan
- ✅ Vite build menghasilkan static assets tanpa eval
- ✅ Tidak ada WebSocket connections ke dev server
- ✅ Semua scripts sudah di-bundle dan di-minify

## Testing CSP

### Test di Browser Console

```javascript
// Check current CSP
document.querySelector('meta[http-equiv="Content-Security-Policy"]');

// Check violations
window.addEventListener('securitypolicyviolation', (e) => {
    console.log('CSP Violation:', e.violatedDirective);
});
```

### Test dengan curl

```bash
curl -I https://se-du.test
```

Look for `Content-Security-Policy` header.

## References

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Vite: Server Options](https://vitejs.dev/config/server-options.html)
- [Laravel: Middleware](https://laravel.com/docs/middleware)

## Changelog

### 2025-10-17

- Added Vite dev server support in development environment
- Dynamic CSP based on APP_ENV
- Support for WebSocket HMR connections
