import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Verb } from '../models/verb.model';
import { VerbService } from './verb.service';

describe('VerbService', () => {
    let verbService: VerbService;
    let httpTestingController: HttpTestingController;
    const verbServiceURL = environment.API_URL + '/verbs';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        verbService = TestBed.inject(VerbService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('it should create verbService', () => {
        expect(verbService).toBeTruthy();
    });

    it('getVerbs - it should return a list of verbs', () => {
        const mockAnswer: Verb[] = [{ baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone' }];
        verbService
            .getVerbs()
            .subscribe(verbList => {
                expect(verbList.length).toBe(1);
                expect(verbList).toBe(mockAnswer);
            });
        const request = httpTestingController.expectOne({
            method: 'GET',
            url: verbServiceURL
        });
        request.flush(mockAnswer);
    });

    it('getVerbs - it should return an error', () => {
        let actualError: HttpErrorResponse | undefined;
        const status = 500;
        const statusText = 'Internal Server Error';
        const errorEvent = new ErrorEvent('API error');
        verbService
            .getVerbs()
            .subscribe(
                () => {
                    fail('next handler must not be called');
                },
                error => {
                    actualError = error;
                },
                () => {
                    fail('complete handler must not be called');
                }  
            );
        const request = httpTestingController.expectOne({
            method: 'GET',
            url: verbServiceURL
        });
        request.flush(
            errorEvent, 
            { status, statusText }
        );
        if(!actualError) {
            throw new Error('Error needs to be defined');
        }
        console.log(actualError.statusText);
        
        expect(actualError instanceof HttpErrorResponse).toBeTrue();
        expect(actualError.error).toBe(errorEvent);
        expect(actualError.status).toBe(status);
        expect(actualError.statusText).toBe(statusText);
    });
});