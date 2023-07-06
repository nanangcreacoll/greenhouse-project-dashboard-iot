@extends('layouts.main')
@section('content')
<div class="container-fluid">
    <h1 class="h3 ml-3 mb-3 text-gray-800">Data Table</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Data Monitoring Greenhouse</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Temperature (&#8451;)</th>
                            <th>Air Humidity (%RH)</th>
                            <th>Soil Moisture (%RH)</th>
                            <th>Light Intensity (Lux)</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Time</th>
                            <th>Temperature</th>
                            <th>Air Humidity</th>
                            <th>Soil Moisture</th>
                            <th>Light Intensity</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @foreach ($data as $item)
                            <tr>
                                <td>{{ $item->time }}</td>
                                <td>{{ $item->temperature }}</td>
                                <td>{{ $item->air_humidity }}</td>
                                <td>{{ $item->soil_moisture }}</td>
                                <td>{{ $item->light_intensity }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

@endsection