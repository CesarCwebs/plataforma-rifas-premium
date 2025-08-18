<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TicketController;

Route::get('/tickets', [TicketController::class, 'index'])->withoutMiddleware('auth:sanctum');
