import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Verb } from "../models/verb.model";

@Injectable()
export class VerbService {
    constructor (private httpClient: HttpClient) {}
    
    getVerbs (): Observable<Verb[]> {
        return this.httpClient.get<Verb[]>('http://localhost:3000/api/verbs');
    }
}