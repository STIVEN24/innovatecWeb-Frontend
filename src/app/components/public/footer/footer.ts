import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html'
})

export class footer {
    annoNow: number = Date.now();
}