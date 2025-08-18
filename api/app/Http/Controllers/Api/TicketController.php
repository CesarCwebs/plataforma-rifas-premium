<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Muestra una lista de todos los boletos.
     */
    public function index()
    {
        // Busca todos los boletos en la base de datos usando el modelo Ticket
        $tickets = Ticket::all();
        // Devuelve los boletos como una respuesta JSON
        return response()->json($tickets);
    }
}