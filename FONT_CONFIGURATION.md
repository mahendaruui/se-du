# Font Configuration - Ubuntu Font

## Overview

Aplikasi SE-DU menggunakan **Ubuntu font** dari Google Fonts sebagai font utama untuk konsistensi dan keterbacaan yang optimal.

## Font yang Digunakan

**Ubuntu** - A modern, humanist sans-serif typeface

- **Weights**: 300, 400, 500, 700
- **Styles**: Regular & Italic
- **Source**: Google Fonts
- **License**: Ubuntu Font Licence

## Implementasi

### 1. HTML (app.blade.php)

Font di-load menggunakan preconnect untuk performa optimal:

```html
{{-- Google Font Ubuntu --}}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
    rel="stylesheet"
/>
```

**File**: `resources/views/app.blade.php`

### 2. CSS (app.css)

Font Ubuntu diset sebagai font utama dengan fallback:

```css
@theme {
    --font-sans:
        'Ubuntu', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
```

**File**: `resources/css/app.css`

### 3. Content Security Policy

CSP telah dikonfigurasi untuk mengizinkan Google Fonts:

```php
$csp = [
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
];
```

**File**: `app/Http/Middleware/SecurityHeaders.php`

## Font Weights

| Weight | Usage                                         | Class         |
| ------ | --------------------------------------------- | ------------- |
| 300    | Light - Untuk text yang perlu terlihat ringan | `font-light`  |
| 400    | Regular - Default untuk body text             | `font-normal` |
| 500    | Medium - Untuk emphasis                       | `font-medium` |
| 700    | Bold - Untuk headings dan strong emphasis     | `font-bold`   |

## Usage Examples

### Tailwind CSS Classes

```tsx
// Regular text
<p className="font-normal">Regular body text</p>

// Medium weight
<h3 className="font-medium text-lg">Medium heading</h3>

// Bold heading
<h1 className="font-bold text-4xl">Bold heading</h1>

// Light text
<span className="font-light text-sm">Light caption</span>

// Italic
<em className="italic">Italic text</em>
```

### React Components

```tsx
export default function Component() {
    return (
        <div className="font-sans">
            <h1 className="text-3xl font-bold">Ubuntu Font</h1>
            <p className="text-base font-normal">
                This is using Ubuntu font with normal weight.
            </p>
            <p className="text-sm font-light italic">
                Light italic Ubuntu font.
            </p>
        </div>
    );
}
```

## Performance Optimization

### 1. Preconnect

Menggunakan `preconnect` untuk mempercepat loading:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 2. Display Swap

Font menggunakan `display=swap` untuk menghindari FOIT (Flash of Invisible Text):

```
&display=swap
```

### 3. Selective Loading

Hanya load weights yang digunakan (300, 400, 500, 700) untuk mengurangi bandwidth.

## Fallback Fonts

Jika Ubuntu gagal load, sistem akan menggunakan fallback fonts:

1. `ui-sans-serif` - System UI font
2. `system-ui` - System default
3. `sans-serif` - Generic sans-serif
4. Emoji fonts - Untuk emoji support

## Browser Support

Ubuntu font didukung oleh semua browser modern:

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Comparison

### Before (Instrument Sans from Bunny Fonts)

```css
--font-sans: 'Instrument Sans', ui-sans-serif, ...;
```

### After (Ubuntu from Google Fonts)

```css
--font-sans: 'Ubuntu', ui-sans-serif, ...;
```

## Why Ubuntu Font?

1. **Readability** - Designed for clarity and legibility
2. **Humanist** - Friendly and approachable appearance
3. **Professional** - Suitable for institutional websites
4. **Complete** - Good character set with international support
5. **Open Source** - Ubuntu Font Licence allows free use

## Accessibility

Ubuntu font memenuhi standar aksesibilitas:

- ✅ Clear letterforms untuk dyslexia-friendly
- ✅ Good x-height untuk keterbacaan di ukuran kecil
- ✅ Distinct character shapes (1, l, I berbeda jelas)
- ✅ WCAG AA compliant ketika digunakan dengan kontras yang tepat

## Testing

Font Ubuntu telah ditest dengan:

```bash
php artisan test --filter=SecurityHeadersTest
```

**Status**: ✅ All tests passed (6/6)

## References

- [Google Fonts - Ubuntu](https://fonts.google.com/specimen/Ubuntu)
- [Ubuntu Font Family](https://design.ubuntu.com/font)
- [Ubuntu Font Licence](https://ubuntu.com/legal/font-licence)

## Changelog

### 2025-10-17

- Migrated from Bunny Fonts (Instrument Sans) to Google Fonts (Ubuntu)
- Updated CSP to allow Google Fonts domains
- Added font weights: 300, 400, 500, 700
- Added italic variants
- Updated tests to reflect new font source
