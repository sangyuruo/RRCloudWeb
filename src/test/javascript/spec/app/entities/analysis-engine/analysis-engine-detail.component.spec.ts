/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EmCloudWebTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { AnalysisEngineDetailComponent } from '../../../../../../main/webapp/app/entities/analysis-engine/analysis-engine-detail.component';
import { AnalysisEngineService } from '../../../../../../main/webapp/app/entities/analysis-engine/analysis-engine.service';
import { AnalysisEngine } from '../../../../../../main/webapp/app/entities/analysis-engine/analysis-engine.model';

describe('Component Tests', () => {

    describe('AnalysisEngine Management Detail Component', () => {
        let comp: AnalysisEngineDetailComponent;
        let fixture: ComponentFixture<AnalysisEngineDetailComponent>;
        let service: AnalysisEngineService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EmCloudWebTestModule],
                declarations: [AnalysisEngineDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    AnalysisEngineService,
                    JhiEventManager
                ]
            }).overrideTemplate(AnalysisEngineDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AnalysisEngineDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AnalysisEngineService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new AnalysisEngine(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.analysisEngine).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
