import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NbAuthComponent,} from './@nebular/auth';
import {RegisterComponent} from "../account/register/register.component";
import {SettingsComponent} from "../account/settings/settings.component";
import {PasswordComponent} from "../account/password/password.component";
import {UserRouteAccessService} from "../shared/auth/user-route-access-service";
import {MapHomeComponent} from "./pages/admin/baidu-home/mapHome.component";





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
        component: MapHomeComponent,

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
    { path: '**', redirectTo: 'pages' },
];


// forRoot有一个可选的配置参数，里面有四个选项
// enableTracing ：在console.log中打印出路由内部事件信息
// useHash ：把url改成hash风格，protocol://domain/#/account/login
// initialNavigation ： 禁用初始导航，没用过。。
// errorHandler ：使用自定义的错误处理，来抛出报错信息；
const config: ExtraOptions = {
  useHash: true,
    enableTracing : true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
