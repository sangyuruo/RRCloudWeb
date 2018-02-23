import { Component } from '@angular/core';
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";

import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {OuService} from "../ou.service";
import {AddressNameEditorComponent} from '../company/addressname-editor.components';
import {OrgNameEditorComponent} from "./orgname-editor.components";
import {CpNameEditorComponent} from "./companyname-editor.components";

import {TreeNode} from "primeng/primeng";
import {LocalDataSource} from "ng2-smart-table";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './organization.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
   
    }
  `],
})
export class OrganizationComponent {

    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave : true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {

            companyName: {
                title: '公司名',
                type: 'string',
                editor:{
                    type:'custom',
                    component:CpNameEditorComponent,
                }
            },
            parentOrgName: {
                title: '父组织名称',
                type: 'string',
                editor:{
                    type:'list',
                    config:{
                        list:[]
                    },
                },
            },
            orgName: {
                title: '组织名称',
                type: 'html',
            },
            addressName: {
                title: '地址名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component:AddressNameEditorComponent,
                }
            },
            enable: {
                title: '是否有效',
                editor: {
                    type: 'list',
                    config: {
                        selectText: 'Select...',
                        list: [
                            {value: true, title: 'true'},
                            {value: false, title: 'false'}
                        ]
                    }
                },
            },
            companyCode: {
                title: '公司代码',
                type: 'string'
            },
            parentCode: {
                title: '父组织代码',
                type: 'html'
            },
            orgCode: {
                title: '组织代码',
                type: 'html',
            },

            addressCode: {
                title: '地址编码',
            },
        },
    };
    //树
    files:TreeNode[]=[
       /* {
            "label": "Documents",
            "data": "Documents Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "label": "Work",
                "data": "Work Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
            },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                }]
        },
        {
            "label": "Pictures",
            "data": "Pictures Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [
                {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
        },
        {
            "label": "Movies",
            "data": "Movies Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
            },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                }]
        }*/  {
            "label": "Lazy Node 0",
            "data": "Node 0",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "leaf": false
        },
        {
            "label": "Lazy Node 1",
            "data": "Node 1",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "leaf": false
        },
        {
            "label": "Lazy Node 1",
            "data": "Node 2",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "leaf": false,

        }


    ];

    selectedFiles: TreeNode[];



    ngOnInit() {
        this.service.getTreeRoot().then(files => this.files=files);

    }
    source: ServerDataSource;


    constructor(private service: OuService,
                private  http  : Http,
                private dateUtils: JhiDateUtils
    ) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        //this.service.getOrganization().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudou/api/organizations' },
            dateUtils);

    }

    onDeleteConfirm(event): void {

        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteOrganization(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event){

        if (window.confirm('Are you sure you want to save?')) {
            this.service.saveOrganization(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event){

        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateOrganization(event.newData).subscribe((response) => {
                this.service.getOrganization().subscribe(data=>(this.source.load(data))),
                    event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
    // 节点点击事件
    nodeSelect(event) {
      if(event.node.children){
          this.service.getdataByParentOrgCode(event.node.orgCode).subscribe(data=>this.source=data);
      }else{
          this.service.getdataByOrgCode(event.node.orgCode).subscribe(data=>this.source=data);
      }
    }
     //懒加载子节点
    loadNode(event){
        if(event.node.children){
            this.service.LazyLodeNode(event.node.orgCode).subscribe(nodes =>
            {
            event.node.children = nodes;
            console.log(event.node)}
            );
        }

    }

}
