<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class LogFailedLoginAttempt
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Failed $event): void
    {
        $email = $event->credentials['email'] ?? 'unknown';
        $ip = request()->ip();

        // Log failed attempt
        Log::channel('auth')->warning('Failed login attempt', [
            'email' => $email,
            'ip' => $ip,
            'user_agent' => request()->userAgent(),
            'timestamp' => now()->toDateTimeString(),
        ]);

        // Track failed attempts per email
        $cacheKey = 'failed_login_attempts_'.$email;
        $attempts = Cache::get($cacheKey, 0);
        $attempts++;

        // Store for 1 hour
        Cache::put($cacheKey, $attempts, now()->addHour());

        // Alert if too many failed attempts (10 attempts in 1 hour)
        if ($attempts >= 10) {
            Log::channel('auth')->critical('Possible brute force attack detected', [
                'email' => $email,
                'ip' => $ip,
                'attempts' => $attempts,
                'timestamp' => now()->toDateTimeString(),
            ]);
        }
    }
}
