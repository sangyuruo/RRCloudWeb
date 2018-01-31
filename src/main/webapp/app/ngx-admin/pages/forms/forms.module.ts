import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';

import {ComponentsModule} from '../components/components.module';
import {ExampleComponent} from "./example.component";

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
      ComponentsModule
  ],
  declarations: [
    ...routedComponents,
      ExampleComponent

  ],
})
export class FormsModule { }
