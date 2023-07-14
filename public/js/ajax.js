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

    function updateFan1StatusData() {
        $.ajax({
            url: 'fan1-status-data',
            method: 'GET',
            success: function(response) {
                $('#fan1-status-data').html(
                    function () {
                        if (response.fan1_status == 1) {
                            return "ON"
                        } else if (response.fan1_status == 0) {
                            return "OFF"
                        }
                    });
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }
    
    function updateFan2StatusData() {
        $.ajax({
            url: 'fan2-status-data',
            method: 'GET',
            success: function(response) {
                $('#fan2-status-data').html(
                    function () {
                        if (response.fan2_status == 1) {
                            return "ON"
                        } else if (response.fan2_status == 0) {
                            return "OFF"
                        }
                    });
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function updatePump1StatusData() {
        $.ajax({
            url: 'pump1-status-data',
            method: 'GET',
            success: function(response) {
                $('#pump1-status-data').html(
                    function () {
                        if (response.pump1_status == 1) {
                            return "ON"
                        } else if (response.pump1_status == 0) {
                            return "OFF"
                        }
                    });
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        });
    }

    function updatePump2StatusData() {
        $.ajax({
            url: 'pump2-status-data',
            method: 'GET',
            success: function(response) {
                $('#pump2-status-data').html(
                    function () {
                        if (response.pump2_status == 1) {
                            return "ON"
                        } else if (response.pump2_status == 0) {
                            return "OFF"
                        }
                    });
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
            updateFan1StatusData();
            updateFan2StatusData();
            updatePump1StatusData();
            updatePump2StatusData();
        }, 1000);
    }
});