/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EmCloudWebTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CompointstatusDetailComponent } from '../../../../../../main/webapp/app/entities/compointstatus/compointstatus-detail.component';
import { CompointstatusService } from '../../../../../../main/webapp/app/entities/compointstatus/compointstatus.service';
import { Compointstatus } from '../../../../../../main/webapp/app/entities/compointstatus/compointstatus.model';

describe('Component Tests', () => {

    describe('Compointstatus Management Detail Component', () => {
        let comp: CompointstatusDetailComponent;
        let fixture: ComponentFixture<CompointstatusDetailComponent>;
        let service: CompointstatusService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EmCloudWebTestModule],
                declarations: [CompointstatusDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CompointstatusService,
                    JhiEventManager
                ]
            }).overrideTemplate(CompointstatusDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CompointstatusDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CompointstatusService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Compointstatus(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.compointstatus).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
