import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-echarts-bar',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
    organizationes: any;

  constructor(private theme: NbThemeService,private apiService: ApiService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [/*'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'*/],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [/*10, 52, 200, 334, 390, 330, 220*/],
          },
        ],
      };
    });

      this.organizationes = this.apiService.getOrganizationes()
      if( this.organizationes && this.organizationes.length ){
          for(let i=0;i<this.organizationes.length;i++){

                  this.options.xAxis[0].data.push(
                      this.organizationes[i].orgName
                  )
                  this.options.series[0].data.push(
                       this.organizationes[i].orgCode)
          }
      }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
