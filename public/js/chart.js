function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

function createTemperatureChart(data) {
  // var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // var values = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];

  var temperatureLabels = [];
  var temperatureValues = [];

  data.forEach(function(item) {
    temperatureLabels.push(item.time);
    temperatureValues.push(item.temperature);
  });

  if (window.temperatureChart) {
    window.temperatureChart.destroy();
  }

  // Area Chart Example
  var ctx = document.getElementById("temperature-chart");
  window.temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: temperatureLabels,
      datasets: [{
        label: "Temperature",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: temperatureValues,
      }],
    },
    options: {
      animation : {
        duration : 0
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10
      }
    }
  });
}

function createAirHumidityChart(data) {
  // var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // var values = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];

  var airHumidityLabels = [];
  var airHumidityValues = [];

  data.forEach(function(item) {
    airHumidityLabels.push(item.time);
    airHumidityValues.push(item.air_humidity);
  });

  if (window.airHumidityChart) {
    window.airHumidityChart.destroy();
  }

  // Area Chart Example
  var ctx = document.getElementById("air-humidity-chart");
  window.airHumidityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: airHumidityLabels,
      datasets: [{
        label: "Air Humidity",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "#1cc88a",
        pointRadius: 3,
        pointBackgroundColor: "#1cc88a",
        pointBorderColor: "#1cc88a",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#1cc88a",
        pointHoverBorderColor: "#1cc88a",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: airHumidityValues,
      }],
    },
    options: {
      animation : {
        duration : 0
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10
      }
    }
  });
}

function createSoilMoistureChart(data) {
  // var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // var values = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];

  var soilMoistureLabels = [];
  var soilMoistureValues = [];

  data.forEach(function(item) {
    soilMoistureLabels.push(item.time);
    soilMoistureValues.push(item.soil_moisture);
  });

  if (window.soilMoistureChart) {
    window.soilMoistureChart.destroy();
  }

  // Area Chart Example
  var ctx = document.getElementById("soil-moisture-chart");
  window.soilMoistureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: soilMoistureLabels,
      datasets: [{
        label: "Soil Moisture",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "#36b9cc",
        pointRadius: 3,
        pointBackgroundColor: "#36b9cc",
        pointBorderColor: "#36b9cc",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#36b9cc",
        pointHoverBorderColor: "#36b9cc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: soilMoistureValues,
      }],
    },
    options: {
      animation : {
        duration : 0
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10
      }
    }
  });
}

function createLightIntensityChart(data) {
  // var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // var values = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];

  var lightIntensityLabels = [];
  var lightIntensityValues = [];

  data.forEach(function(item) {
    lightIntensityLabels.push(item.time);
    lightIntensityValues.push(item.light_intensity);
  });

  if (window.lightIntensityChart) {
    window.lightIntensityChart.destroy();
  }

  // Area Chart Example
  var ctx = document.getElementById("light-intensity-chart");
  window.lightIntensityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: lightIntensityLabels,
      datasets: [{
        label: "Soil Moisture",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "#f6c23e",
        pointRadius: 3,
        pointBackgroundColor: "#f6c23e",
        pointBorderColor: "#f6c23e",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#f6c23e",
        pointHoverBorderColor: "#f6c23e",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: lightIntensityValues,
      }],
    },
    options: {
      animation : {
        duration : 0
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10
      }
    }
  });
}

