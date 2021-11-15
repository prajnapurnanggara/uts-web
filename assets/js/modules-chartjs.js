"use strict";

//
var statistics_chart = document.getElementById("statisticChart").getContext('2d');
var myChart = new Chart(statistics_chart, {
  type: 'line',
  data: {
    labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"],
    datasets: [{
      label: 'IPS',
      data: [3.0, 3.2, 3.0, 3.4, 3.3, 3.0, 3.5],
      borderWidth: 5,
      borderColor: '#6777ef',
      backgroundColor: 'transparent',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#6777ef',
      pointRadius: 3
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          drawBorder: true,
        },
        ticks: {
          reverse: false,
          stepSize: 1,
          beginAtZero: true
        },
      }],
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
        },
        gridLines: {
          display: true,
          drawBorder: true,
          color: '#fbfbfb',
          lineWidth: 2
        },
        ticks: {
          reverse: false,
          stepSize: 1,
          beginAtZero: true
        },
      }]
    },
  }
});

//
var ctx = document.getElementById("ratioChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"],
    datasets: [{
      label: 'I Putu Cikal Taruna',
      data: [3.0, 3.2, 3.0, 3.4, 3.3, 3.0, 3.5],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)',
      borderColor: 'transparent',
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }, {
      label: 'Rata-rata Prodi',
      data: [2.8, 3.0, 3.3, 3.1, 2.9, 3.8, 3.5],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderColor: 'rgba(254,86,83,.7)',
      borderWidth: 0,
      pointBackgroundColor: '#999',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: true
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }],
      xAxes: [{
        gridLines: {
          display: true
        }
      }]
    },
  }
});