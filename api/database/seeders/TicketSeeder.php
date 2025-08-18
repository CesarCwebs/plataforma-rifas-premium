<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ticket;

class TicketSeeder extends Seeder
{
    public function run(): void
    {
        $raffleId = 1;
        for ($i = 1; $i <= 200; $i++) {
            Ticket::create([
                'number' => $i,
                'status' => 'disponible',
                'raffle_id' => $raffleId,
            ]);
        }
    }
}