<?php

it('adds security headers to responses', function () {
    $response = $this->get('/');

    $response->assertHeader('X-Frame-Options', 'SAMEORIGIN');
    $response->assertHeader('X-Content-Type-Options', 'nosniff');
    $response->assertHeader('X-XSS-Protection', '1; mode=block');
    $response->assertHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
});

it('adds content security policy header', function () {
    $response = $this->get('/');

    expect($response->headers->has('Content-Security-Policy'))->toBeTrue();
});

it('includes vite dev server in csp for local environment', function () {
    config(['app.env' => 'local']);

    $response = $this->get('/');

    $csp = $response->headers->get('Content-Security-Policy');

    expect($csp)->toContain('se-du.test:5173');
});

it('allows self scripts in csp', function () {
    $response = $this->get('/');

    $csp = $response->headers->get('Content-Security-Policy');

    expect($csp)->toContain("script-src 'self'");
});

it('allows google fonts', function () {
    $response = $this->get('/');

    $csp = $response->headers->get('Content-Security-Policy');

    expect($csp)->toContain('https://fonts.googleapis.com');
    expect($csp)->toContain('https://fonts.gstatic.com');
});

it('includes websocket connection for vite hmr in local environment', function () {
    $response = $this->get('/');

    $csp = $response->headers->get('Content-Security-Policy');

    // Check for WebSocket connections
    expect($csp)->toContain('connect-src');
});
