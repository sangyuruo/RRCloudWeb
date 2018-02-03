import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
//import { EmCloudWebAppModule } from './app.module';
import { EmCloudWebNgxAppModule } from './ngx-admin/app.module';
import {enableProdMode} from "@angular/core";

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}


//添加
enableProdMode();

platformBrowserDynamic().bootstrapModule(EmCloudWebNgxAppModule)

//platformBrowserDynamic().bootstrapModule(EmCloudWebAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
