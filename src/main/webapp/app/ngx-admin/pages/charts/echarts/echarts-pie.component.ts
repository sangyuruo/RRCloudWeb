import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
    organizationes: any;


  constructor(private theme: NbThemeService,private apiService: ApiService) {

  }

  ngAfterViewInit() {

      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors = config.variables;
          const echarts: any = config.variables.echarts;

          this.options = {
              backgroundColor: echarts.bg,
              color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
              tooltip: {
                  trigger: 'item',//触发类型，默认数据触发 (可选为：'item' | 'axis')
                  formatter: '{a} <br/>{b} : {c} ({d}%)',//格式化数为需要的数组或map暂存，根据坐标的值(作为key等) 自定义提示内容(从各个内容的数组/map中获取)
              },
              legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: [/*'USA', 'Germany', 'France', 'Canada', 'Russia'*/],
                  textStyle: {
                      color: echarts.textColor,
                  },
              },
              series: [
                  {
                      name: 'Countries',
                      type: 'pie',
                      radius: '60%',
                      center: ['50%', '50%'],
                      data: [
                        /*{ value: 335, name: 'Germany' },
                          { value: 310, name: 'France' },
                          { value: 234, name: 'Canada' },
                          { value: 135, name: 'Russia' },
                          { value: 1548, name: 'USA' },*/
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 50,
                              shadowOffsetX: 20,
                              shadowColor: echarts.itemHoverShadowColor,
                          },
                      },
                      label: {
                          normal: {
                              textStyle: {
                                  color: echarts.textColor,
                              },
                          },
                      },
                      labelLine: {
                          normal: {
                              lineStyle: {
                                  color: echarts.axisLineColor,
                              },
                          },
                      },
                  },
              ],
          };
      });


      this.organizationes = this.apiService.getOrganizationes()
      if( this.organizationes && this.organizationes.length ){
          for(let i=0;i<this.organizationes.length;i++){

              this.options.legend.data.push(this.organizationes[i].orgName),

                  this.options.series[0].data.push(
                      {value: this.organizationes[i].orgCode, name: this.organizationes[i].orgName})
          }
      }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
