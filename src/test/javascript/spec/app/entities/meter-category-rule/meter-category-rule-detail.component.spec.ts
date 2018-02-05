/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EmCloudWebTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { MeterCategoryRuleDetailComponent } from '../../../../../../main/webapp/app/entities/meter-category-rule/meter-category-rule-detail.component';
import { MeterCategoryRuleService } from '../../../../../../main/webapp/app/entities/meter-category-rule/meter-category-rule.service';
import { MeterCategoryRule } from '../../../../../../main/webapp/app/entities/meter-category-rule/meter-category-rule.model';

describe('Component Tests', () => {

    describe('MeterCategoryRule Management Detail Component', () => {
        let comp: MeterCategoryRuleDetailComponent;
        let fixture: ComponentFixture<MeterCategoryRuleDetailComponent>;
        let service: MeterCategoryRuleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EmCloudWebTestModule],
                declarations: [MeterCategoryRuleDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MeterCategoryRuleService,
                    JhiEventManager
                ]
            }).overrideTemplate(MeterCategoryRuleDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MeterCategoryRuleDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MeterCategoryRuleService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new MeterCategoryRule(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.meterCategoryRule).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
