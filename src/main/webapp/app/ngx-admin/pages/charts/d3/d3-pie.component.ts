import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy {
  results = [
 /* { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },*/
  ];
  showLegend = true;
  showLabels = false;
  colorScheme: any;
  themeSubscription: any;
  organizationes: any;


  constructor(
      private theme: NbThemeService,
      private apiService: ApiService,
      ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight,
            colors.warningLight, colors.dangerLight,'white','red','#fcff50','#a5dc7f'],
      };

    });

      this.organizationes = this.apiService.getOrganizationes()
      if( this.organizationes && this.organizationes.length ){
          for(let i=0;i<this.organizationes.length;i++){
              this.results.push({name:this.organizationes[i].orgName, value :this.organizationes[i].id })
          }
      }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
