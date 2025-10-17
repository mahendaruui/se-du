# Password Validation Requirements

Sejak implementasi terbaru, semua password di aplikasi SE-DU harus memenuhi ketentuan keamanan yang ketat.

## Ketentuan Password

Setiap password harus memenuhi **SEMUA** kriteria berikut:

✅ **Minimal 8 karakter** - Password harus terdiri dari setidaknya 8 karakter

✅ **Minimal 1 huruf KAPITAL (A-Z)** - Contoh: A, B, C, D, Z

✅ **Minimal 1 huruf kecil (a-z)** - Contoh: a, b, c, d, z

✅ **Minimal 1 angka (0-9)** - Contoh: 0, 1, 2, 3, 9

✅ **Minimal 1 simbol** - Contoh: ! @ # $ % ^ & \* ( ) \_ + - = [ ] { } | ; : , . < > ?

✅ **Tidak pernah bocor** - Password tidak boleh tercatat dalam data breach / kebocoran data

## Contoh Password yang Valid

- `Admin123!`
- `SecureP@ssw0rd`
- `MyP@ssword2025`
- `Staff#2025Pwd`
- `Super$ecure123`

## Contoh Password yang Tidak Valid

❌ `password` - Tidak ada huruf kapital, angka, dan simbol

❌ `Password` - Tidak ada angka dan simbol

❌ `Password123` - Tidak ada simbol

❌ `PASSWORD123!` - Tidak ada huruf kecil

❌ `Pass1!` - Kurang dari 8 karakter

❌ `password123!` - Tidak ada huruf kapital

## Implementasi Teknis

Password validation diimplementasikan menggunakan Laravel's `Password` rule:

```php
use Illuminate\Validation\Rules\Password;

Password::defaults(function () {
    return Password::min(8)
        ->letters()           // Harus ada huruf
        ->mixedCase()         // Harus ada huruf kapital dan kecil
        ->numbers()           // Harus ada angka
        ->symbols()           // Harus ada simbol
        ->uncompromised();    // Cek password yang pernah bocor
});
```

## Lokasi Konfigurasi

Konfigurasi password default terletak di:

- **File**: `app/Providers/AppServiceProvider.php`
- **Method**: `boot()`

## Testing

Password validation telah diuji dengan 8 test cases di:

- **File**: `tests/Feature/PasswordRulesTest.php`
- **Coverage**:
    - Validasi huruf kapital
    - Validasi huruf kecil
    - Validasi angka
    - Validasi simbol
    - Validasi panjang minimum
    - Validasi berbagai simbol
    - Pesan error yang jelas

## Pesan Error

Saat password tidak memenuhi ketentuan, sistem akan menampilkan pesan error yang spesifik:

- "The password field must be at least 8 characters."
- "The password field must contain at least one uppercase and one lowercase letter."
- "The password field must contain at least one symbol."
- "The password field must contain at least one number."
- "The given password has appeared in a data leak. Please choose a different password."

## Best Practices

1. **Gunakan password manager** - Untuk menghasilkan dan menyimpan password yang kuat
2. **Hindari pola yang mudah ditebak** - Seperti "Password123!", "Admin123!", dll.
3. **Gunakan password unik** - Jangan gunakan password yang sama untuk berbagai akun
4. **Ubah password secara berkala** - Terutama jika ada indikasi keamanan terkompromi
5. **Jangan share password** - Setiap user harus memiliki password sendiri

## Compliance

Implementasi ini mengikuti best practices dari:

- OWASP Password Guidelines
- NIST Digital Identity Guidelines
- Indonesian Data Protection Regulations
- Laravel Security Best Practices

## Update History

- **2025-10-17**: Implementasi password validation dengan Laravel Password rule
- **Requirements**: Min 8 chars, mixed case, numbers, symbols, uncompromised check
