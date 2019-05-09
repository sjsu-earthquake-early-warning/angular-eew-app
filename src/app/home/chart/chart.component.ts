import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { WavefetchService } from '../../wavefetch.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [WavefetchService]
})

export class ChartComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;

  public date = new Date();
  private setIntervalHandler: any;

  constructor(private wavefetch: WavefetchService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            max: 500,
            min: -500,
            stepSize: 10
          },
          display: false
      }],
      xAxes: [{
        ticks: {
          max: 300,
          min:0,
          stepSize:1
        }
      }]
    }
  };



  public chartLabels = [];
  public chartType = 'line';
  public chartLegend = true;
  public data = {
    // labels: [],
      labels: Array(300).fill(' ', 0, 300).map((x, i) => x.toString()),
      datasets: [],

  };
  public xyData = [];
  public predictionText = '';

  pumpData() {
    let Tminus20 = new Date(Date.now() - 20000);
    let Tminus17 = new Date(Date.now() - 17000);

    let startTime = Tminus20.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    let endTime = Tminus17.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");

    this.data.labels.shift();
    this.data.labels.unshift(startTime);
    this.data.labels.pop();
    this.data.labels.push(endTime);

    let self = this;
    this.wavefetch.getWave().subscribe((response: string) => {
      let resp = response.split('\n');
      let strData = resp[0].split(',');
      let pred = resp[2];
      let data = strData.map((el, ind) => ({ t: ind.toString(), y: el }));
      self.data.datasets[0] = {
        data: data,
        label: 'Seismic Data', fill: false, lineTension: 0, pointRadius: 0, 
        borderColor: '#4B9F8A',
        backgroundColor: '#4B9F8A'
      };
      self.predictionText = pred === "1" ? 'Primary Wave' : 'Signal Noise';



      self.chart = new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: self.data,
        options: self.barChartOptions
      });
    })

    /*
    let xy = {
      x: (Math.random()*1),
      y: (Math.random()*1-0.5)
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
  */
  }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: this.data,
      options: this.barChartOptions
    });
 
    this.setIntervalHandler = setInterval(() => this.pumpData(), 5000);
  }

  ngOnDestroy() {
    clearInterval(this.setIntervalHandler);
  }

}