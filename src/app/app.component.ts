import {Component} from '@angular/core';
import {AppComponentViewmodel} from "./app.componente.viewmodel";
import {AppConfig} from "./app.config";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    config: AppConfig;

    constructor(private vm: AppComponentViewmodel) {
        vm.getConfig().subscribe((config) => {
            this.config = config;
        });
    }
}
