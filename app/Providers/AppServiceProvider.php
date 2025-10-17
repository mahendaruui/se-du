<?php

namespace App\Providers;

use App\Listeners\LogFailedLoginAttempt;
use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

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
    }
}
