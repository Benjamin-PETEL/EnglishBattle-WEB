import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SimpleService {

    private API_URL= environment.API_URL;

    constructor (private httpClient: HttpClient) {}
    
    getSimple (): Observable<String[]> {
        return this.httpClient.get<String[]>(this.API_URL + '/simple');
    }
}