$(document).ready(function() {
    function updateTemperatureData() {
        $.ajax({
            url: 'temperature-data',
            method: 'GET',
            success: function(response) {
                $('#temperature-data').html(response.temperature);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }
    
    function updateAirHumidityData() {
        $.ajax({
            url: 'air-humidity-data',
            method: 'GET',
            success: function(response) {
                $('#air-humidity-data').html(response.air_humidity);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function updateSoilMoistureData() {
        $.ajax({
            url: 'soil-moisture-data',
            method: 'GET',
            success: function(response) {
                $('#soil-moisture-data').html(response.soil_moisture);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function updateLightIntensityData() {
        $.ajax({
            url: 'light-intensity-data',
            method: 'GET',
            success: function(response) {
                $('#light-intensity-data').html(response.light_intensity);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function temperatureChart() {
        $.ajax({
            url: 'temperature-for-chart',
            method: 'GET',
            success: function(response) {
                createTemperatureChart(response);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function airHumidityChart() {
        $.ajax({
            url: 'air-humidity-for-chart',
            method: 'GET',
            success: function(response) {
                createAirHumidityChart(response);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function soilMoistureChart() {
        $.ajax({
            url: 'soil-moisture-for-chart',
            method: 'GET',
            success: function(response) {
                createSoilMoistureChart(response);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function lightIntensityChart() {
        $.ajax({
            url: 'light-intensity-for-chart',
            method: 'GET',
            success: function(response) {
                createLightIntensityChart(response);
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    if (window.location.pathname == '/') {
        setInterval(function() {
            updateTemperatureData();
            updateAirHumidityData();
            updateSoilMoistureData();
            updateLightIntensityData();
            temperatureChart();
            airHumidityChart();
            soilMoistureChart();
            lightIntensityChart();
        }, 1000);
        
        updateTemperatureData();
        updateAirHumidityData();
        updateSoilMoistureData();
        updateLightIntensityData();
        temperatureChart();
        airHumidityChart();
        soilMoistureChart();
        lightIntensityChart();
    }
});