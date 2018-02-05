
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmPrimengButtonDemoModule } from './buttons/button/buttondemo.module';
import { EmPrimengSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { EmPrimengDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { EmPrimengConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { EmPrimengLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { EmPrimengTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { EmPrimengOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { EmPrimengSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { EmPrimengInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { EmPrimengInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { EmPrimengInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { EmPrimengCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { EmPrimengCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { EmPrimengChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { EmPrimengColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { EmPrimengInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { EmPrimengInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { EmPrimengPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { EmPrimengAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { EmPrimengSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { EmPrimengSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { EmPrimengRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { EmPrimengSelectDemoModule } from './inputs/select/selectdemo.module';
import { EmPrimengSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { EmPrimengListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { EmPrimengRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { EmPrimengToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { EmPrimengEditorDemoModule } from './inputs/editor/editordemo.module';

import { EmPrimengGrowlDemoModule } from './messages/growl/growldemo.module';
import { EmPrimengMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { EmPrimengGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { EmPrimengFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { EmPrimengAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { EmPrimengPanelDemoModule } from './panel/panel/paneldemo.module';
import { EmPrimengTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { EmPrimengFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { EmPrimengToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { EmPrimengGridDemoModule } from './panel/grid/griddemo.module';

import { EmPrimengDataTableDemoModule } from './data/datatable/datatabledemo.module';
import { EmPrimengDataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { EmPrimengDataListDemoModule } from './data/datalist/datalistdemo.module';
import { EmPrimengDataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { EmPrimengPickListDemoModule } from './data/picklist/picklistdemo.module';
import { EmPrimengOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { EmPrimengScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { EmPrimengTreeDemoModule } from './data/tree/treedemo.module';
import { EmPrimengTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { EmPrimengPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { EmPrimengGmapDemoModule } from './data/gmap/gmapdemo.module';
import { EmPrimengOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { EmPrimengCarouselDemoModule } from './data/carousel/carouseldemo.module';

import { EmPrimengBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { EmPrimengDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { EmPrimengLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { EmPrimengPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { EmPrimengPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { EmPrimengRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { EmPrimengDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';


import { EmPrimengMenuDemoModule } from './menu/menu/menudemo.module';
import { EmPrimengContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { EmPrimengPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { EmPrimengStepsDemoModule } from './menu/steps/stepsdemo.module';
import { EmPrimengTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { EmPrimengBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { EmPrimengMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { EmPrimengMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { EmPrimengSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { EmPrimengTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { EmPrimengBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { EmPrimengCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { EmPrimengDeferDemoModule } from './misc/defer/deferdemo.module';
import { EmPrimengInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { EmPrimengProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { EmPrimengRTLDemoModule } from './misc/rtl/rtldemo.module';
import { EmPrimengTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { EmPrimengValidationDemoModule } from './misc/validation/validationdemo.module';
import { EmPrimengProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        EmPrimengMenuDemoModule,
        EmPrimengContextMenuDemoModule,
        EmPrimengPanelMenuDemoModule,
        EmPrimengStepsDemoModule,
        EmPrimengTieredMenuDemoModule,
        EmPrimengBreadcrumbDemoModule,
        EmPrimengMegaMenuDemoModule,
        EmPrimengMenuBarDemoModule,
        EmPrimengSlideMenuDemoModule,
        EmPrimengTabMenuDemoModule,

        EmPrimengBlockUIDemoModule,
        EmPrimengCaptchaDemoModule,
        EmPrimengDeferDemoModule,
        EmPrimengInplaceDemoModule,
        EmPrimengProgressBarDemoModule,
        EmPrimengInputMaskDemoModule,
        EmPrimengRTLDemoModule,
        EmPrimengTerminalDemoModule,
        EmPrimengValidationDemoModule,

        EmPrimengButtonDemoModule,
        EmPrimengSplitbuttonDemoModule,

        EmPrimengInputTextDemoModule,
        EmPrimengInputTextAreaDemoModule,
        EmPrimengInputGroupDemoModule,
        EmPrimengCalendarDemoModule,
        EmPrimengChipsDemoModule,
        EmPrimengInputMaskDemoModule,
        EmPrimengInputSwitchDemoModule,
        EmPrimengPasswordIndicatorDemoModule,
        EmPrimengAutoCompleteDemoModule,
        EmPrimengSliderDemoModule,
        EmPrimengSpinnerDemoModule,
        EmPrimengRatingDemoModule,
        EmPrimengSelectDemoModule,
        EmPrimengSelectButtonDemoModule,
        EmPrimengListboxDemoModule,
        EmPrimengRadioButtonDemoModule,
        EmPrimengToggleButtonDemoModule,
        EmPrimengEditorDemoModule,
        EmPrimengColorPickerDemoModule,
        EmPrimengCheckboxDemoModule,

        EmPrimengGrowlDemoModule,
        EmPrimengMessagesDemoModule,
        EmPrimengGalleriaDemoModule,

        EmPrimengFileUploadDemoModule,

        EmPrimengAccordionDemoModule,
        EmPrimengPanelDemoModule,
        EmPrimengTabViewDemoModule,
        EmPrimengFieldsetDemoModule,
        EmPrimengToolbarDemoModule,
        EmPrimengGridDemoModule,

        EmPrimengBarchartDemoModule,
        EmPrimengDoughnutchartDemoModule,
        EmPrimengLinechartDemoModule,
        EmPrimengPiechartDemoModule,
        EmPrimengPolarareachartDemoModule,
        EmPrimengRadarchartDemoModule,

        EmPrimengDragDropDemoModule,

        EmPrimengDialogDemoModule,
        EmPrimengConfirmDialogDemoModule,
        EmPrimengLightboxDemoModule,
        EmPrimengTooltipDemoModule,
        EmPrimengOverlayPanelDemoModule,
        EmPrimengSideBarDemoModule,

        EmPrimengDataTableDemoModule,
        EmPrimengDataGridDemoModule,
        EmPrimengDataListDemoModule,
        EmPrimengDataScrollerDemoModule,
        EmPrimengScheduleDemoModule,
        EmPrimengOrderListDemoModule,
        EmPrimengPickListDemoModule,
        EmPrimengTreeDemoModule,
        EmPrimengTreeTableDemoModule,
        EmPrimengPaginatorDemoModule,
        EmPrimengOrgChartDemoModule,
        EmPrimengGmapDemoModule,
        EmPrimengCarouselDemoModule,
        EmPrimengProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengprimengModule {}
