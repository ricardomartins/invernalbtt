import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {map, mergeAll} from "rxjs/operators";
import {AppConfig} from "./app.config";
import {IntroductionPageConfig, PageConfig} from "./page.config";

@Injectable({
    providedIn: 'root'
})
export class ConfigApiService {
    constructor(private http: HttpClient) {}

    getAppConfig(): Observable<AppConfig> {
        const url: string = "assets/app.config.json";
        return this.http.get<AppConfig>(url);
    }

    getPageConfig(page: "results" | "schedule" | "regulation" | "submission" | "tracks" | "location" | "contacts"): Observable<PageConfig> {
        const url: string = `assets/${page}.config.json`;
        return this.http.get<PageConfig>(url);
    }

    getIntroductionConfig(): Observable<IntroductionPageConfig> {
        const self = this;
        const url: string = "assets/introduction.config.json";
        return this.http.get<IntroductionPageConfig>(url)
            .pipe(map<IntroductionPageConfig, Observable<IntroductionPageConfig>>(function (pageConfig: IntroductionPageConfig) {
                if (!pageConfig.text && pageConfig.textUrl) return self.http.get(pageConfig.textUrl, {responseType: 'text'}).pipe(map<string, IntroductionPageConfig>(function (text: string) {
                    pageConfig.text = text;
                    return pageConfig;
                }));
                return of(pageConfig);
            }), mergeAll());
    }
}
