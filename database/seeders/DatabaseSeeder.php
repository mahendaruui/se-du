<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Admin User
        User::firstOrCreate(
            ['email' => 'admin@sedu.test'],
            [
                'name' => 'Administrator SE-DU',
                'password' => 'password',
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );

        // Create Staff Users
        User::firstOrCreate(
            ['email' => 'staff@sedu.test'],
            [
                'name' => 'Staff SE-DU',
                'password' => 'password',
                'role' => 'staff',
                'email_verified_at' => now(),
            ]
        );

        User::firstOrCreate(
            ['email' => 'koordinator@sedu.test'],
            [
                'name' => 'Koordinator SE-DU',
                'password' => 'password',
                'role' => 'staff',
                'email_verified_at' => now(),
            ]
        );

        // Create Operator Users
        User::firstOrCreate(
            ['email' => 'operator@sedu.test'],
            [
                'name' => 'Operator SE-DU',
                'password' => 'password',
                'role' => 'operator',
                'email_verified_at' => now(),
            ]
        );

        User::firstOrCreate(
            ['email' => 'helpdesk@sedu.test'],
            [
                'name' => 'Helpdesk SE-DU',
                'password' => 'password',
                'role' => 'operator',
                'email_verified_at' => now(),
            ]
        );

        // Optional: Create test users with different roles using factory
        // User::factory(3)->admin()->create();
        // User::factory(5)->staff()->create();
        // User::factory(2)->operator()->create();
    }
}
