<?php

use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('creates admin user', function () {
    $this->seed(DatabaseSeeder::class);

    $admin = User::where('email', 'admin@sedu.test')->first();

    expect($admin)->not->toBeNull()
        ->and($admin->name)->toBe('Administrator SE-DU')
        ->and($admin->role)->toBe('admin')
        ->and($admin->email_verified_at)->not->toBeNull();
});

it('creates staff users', function () {
    $this->seed(DatabaseSeeder::class);

    $staff = User::where('email', 'staff@sedu.test')->first();
    $koordinator = User::where('email', 'koordinator@sedu.test')->first();

    expect($staff)->not->toBeNull()
        ->and($staff->role)->toBe('staff')
        ->and($koordinator)->not->toBeNull()
        ->and($koordinator->role)->toBe('staff');
});

it('creates operator users', function () {
    $this->seed(DatabaseSeeder::class);

    $operator = User::where('email', 'operator@sedu.test')->first();
    $helpdesk = User::where('email', 'helpdesk@sedu.test')->first();

    expect($operator)->not->toBeNull()
        ->and($operator->role)->toBe('operator')
        ->and($helpdesk)->not->toBeNull()
        ->and($helpdesk->role)->toBe('operator');
});

it('creates exactly five users with seeder', function () {
    $this->seed(DatabaseSeeder::class);

    $count = User::count();

    expect($count)->toBe(5);
});

it('does not create duplicate users on multiple seeds', function () {
    $this->seed(DatabaseSeeder::class);
    $this->seed(DatabaseSeeder::class);

    $count = User::count();

    expect($count)->toBe(5);
});

it('ensures all users have verified emails', function () {
    $this->seed(DatabaseSeeder::class);

    $unverified = User::whereNull('email_verified_at')->count();

    expect($unverified)->toBe(0);
});
