import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {CompanyCodeEditorComponent} from "./company-code-editor.component";
import {OrganizationCodeEditorComponent} from "./organization-code-editor.component";
import {ComPointCodeEditorComponent} from "./com-point-code-editor.component";
import {AddressCodeEditorComponent} from "./address-code-editor.component";
declare let $:any;
declare let Qrcode:any;

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './meter-info.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
        /*width: 70rem;*/
    }
  `],
})
export class MeterInfoComponent implements OnInit{

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
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            meterCode: {
                title: '设备编码',
                type: 'String',
            },
            meterName: {
                title: '设备名称',
                type: 'string',
            },
            registerCode: {
                title: '登记编码',
                type: 'Integer',
            },
            addressCode: {
                title: '地址编码',
                type: 'html',
                editor:{
                    type:'custom',
                    component: AddressCodeEditorComponent,
                }
            },
            organizationCode: {
                title: '组织编码',
                type: 'html',
                editor:{
                    type:'custom',
                    component: OrganizationCodeEditorComponent,
                }
            },
            companyCode: {
                title: '公司编码',
                type: 'html',
                editor:{
                    type:'custom',
                    component: CompanyCodeEditorComponent,
                }
            },
            comPointCode: {
                title: '串口编码',
                type: 'html',
                editor:{
                    type:'custom',
                    component: ComPointCodeEditorComponent,
                }
            },
            meterType: {
                title: '设备类型',
                type: 'String',
            },
            startOffset: {
                title: '起始偏移',
                type: 'String',
            },
            numberOfRegisters: {
                title: '寄存器数量',
                type: 'String',
            },
            controlAddress: {
                title: '控制地址',
                type: 'String',
            },
        },
    };

    //source: LocalDataSource = new LocalDataSource();

    source: ServerDataSource;
    //private jQuery: any;
    constructor(private service: MiService,
                private http:Http,
                private dateUtils: JhiDateUtils
    ) {
        // this.service.getDataMeterInfo().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, {endPoint: '/emcloudmi/api/meter-infos'},
            dateUtils);
        /*let $ = require('jqurey');
        $(function() {
            Qrcode.init($('[node-type=jsbridge]'));
        });*/

    }
    ngOnInit(){
        $(function() {
            $(function() {
                Qrcode.init($('[node-type=jsbridge]'));
            });
        });
        (function($) {
            var Qrcode = function(tempBtn) {
//该对象只支持微博域下的解析，也就是说不是微博域下的页面只能用第二种方案解析二维码
                if (window.WeiboJSBridge) {
                    $(tempBtn).on('click', this.weiBoBridge);
                } else {
                    $(tempBtn).on('change', this.getImgFile);
                }
            };
            Qrcode.prototype = {
                weiBoBridge: function() {
                    WeiboJSBridge.invoke('scanQRCode', null, function(params) {
//得到扫码的结果
                        location.href=params.result;
                    });
                },
                getImgFile: function() {
                    var _this_ = this;
                    var imgFile = $(this)[0].files;
                    var oFile = imgFile[0];
                    var oFReader = new FileReader();
                    var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
                    if (imgFile.length === 0) {
                        return;
                    }
                    if (!rFilter.test(oFile.type)) {
                        alert("选择正确的图片格式!");
                        return;
                    }
//读取图片成功后执行的代码
                    oFReader.onload = function(oFREvent) {
                        qrcode.decode(oFREvent.target.result);
                        qrcode.callback = function(data) {
//得到扫码的结果
                            location.href = data;
                        };
                    };
                    oFReader.readAsDataURL(oFile);
                },
                destory: function() {
                    $(tempBtn).off('click');
                }
            };
//初始化
            Qrcode.init = function(tempBtn) {
                var _this_ = this;
                var inputDom;
                tempBtn.each(function() {
                    new _this_($(this));
                });
                $('[node-type=qr-btn]').on('click', function() {
                    $(this).find('[node-type=jsbridge]')[0].click();
        });
    };
            window.Qrcode = Qrcode;
        })(window.Zepto ? Zepto : this.jQuery);


    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterInfo(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }


    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterInfo(event.newData).subscribe((response) => {
                this.service.getDataMeterInfo().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
