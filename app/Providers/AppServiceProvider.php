<?php

namespace App\Providers;

use App\Listeners\LogFailedLoginAttempt;
use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Listen for failed login attempts
        Event::listen(
            Failed::class,
            LogFailedLoginAttempt::class,
        );

        // Set default password validation rules
        Password::defaults(function () {
            return Password::min(8)
                ->letters()           // Harus ada huruf
                ->mixedCase()         // Harus ada huruf kapital dan kecil
                ->numbers()           // Harus ada angka
                ->symbols()           // Harus ada simbol
                ->uncompromised();    // Cek password yang pernah bocor
        });
    }
}
