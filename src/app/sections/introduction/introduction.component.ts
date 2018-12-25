import {Component} from '@angular/core';
import {IntroductionPageConfig} from "../../page.config";
import {IntroductionComponentViewmodel} from "./introduction.component.viewmodel";

@Component({
    selector: 'introduction',
    templateUrl: 'introduction.component.html',
    styleUrls: ["introduction.component.scss"]
})
export class IntroductionComponent {
    config: IntroductionPageConfig;

    constructor(private vm: IntroductionComponentViewmodel) {
        vm.getConfig().subscribe((config) => {
            this.config = config;
        });
    }
}
