import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-d3-advanced-pie',
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent implements OnDestroy {
  single = [
    /*{
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },*/
  ];
  colorScheme: any;
  themeSubscription: any;
    companies:any;

  constructor(
      private theme: NbThemeService,
      private apiService: ApiService,
      ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });


    this.companies = this.apiService.getCompanies()
      if( this.companies && this.companies.length ){
        for( let i=0; i<this.companies.length; i++){
            this.single.push({name:this.companies[i].companyName, value:this.companies[i].id})
        }
      }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
