import {Injectable} from "@angular/core";
import {ConfigApiService} from "./config-api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {AppConfig} from "./app.config";
import {IntroductionPageConfig, PageConfig} from "./page.config";

@Injectable({
    providedIn: 'root'
})
export class Repository {
    private readonly appConfigSubject = new BehaviorSubject<AppConfig>(new AppConfig());
    private _appConfig: Observable<AppConfig> = null;
    get appConfig(): Observable<AppConfig> {
        if (this._appConfig == null) {
            this._appConfig = this.appConfigSubject.asObservable();
            this.refreshAppConfig();
        }
        return this._appConfig;
    }

    private readonly introductionConfigSubject = new BehaviorSubject<IntroductionPageConfig>(new IntroductionPageConfig());
    private _introductionConfig: Observable<IntroductionPageConfig> = null;
    get introductionConfig(): Observable<IntroductionPageConfig> {
        if (this._introductionConfig == null) {
            this._introductionConfig = this.introductionConfigSubject.asObservable();
            this.refreshIntroductionConfig();
        }
        return this._introductionConfig;
    }

    private readonly resultsConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _resultsConfig: Observable<PageConfig> = null;
    get resultsConfig(): Observable<PageConfig> {
        if (this._resultsConfig == null) {
            this._resultsConfig = this.resultsConfigSubject.asObservable();
            this.refreshResultsConfig();
        }
        return this._resultsConfig;
    }

    private readonly scheduleConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _scheduleConfig: Observable<PageConfig> = null;
    get scheduleConfig(): Observable<PageConfig> {
        if (this._scheduleConfig == null) {
            this._scheduleConfig = this.scheduleConfigSubject.asObservable();
            this.refreshScheduleConfig();
        }
        return this._scheduleConfig;
    }

    private readonly regulationConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _regulationConfig: Observable<PageConfig> = null;
    get regulationConfig(): Observable<PageConfig> {
        if (this._regulationConfig == null) {
            this._regulationConfig = this.regulationConfigSubject.asObservable();
            this.refreshRegulationConfig();
        }
        return this._regulationConfig;
    }

    private readonly submissionConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _submissionConfig: Observable<PageConfig> = null;
    get submissionConfig(): Observable<PageConfig> {
        if (this._submissionConfig == null) {
            this._submissionConfig = this.submissionConfigSubject.asObservable();
            this.refreshSubmissionConfig();
        }
        return this._submissionConfig;
    }

    private readonly tracksConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _tracksConfig: Observable<PageConfig> = null;
    get tracksConfig(): Observable<PageConfig> {
        if (this._tracksConfig == null) {
            this._tracksConfig = this.tracksConfigSubject.asObservable();
            this.refreshTracksConfig();
        }
        return this._tracksConfig;
    }

    private readonly locationConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _locationConfig: Observable<PageConfig> = null;
    get locationConfig(): Observable<PageConfig> {
        if (this._locationConfig == null) {
            this._locationConfig = this.locationConfigSubject.asObservable();
            this.refreshLocationConfig();
        }
        return this._locationConfig;
    }

    private readonly contactsConfigSubject = new BehaviorSubject<PageConfig>(new PageConfig());
    private _contactsConfig: Observable<PageConfig> = null;
    get contactsConfig(): Observable<PageConfig> {
        if (this._contactsConfig == null) {
            this._contactsConfig = this.contactsConfigSubject.asObservable();
            this.refreshContactsConfig();
        }
        return this._contactsConfig;
    }

    constructor(private configApiService: ConfigApiService) {}

    refreshAppConfig() {
        this.configApiService.getAppConfig().subscribe(value => {
            this.appConfigSubject.next(value);
        });
    }

    refreshIntroductionConfig() {
        this.configApiService.getIntroductionConfig().subscribe(value => {
            this.introductionConfigSubject.next(value);
        });
    }

    refreshResultsConfig() {
        this.configApiService.getPageConfig("results").subscribe(value => {
            this.resultsConfigSubject.next(value);
        });
    }

    refreshScheduleConfig() {
        this.configApiService.getPageConfig("schedule").subscribe(value => {
            this.scheduleConfigSubject.next(value);
        });
    }

    refreshRegulationConfig() {
        this.configApiService.getPageConfig("regulation").subscribe(value => {
            this.regulationConfigSubject.next(value);
        });
    }

    refreshSubmissionConfig() {
        this.configApiService.getPageConfig("submission").subscribe(value => {
            this.submissionConfigSubject.next(value);
        });
    }

    refreshTracksConfig() {
        this.configApiService.getPageConfig("tracks").subscribe(value => {
            this.tracksConfigSubject.next(value);
        });
    }

    refreshLocationConfig() {
        this.configApiService.getPageConfig("location").subscribe(value => {
            this.locationConfigSubject.next(value);
        });
    }

    refreshContactsConfig() {
        this.configApiService.getPageConfig("contacts").subscribe(value => {
            this.contactsConfigSubject.next(value);
        });
    }
}
