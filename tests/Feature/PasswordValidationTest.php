<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

it('rejects password without uppercase letter', function () {
    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
        'current_password' => 'Password123!',
        'password' => 'password123!',
        'password_confirmation' => 'password123!',
    ]);

    $response->assertSessionHasErrors('password');
});

it('rejects password without lowercase letter', function () {
    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
        'current_password' => 'Password123!',
        'password' => 'PASSWORD123!',
        'password_confirmation' => 'PASSWORD123!',
    ]);

    $response->assertSessionHasErrors('password');
});

it('rejects password without number', function () {
    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
        'current_password' => 'Password123!',
        'password' => 'PasswordAbc!',
        'password_confirmation' => 'PasswordAbc!',
    ]);

    $response->assertSessionHasErrors('password');
});

it('rejects password without symbol', function () {
    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
        'current_password' => 'Password123!',
        'password' => 'Password123',
        'password_confirmation' => 'Password123',
    ]);

    $response->assertSessionHasErrors('password');
});

it('rejects password shorter than 8 characters', function () {
    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
        'current_password' => 'Password123!',
        'password' => 'Pass1!',
        'password_confirmation' => 'Pass1!',
    ]);

    $response->assertSessionHasErrors('password');
});

it('accepts valid password with all requirements', function () {
    $user = User::factory()->create([
        'password' => 'OldPassword123!',
    ]);

    $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
        'current_password' => 'OldPassword123!',
        'password' => 'NewPassword456@',
        'password_confirmation' => 'NewPassword456@',
    ]);

    $response->assertSessionHasNoErrors();

    expect(Hash::check('NewPassword456@', $user->fresh()->password))->toBeTrue();
});

it('accepts password with various symbols', function () {
    $symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

    foreach ($symbols as $symbol) {
        $user = User::factory()->create([
            'password' => 'Password123!',
        ]);

        $password = 'Valid123'.$symbol;

        $response = $this->actingAs($user)->from(route('password.edit'))->put(route('password.update'), [
            'current_password' => 'Password123!',
            'password' => $password,
            'password_confirmation' => $password,
        ]);

        $response->assertSessionHasNoErrors();
        expect(Hash::check($password, $user->fresh()->password))->toBeTrue();
    }
});
