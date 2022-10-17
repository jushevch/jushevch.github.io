import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
})
export class NavigationComponent {

    @Input() withHome = false;

    constructor(
        private readonly router: Router
    ) { }

    navigate(path: string): void {
        this.router.navigate([path]);
    }
}
