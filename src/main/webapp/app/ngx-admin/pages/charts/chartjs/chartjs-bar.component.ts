import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-chartjs-bar',
  template: `      
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
    organizationes: any;


  constructor(private theme: NbThemeService,
              private apiService: ApiService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;


      this.data = {
        labels: [/*'2006', '2007', '2008', '2009', '2010', '2011', '2012'*/],
        datasets: [{
            data: [/*65, 59, 80, 81, 56, 55, 40*/],
            label: 'orgCode',
            barWidth: '10%',
            backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
            data: [/*28, 48, 40, 19, 86, 27, 90*/],
            label: 'companyCode',
            barWidth: '60%',
            backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });

      //添加
      this.organizationes = this.apiService.getOrganizationes()
      if( this.organizationes && this.organizationes.length ){
          for(let i=0;i<this.organizationes.length;i++){

              this.data.labels.push(
                  this.organizationes[i].orgName
              )

              this.data.datasets[0].data.push(
                  this.organizationes[i].orgCode
              )
              this.data.datasets[1].data.push(
                  this.organizationes[i].companyCode
              )
          }
      }

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
