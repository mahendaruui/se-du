<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('contact');
    }

    public function store(Request $request)
    {
        // TODO: Implement contact form submission
        return back()->with('success', 'Pesan Anda telah terkirim!');
    }
}
