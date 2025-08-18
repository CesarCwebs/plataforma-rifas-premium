<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ticket; // Asegúrate de que esta línea esté

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Asumimos que la rifa principal tiene el ID 1
        $raffleId = 1;

        // Generamos 200 boletos para la rifa
        for ($i = 1; $i <= 200; $i++) {
            Ticket::create([
                'number' => $i,
                'status' => 'disponible',
                'raffle_id' => $raffleId,
            ]);
        }
    }
}