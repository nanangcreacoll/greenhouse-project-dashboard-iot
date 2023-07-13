<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        //
        'http://127.0.0.1:8000/*',
        'http://greenhouse-project.test/*',
        'http://192.168.1.22:8000/*',
        'http://192.168.43.94:8000/*'
    ];
}
