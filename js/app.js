'strict'
//loads the most recent packages of google charts
google.charts.load("current", { packages: ["corechart"] });
//runs function once package is laoded
google.charts.setOnLoadCallback(drawChart);

//runs after callback. draws the chart
function drawChart() {
    //data var that google uses for the chart
    var data = google.visualization.arrayToDataTable(
        [
            ['Task', 'Hours per day'],
            ['Work', 11],
            ['eat', 2],
            ['Commute', 2],
            ['Watch Tv', 1.5]
        ]);

    //options toggle diffrent settings like title and if the chart is 
    //3D or not
    var options = {
        title: 'My Daily Activities',
        is3D: true
    }

    //makes the chart and places it into the html
    var chart = new google.visualization.PieChart
    (document.getElementById('piechart')); //can change PieChart to Histogram for a histogram graph

    //draws chart with current data and options
    chart.draw(data, options);
};

