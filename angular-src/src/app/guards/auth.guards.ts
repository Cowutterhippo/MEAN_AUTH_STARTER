import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@agular/router';
import {AuthServices} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private authService: AuthService, private router: Router){

	}

	canActivate(){
		if(this.authService.loggedIn()){
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}