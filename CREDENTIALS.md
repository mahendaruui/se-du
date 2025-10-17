# Default User Credentials

Berikut adalah kredensial default untuk user yang dibuat oleh database seeder:

## Admin

- **Email**: admin@sedu.test
- **Password**: Admin123!
- **Role**: admin
- **Akses**: Full access ke seluruh sistem

## Staff

1. **Staff SE-DU**
    - **Email**: staff@sedu.test
    - **Password**: Staff123!
    - **Role**: staff
    - **Akses**: Mengelola konten, berita, galeri

2. **Koordinator SE-DU**
    - **Email**: koordinator@sedu.test
    - **Password**: Koordinator123!
    - **Role**: staff
    - **Akses**: Mengelola konten, berita, galeri

## Operator

1. **Operator SE-DU**
    - **Email**: operator@sedu.test
    - **Password**: Operator123!
    - **Role**: operator
    - **Akses**: Terbatas, hanya view dan operasional dasar

2. **Helpdesk SE-DU**
    - **Email**: helpdesk@sedu.test
    - **Password**: Helpdesk123!
    - **Role**: operator
    - **Akses**: Terbatas, hanya view dan operasional dasar

## Ketentuan Password

Semua password harus memenuhi ketentuan berikut:

- ✅ Minimal 8 karakter
- ✅ Minimal 1 huruf kapital (A-Z)
- ✅ Minimal 1 huruf kecil (a-z)
- ✅ Minimal 1 angka (0-9)
- ✅ Minimal 1 simbol (!@#$%^&\*()\_+-=[]{}|;:,.<>?)
- ✅ Tidak menggunakan password yang pernah bocor (compromised)

## Catatan Keamanan

⚠️ **PENTING**:

- Segera ubah password default setelah login pertama kali
- Jangan gunakan password default di production environment
- Password default ini hanya untuk development dan testing
- Gunakan password yang kuat dan unik untuk setiap user di production

## Cara Menjalankan Seeder

```bash
# Reset database dan jalankan semua migrasi + seeder
php artisan migrate:fresh --seed

# Atau hanya jalankan seeder tanpa reset database
php artisan db:seed
```

## Factory States

Anda juga bisa membuat user dengan role tertentu menggunakan factory di code:

```php
// Membuat admin
User::factory()->admin()->create();

// Membuat staff
User::factory()->staff()->create();

// Membuat operator
User::factory()->operator()->create();

// Membuat multiple users
User::factory(5)->staff()->create();
```

## Role Hierarchy

1. **Admin** - Full access, dapat mengelola semua aspek sistem termasuk user management
2. **Staff** - Dapat mengelola konten (berita, galeri, layanan) tetapi tidak dapat mengelola user
3. **Operator** - Akses terbatas, hanya untuk operasional dasar dan melihat data
