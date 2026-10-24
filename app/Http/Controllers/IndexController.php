<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class IndexController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function index()
    {        
        $nonce = base64_encode(openssl_random_pseudo_bytes(20));
        return view('index', ['nonce' => $nonce]);
    }
}