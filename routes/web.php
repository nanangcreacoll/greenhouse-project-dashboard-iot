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
Route::get('/temperature-data', [MonitoringDataController::class, 'getTemperatureData']);
Route::get('/temperature-for-chart', [MonitoringDataController::class, 'getTemperatureForChart']);
Route::get('/air-humidity-data', [MonitoringDataController::class, 'getAirHumidityData']);
Route::get('/air-humidity-for-chart', [MonitoringDataController::class, 'getAirHumidityForChart']);
Route::get('/soil-moisture-data', [MonitoringDataController::class, 'getSoilMoistureData']);
Route::get('/soil-moisture-for-chart', [MonitoringDataController::class, 'getSoilMoistureForChart']);
Route::get('/light-intensity-data', [MonitoringDataController::class, 'getLightIntensityData']);
Route::get('/light-intensity-for-chart', [MonitoringDataController::class, 'getLightIntensityForChart']);
Route::get('/all-data', [MonitoringDataController::class, 'allData']);
Route::post('/store-data', [MonitoringDataController::class, 'storeData']);

// Route::get('/', function () {
//     return view('welcome');
// });
