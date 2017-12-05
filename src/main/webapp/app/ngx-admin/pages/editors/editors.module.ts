import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../@theme/theme.module';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';
import {ToasterService} from "angular2-toaster";
import {ComponentsModule} from '../components/components.module';


@NgModule({
  imports: [
    ThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
      ThemeModule,
      ComponentsModule
  ],
  declarations: [
    ...routedComponents,
  ],
    providers:[ToasterService]
})
export class EditorsModule { }
