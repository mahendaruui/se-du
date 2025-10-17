<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('gallery', [
            'galleries' => [],
        ]);
    }
}
