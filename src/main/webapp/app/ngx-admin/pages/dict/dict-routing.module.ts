import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './dict.component';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictionaryClassifyComponent} from "./dictionary-classify/dictionary-classify.component";

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
