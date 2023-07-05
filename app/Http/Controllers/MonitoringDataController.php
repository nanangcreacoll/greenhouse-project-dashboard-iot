<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MonitoringDataController extends Controller
{
    //
    public function index() {
        return view('dashboard', [
            "title" => "Dashboard"
        ]);
    }

    public function allData() {
        return view('all-data', [
            "title" => "Data Table"
        ]);
    }

    public function storeData() {
        
    }
}
