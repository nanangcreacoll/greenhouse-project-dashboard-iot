@extends('layouts.main')
@section('content')
<div class="container-fluid">
    <h1 class="h3 ml-3 mb-3 text-gray-800">Dashboard</h1>

    <div class="row">
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-primary text-uppercase mb-2">
                                Temperature</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-800">
                                <text id="temperature-data">
                                    {{ $latestData->temperature }}
                                </text>
                                <sup class="font-weight-normal">&#8451;</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-success text-uppercase mb-2">
                                Air Humidity</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-800">
                                <text id="air-humidity-data">
                                    {{ $latestData->air_humidity }}
                                </text>
                                <sup class="font-weight-normal">%RH</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-info text-uppercase mb-2">
                                Soil Moisture</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-800">
                                <text id="soil-moisture-data">
                                    {{ $latestData->soil_moisture }}
                                </text>
                                <sup class="font-weight-normal">%RH</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-warning text-uppercase mb-2">
                                Light Intensity</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-800">
                                <text id="light-intensity-data">
                                    {{ $latestData->light_intensity }}
                                </text>
                                <sup class="font-weight-normal">Lux</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col mb-4">
            <div class="card border-left-secondary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-gray-800 text-uppercase mb-2">
                                Fan 1</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-500">
                                <text id="fan1-status-data">
                                    {{ $latestData->fan1_status == 1 ? 'ON' : 'OFF'}}
                                </text>
                            </div>
                        </div>
                        <div class="col">
                            <div class="vr"></div>
                        </div>
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-gray-800 text-uppercase mb-2">
                                Fan 2</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-500">
                                <text id="fan2-status-data">
                                    {{ $latestData->fan2_status == 1 ? 'ON' : 'OFF'}}
                                </text>
                            </div>
                        </div>
                        <div class="col">
                            <div class="vr"></div>
                        </div>
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-gray-800 text-uppercase mb-2">
                                Spray Pump</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-500">
                                <text id="pump1-status-data">
                                    {{ $latestData->pump1_status == 1 ? 'ON' : 'OFF'}}
                                </text>
                            </div>
                        </div>
                        <div class="col">
                            <div class="vr"></div>
                        </div>
                        <div class="col mr-2">
                            <div class="text font-weight-bold text-gray-800 text-uppercase mb-2">
                                Water Pump</div>
                            <div class="h3 mb-0 font-weight-bold text-gray-500">
                                <text id="pump2-status-data">
                                    {{ $latestData->pump2_status == 1 ? 'ON' : 'OFF'}}
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6 col-lg-7">
            <div class="card shadow mb-4">
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Temperature</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="temperature-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-lg-7">
            <div class="card shadow mb-4">
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-success">Air Humidity</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="air-humidity-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6 col-lg-7">
            <div class="card shadow mb-4">
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-info">Soil Moisture</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="soil-moisture-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-lg-7">
            <div class="card shadow mb-4">
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-warning">Light Intensity</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="light-intensity-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection