<?php

use App\Http\Controllers\MonitoringDataController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [MonitoringDataController::class, 'index']);
Route::get('/all-data', [MonitoringDataController::class, 'allData']);
Route::post('/', [MonitoringDataController::class, 'storeData']);

// Route::get('/', function () {
//     return view('welcome');
// });
