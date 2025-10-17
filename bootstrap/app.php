<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            // Configure rate limiters for authentication
            RateLimiter::for('login', function (Request $request) {
                $email = (string) $request->email;

                return [
                    // Per email: 5 attempts per 5 minutes
                    Limit::perMinutes(5, 5)->by($email.$request->ip())->response(function (Request $request, array $headers) {
                        return response()->json([
                            'message' => 'Terlalu banyak percobaan login. Silakan coba lagi dalam 5 menit.',
                        ], 429, $headers);
                    }),
                    // Global per IP: 10 attempts per 5 minutes
                    Limit::perMinutes(5, 10)->by($request->ip())->response(function (Request $request, array $headers) {
                        return response()->json([
                            'message' => 'Terlalu banyak percobaan login dari IP ini. Silakan coba lagi dalam 5 menit.',
                        ], 429, $headers);
                    }),
                ];
            });

            RateLimiter::for('two-factor', function (Request $request) {
                return Limit::perMinute(5)->by($request->session()->get('login.id'));
            });
        },
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        $middleware->web(prepend: [
            \App\Http\Middleware\SecurityHeaders::class,
            \App\Http\Middleware\CheckBlockedIp::class,
            \App\Http\Middleware\LogLoginAttempts::class,
        ]);

        $middleware->alias([
            'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
