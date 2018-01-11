import { Component } from '@angular/core';
import {TreeModel} from "ng2-tree";

@Component({
    selector: 'ngx-orgs-tree',
    templateUrl: './organization.tree.component.html',
})
export class OrganizationTreeComponent {
    tree: TreeModel = {
        value: 'Programming languages by programming paradigm',
        children: [{
            value: 'Object-oriented programming',
            children: [{
                value: 'Java',
            }, {
                value: 'C++',
            }, {
                value: 'C#',
            }],
        }, {
            value: 'Prototype-based programming',
            children: [{
                value: 'JavaScript',
            }, {
                value: 'CoffeeScript',
            }, {
                value: 'Lua',
            }],
        }],
    };
}
