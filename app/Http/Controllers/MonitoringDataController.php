<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MonitoringData;


class MonitoringDataController extends Controller
{
    //
    public function index() {
        $latestData = $this->getLatestData();

        return view('dashboard', [
            "title" => "Dashboard",
            "latestData" => $latestData,
        ]);
    }

    public function getAllData() {
        $allData = MonitoringData::all();

        return $allData;
    }

    public function getLatestData() {
        $latestData = MonitoringData::latest('time')->first();

        return $latestData;
    }

    public function getTemperatureData() {
        $temperatureData = MonitoringData::select('temperature')->latest('time')->first();
        return response()->json($temperatureData);
    }

    public function getTemperatureForChart() {
        $temperatureForChart = MonitoringData::select('time', 'temperature')->latest('time')->take(30)->get()->reverse()->values();

        return response()->json($temperatureForChart);
    }

    public function getAirHumidityData() {
        $airHumidityData = MonitoringData::select('air_humidity')->latest('time')->first();
        return response()->json($airHumidityData);
    }

    public function getAirHumidityForChart() {
        $airHumidityForChart = MonitoringData::select('time', 'air_humidity')->latest('time')->take(30)->get()->reverse()->values();

        return response()->json($airHumidityForChart);
    }


    public function getSoilMoistureData() {
        $soilMoistureData = MonitoringData::select('soil_moisture')->latest('time')->first();
        return response()->json($soilMoistureData);
    }

    public function getSoilMoistureForChart() {
        $soilMoistureForChart = MonitoringData::select('time', 'soil_moisture')->latest('time')->take(30)->get()->reverse()->values();

        return response()->json($soilMoistureForChart);
    }

    public function getLightIntensityData() {
        $lightIntensityData = MonitoringData::select('light_intensity')->latest('time')->first();
        return response()->json($lightIntensityData);
    }

    public function getLightIntensityForChart() {
        $lightIntensityForChart = MonitoringData::select('time', 'light_intensity')->latest('time')->take(30)->get()->reverse()->values();

        return response()->json($lightIntensityForChart);
    }

    public function allData() {
        $data = $this->getAllData();

        return view('all-data', [
            "title" => "Data Table",
            "data" => $data
        ]);
    }

    public function storeData(Request $request) {    
        // Simpan data ke database
        $data = new MonitoringData();
        $data->temperature = $request->input('temperature');
        $data->air_humidity = $request->input('air_humidity');
        $data->soil_moisture = $request->input('soil_moisture');
        $data->light_intensity = $request->input('light_intensity');
        $data->fan1_status = $request->input('fan1_status');
        $data->fan2_status = $request->input('fan2_status');
        $data->pump1_status = $request->input('pump1_status');
        $data->pump2_status = $request->input('pump2_status');
        $data->save();

        return response()->json(['message' => 'Data stored successfully.']);
    }
}
