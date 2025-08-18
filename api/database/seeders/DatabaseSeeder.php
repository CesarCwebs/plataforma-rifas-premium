<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Esta línea crea el usuario de prueba por defecto de Laravel
         \App\Models\User::factory()->create([
             'name' => 'Test User',
             'email' => 'test@example.com',
         ]);

        // ESTA LÍNEA LE DICE QUE EJECUTE NUESTRO SEEDER DE BOLETOS
        $this->call(TicketSeeder::class);
    }
}