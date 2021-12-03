import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ISignUpUser } from '../../store/reducer/auth.reducer';

@Injectable()
export class AuthService {
	public constructor(private readonly http: HttpClient) {}

	public login(user: { username: string; password: string }) {
		return this.http.post('/auth/signin', { ...user });
	}

	public signup(user: ISignUpUser) {
		return this.http.post('/auth/signup', { ...user });
	}

	public checkUser() {
		return this.http.get('/auth/checkuser');
	}

	public tokenToLocalStorage(user: any) {
		if (!user || !user.accessToken) {
			return of(null);
		}
		localStorage.setItem('accessToken', user.accessToken);
		return of(user);
	}

	public getTokenFromLocalStorage() {
		return of(localStorage.getItem('accessToken'));
	}

	public removeTokenFromLocalStorage() {
		return of(localStorage.removeItem('accessToken'));
	}
}
