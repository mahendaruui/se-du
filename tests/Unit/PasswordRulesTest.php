<?php

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

it('rejects password without uppercase letter', function () {
    $validator = Validator::make(
        ['password' => 'password123!'],
        ['password' => Password::defaults()]
    );

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('password'))->toBeTrue();
});

it('rejects password without lowercase letter', function () {
    $validator = Validator::make(
        ['password' => 'PASSWORD123!'],
        ['password' => Password::defaults()]
    );

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('password'))->toBeTrue();
});

it('rejects password without number', function () {
    $validator = Validator::make(
        ['password' => 'PasswordAbc!'],
        ['password' => Password::defaults()]
    );

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('password'))->toBeTrue();
});

it('rejects password without symbol', function () {
    $validator = Validator::make(
        ['password' => 'Password123'],
        ['password' => Password::defaults()]
    );

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('password'))->toBeTrue();
});

it('rejects password shorter than 8 characters', function () {
    $validator = Validator::make(
        ['password' => 'Pass1!'],
        ['password' => Password::defaults()]
    );

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('password'))->toBeTrue();
});

it('accepts valid password with all requirements', function () {
    $validator = Validator::make(
        ['password' => 'ValidPassword123!'],
        ['password' => Password::defaults()]
    );

    expect($validator->passes())->toBeTrue()
        ->and($validator->errors()->has('password'))->toBeFalse();
});

it('accepts password with various symbols', function () {
    $symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

    foreach ($symbols as $symbol) {
        $password = 'Valid123'.$symbol;

        $validator = Validator::make(
            ['password' => $password],
            ['password' => Password::defaults()]
        );

        expect($validator->passes())->toBeTrue();
    }
});

it('provides clear error messages for invalid passwords', function () {
    $validator = Validator::make(
        ['password' => 'password'],
        ['password' => Password::defaults()]
    );

    $errors = $validator->errors()->get('password');

    expect($errors)->toBeArray()
        ->and(count($errors))->toBeGreaterThan(0);
});
