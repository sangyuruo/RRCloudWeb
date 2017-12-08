import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictionaryClassifyComponent} from "./dictionaryClassify/dictionaryClassify.component";

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
      {
          path: 'dictionary',
          component: DictionaryComponent,
      },

      {
          path: 'DictionaryClassify',
          component: DictionaryClassifyComponent,
      }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
    DictionaryComponent,
    DictionaryClassifyComponent];
