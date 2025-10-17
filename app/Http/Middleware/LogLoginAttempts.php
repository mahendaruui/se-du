<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogLoginAttempts
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Log login attempt before processing
        if ($request->isMethod('POST') && $request->routeIs('login')) {
            Log::channel('auth')->info('Login attempt', [
                'email' => $request->input('email'),
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'timestamp' => now()->toDateTimeString(),
            ]);
        }

        $response = $next($request);

        // Log successful login
        if ($request->isMethod('POST') && $request->routeIs('login') && $response->isSuccessful()) {
            Log::channel('auth')->info('Login successful', [
                'email' => $request->input('email'),
                'ip' => $request->ip(),
                'timestamp' => now()->toDateTimeString(),
            ]);
        }

        // Log failed login
        if ($request->isMethod('POST') && $request->routeIs('login') && ! $response->isSuccessful()) {
            Log::channel('auth')->warning('Login failed', [
                'email' => $request->input('email'),
                'ip' => $request->ip(),
                'status' => $response->getStatusCode(),
                'timestamp' => now()->toDateTimeString(),
            ]);
        }

        return $response;
    }
}
