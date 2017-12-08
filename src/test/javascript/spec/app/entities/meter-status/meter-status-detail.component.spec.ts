/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EmCloudWebTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { MeterStatusDetailComponent } from '../../../../../../main/webapp/app/entities/meter-status/meter-status-detail.component';
import { MeterStatusService } from '../../../../../../main/webapp/app/entities/meter-status/meter-status.service';
import { MeterStatus } from '../../../../../../main/webapp/app/entities/meter-status/meter-status.model';

describe('Component Tests', () => {

    describe('MeterStatus Management Detail Component', () => {
        let comp: MeterStatusDetailComponent;
        let fixture: ComponentFixture<MeterStatusDetailComponent>;
        let service: MeterStatusService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EmCloudWebTestModule],
                declarations: [MeterStatusDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MeterStatusService,
                    JhiEventManager
                ]
            }).overrideTemplate(MeterStatusDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MeterStatusDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MeterStatusService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new MeterStatus(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.meterStatus).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
