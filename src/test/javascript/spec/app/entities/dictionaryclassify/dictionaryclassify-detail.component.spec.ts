/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EmCloudWebTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { DictionaryclassifyDetailComponent } from '../../../../../../main/webapp/app/entities/dictionaryclassify/dictionaryclassify-detail.component';
import { DictionaryclassifyService } from '../../../../../../main/webapp/app/entities/dictionaryclassify/dictionaryclassify.service';
import { Dictionaryclassify } from '../../../../../../main/webapp/app/entities/dictionaryclassify/dictionaryclassify.model';

describe('Component Tests', () => {

    describe('Dictionaryclassify Management Detail Component', () => {
        let comp: DictionaryclassifyDetailComponent;
        let fixture: ComponentFixture<DictionaryclassifyDetailComponent>;
        let service: DictionaryclassifyService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EmCloudWebTestModule],
                declarations: [DictionaryclassifyDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    DictionaryclassifyService,
                    JhiEventManager
                ]
            }).overrideTemplate(DictionaryclassifyDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DictionaryclassifyDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DictionaryclassifyService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Dictionaryclassify(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.dictionaryclassify).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
