/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EmCloudWebTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { MultiwaySwitchDetailComponent } from '../../../../../../main/webapp/app/entities/multiway-switch/multiway-switch-detail.component';
import { MultiwaySwitchService } from '../../../../../../main/webapp/app/entities/multiway-switch/multiway-switch.service';
import { MultiwaySwitch } from '../../../../../../main/webapp/app/entities/multiway-switch/multiway-switch.model';

describe('Component Tests', () => {

    describe('MultiwaySwitch Management Detail Component', () => {
        let comp: MultiwaySwitchDetailComponent;
        let fixture: ComponentFixture<MultiwaySwitchDetailComponent>;
        let service: MultiwaySwitchService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EmCloudWebTestModule],
                declarations: [MultiwaySwitchDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MultiwaySwitchService,
                    JhiEventManager
                ]
            }).overrideTemplate(MultiwaySwitchDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MultiwaySwitchDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MultiwaySwitchService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new MultiwaySwitch(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.multiwaySwitch).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
