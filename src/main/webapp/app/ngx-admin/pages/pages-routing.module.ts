import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [{
        path: 'dashboard',
        component: DashboardComponent,
    }, {
        path: 'ui-features',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./ui-features/ui-features.module').UiFeaturesModule);
            })
        })
    }, {
        path: 'components',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./components/components.module').ComponentsModule);
            })
        })
    }, {
        path: 'maps',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./maps/maps.module').MapsModule);
            })
        })
    }, {
        path: 'charts',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./charts/charts.module').ChartsModule);
            })
        })
    }, {
        path: 'editors',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./editors/editors.module').EditorsModule);
            })
        })
    }, {
        path: 'forms',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./forms/forms.module').FormsModule);
            })
        })
    }, {
        path: 'tables',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./tables/tables.module').TablesModule);
            })
        })
    }, {
        path: 'ou',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./ou/ou.module').TablesModule);
            })
        })

    }, {
        path: 'dict',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./dict/dict.module').TablesModule);
            })
        })
    },
        {
            path: 'cpi',
            loadChildren: () => new Promise(resolve => {
                (require as any).ensure([], require => {
                    resolve(require('./cpi/cpi.module').TablesModule);
                })
            })
        },
        {
            path: 'loc',
            loadChildren: () => new Promise(resolve => {
                (require as any).ensure([], require => {
                    resolve(require('./loc/loc.module').TablesModule);
                })
            })
        }, {
            path: 'mi',
            loadChildren: () => new Promise(resolve => {
                (require as any).ensure([], require => {
                    resolve(require('./mi/mi.module').TablesModule);
                })
            })
        }, {
            path: 'arc',
            loadChildren: () => new Promise(resolve => {
                (require as any).ensure([], require => {
                    resolve(require('./arc/arc.module').arcTablesModule);
                })
            })
        }, {
            path: 'resource',
            loadChildren: () => new Promise(resolve => {
                (require as any).ensure([], require => {
                    resolve(require('./resource/resource.module').TablesModule);
                })
            })
        }, {
            path: 'nfs',
            loadChildren: () => new Promise(resolve => {
                (require as any).ensure([], require => {
                    resolve(require('./nfs/nfs.module').TablesModule);
                })
            })
        }, {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
