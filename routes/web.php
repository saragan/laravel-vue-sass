<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\IndexController::class, "index"]);
Route::get('/{catchall?}', [\App\Http\Controllers\IndexController::class, "index"])->where('catchall', '(.*)');