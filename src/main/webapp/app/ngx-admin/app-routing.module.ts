import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from './@nebular/auth';
import {AuthGuard} from "./auth-guard.service";
import {JhiLoginModalComponent} from "../shared/login/login.component";
import {RegisterComponent} from "../account/register/register.component";
import {SettingsComponent} from "../account/settings/settings.component";
import {PasswordComponent} from "../account/password/password.component";

const routes: Routes = [
  {
    path: 'pages',
     /*canActivate: [AuthGuard],*/
    loadChildren: () => new Promise(resolve => {(require as any).ensure([],
            require => {resolve(require('./pages/pages.module').PagesModule); }) })
  },
    /*{
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: NbLoginComponent,
            },
            {
                path: 'login',
                component: NbLoginComponent,
            },
            {
                path: 'register',
                component: NbRegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },*/
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: JhiLoginModalComponent,
      },
      {
        path: 'login',
        component: JhiLoginModalComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'reset',
        component: PasswordComponent,
      },
      {
        path: 'setting',
        component: SettingsComponent,
      },
    ],
  },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },//浏览器页面加载后跳转到登入页面
    { path: '**', redirectTo: 'pages' },
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
