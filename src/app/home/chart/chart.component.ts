import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartType = 'line';
  public chartLegend = true;
  public chartData = [
    {data: [
    ],
       label: 'Seismic Data', fill: false, lineTension: 0, pointRadius: 0 },
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {
    for (let i = 0 ; i <200; i++) {
      let xy = {
        x: (Math.random()*100),
        y: (Math.random()*100)
      }
    this.chartData[0].data.push(xy);
          // this.chartData[0].data[i].y = (Math.random()*i);

    this.chartLabels.push(i + '');
    }
  }

}