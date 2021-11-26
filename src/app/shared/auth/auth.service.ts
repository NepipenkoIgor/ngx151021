import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
	public constructor(private readonly http: HttpClient) {}

	public login(user: { username: string; password: string }) {
		return this.http.post('/auth/signin', { ...user });
	}
}
