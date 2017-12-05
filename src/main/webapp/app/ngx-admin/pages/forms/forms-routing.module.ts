import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import {TreeComponent} from "../components/tree/tree.component";
import {ExampleComponent} from "./example.component";

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [{
    path: 'example',
      component:ExampleComponent,
      children:[{
        path:'son',
          component:TreeComponent,
      }]
  }, {
    path: 'layouts',
    component: FormLayoutsComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent,
  FormLayoutsComponent,
];
