import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.html'
})

export class header {

	constructor(
		private router: Router
	) {}

	logOut() {
		this.router.navigate(['/logIn']);
	}

}