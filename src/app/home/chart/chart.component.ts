import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  public date = new Date();
  private setIntervalHandler: any;

  constructor() {
   }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartLabels = [];
  public chartType = 'line';
  public chartLegend = true;
  public chartData = [
    {
      data: [],
      label: 'Seismic Data', fill: false, lineTension: 0, pointRadius: 0 
    },
  ];
  public xyData = [];

  pumpData() {
    let xy = {
      x: (Math.random()*100),
      y: (Math.random()*100)
    }



    if(this.xyData.length >= 50 && this.chartLabels.length >=50){
      this.xyData.shift();
      this.chartLabels.shift();
    }
    let time = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    this.chartLabels.push(time);
    this.xyData.push(xy);
    

    let chartData = [
      {
        data: [],
        label: 'Seismic Data', fill: false, lineTension: 0, pointRadius: 0 
      },
    ];

    this.xyData.forEach((e) => {
      chartData[0].data.push(e);
    })
    
  this.chartData = chartData;

  console.log(this.chartData);
  console.log(this.date.getTime());
  
  }

  ngOnInit() {
    this.setIntervalHandler = setInterval(() => this.pumpData(), 3000);
  }

  ngOnDestroy() {
    clearInterval(this.setIntervalHandler);
  }

}