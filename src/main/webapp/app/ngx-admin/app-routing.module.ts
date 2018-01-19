import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NbAuthComponent,} from './@nebular/auth';
import {RegisterComponent} from "../account/register/register.component";
import {SettingsComponent} from "../account/settings/settings.component";
import {PasswordComponent} from "../account/password/password.component";
import {HomeComponent} from "./@theme/components/home/home.component";
import {UserRouteAccessService} from "../shared/auth/user-route-access-service";


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => new Promise(resolve => {(require as any).ensure([],
            require => {resolve(require('./pages/pages.module').PagesModule); }) }),
  },
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: HomeComponent,

      },
      {
        path: 'register',
        component: RegisterComponent,
          data: {
              authorities: [],
          }
      },
      {
        path: 'password',
        component: PasswordComponent,
          data: {
              authorities: ['ROLE_USER'],
          },
          canActivate: [UserRouteAccessService]
      },
      {
        path: 'setting',
        component: SettingsComponent,
          data: {
              authorities: ['ROLE_USER'],
          },
          canActivate: [UserRouteAccessService]
      },
    ],
  },


    { path: '', redirectTo: 'pages', pathMatch: 'full' },//浏览器页面加载后跳转到登入页面
    /*{ path: '**', redirectTo: 'pages' },*/
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
