import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NbAuthComponent,} from './@nebular/auth';
import {JhiLoginModalComponent} from "../shared/login/login.component";
import {RegisterComponent} from "../account/register/register.component";
import {SettingsComponent} from "../account/settings/settings.component";
import {PasswordComponent} from "../account/password/password.component";

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => new Promise(resolve => {(require as any).ensure([],
            require => {resolve(require('./pages/pages.module').PagesModule); }) })
  },
  {
    path: '',
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
    { path: '', redirectTo: 'login', pathMatch: 'full' },//浏览器页面加载后跳转到登入页面
    { path: '**', redirectTo: 'login' },
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
