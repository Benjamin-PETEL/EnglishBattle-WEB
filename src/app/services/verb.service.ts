import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Verb } from "../models/verb.model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class VerbService {

    private API_URL= environment.API_URL;

    constructor (private httpClient: HttpClient) {}
    
    getVerbs (): Observable<Verb[]> {
        return this.httpClient.get<Verb[]>(this.API_URL + '/verbs');
    }
}