import {Injectable} from '@angular/core';
import {Repository} from "../../repository";
import {Observable} from "rxjs/index";
import {IntroductionPageConfig} from "../../page.config";

@Injectable({
    providedIn: 'root'
})
export class IntroductionComponentViewmodel {
    constructor(private repository: Repository) {}

    getConfig(): Observable<IntroductionPageConfig> {
        return this.repository.introductionConfig;
    }
}
