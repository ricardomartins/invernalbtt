import {Injectable} from "@angular/core";
import {AppConfig} from "./app.config";
import {Repository} from "./repository";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppComponentViewmodel {
    constructor(private repository: Repository) {}

    getConfig(): Observable<AppConfig> {
        return this.repository.appConfig;
    }
}
