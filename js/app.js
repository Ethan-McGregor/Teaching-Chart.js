'strict'
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([['Task', 'Hours per day'], ['Work', 11], ['eat', 2], ['Commute', 2], ['Watch Tv', 1.5]]);

    var options = { title: 'My Daily Activities', is3D:true }

    var chart = new google.visualization.Histogram(document.getElementById('piechart'));
    chart.draw(data, options);
};

