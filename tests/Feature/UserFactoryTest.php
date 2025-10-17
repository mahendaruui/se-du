<?php

use App\Models\User;

it('creates user with default operator role', function () {
    $user = User::factory()->create();

    expect($user->role)->toBe('operator');
});

it('creates user with admin role', function () {
    $user = User::factory()->admin()->create();

    expect($user->role)->toBe('admin');
});

it('creates user with staff role', function () {
    $user = User::factory()->staff()->create();

    expect($user->role)->toBe('staff');
});

it('creates user with operator role', function () {
    $user = User::factory()->operator()->create();

    expect($user->role)->toBe('operator');
});

it('creates multiple users with specific role', function () {
    $admins = User::factory(3)->admin()->create();
    $staff = User::factory(5)->staff()->create();

    expect($admins)->toHaveCount(3)
        ->and($admins->every(fn ($user) => $user->role === 'admin'))->toBeTrue()
        ->and($staff)->toHaveCount(5)
        ->and($staff->every(fn ($user) => $user->role === 'staff'))->toBeTrue();
});

it('creates user without two factor authentication', function () {
    $user = User::factory()->withoutTwoFactor()->create();

    expect($user->two_factor_secret)->toBeNull()
        ->and($user->two_factor_recovery_codes)->toBeNull()
        ->and($user->two_factor_confirmed_at)->toBeNull();
});
