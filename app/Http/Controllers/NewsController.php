<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('news/index', [
            'news' => [],
        ]);
    }

    public function show(string $slug): Response
    {
        return Inertia::render('news/show', [
            'post' => null,
        ]);
    }
}
