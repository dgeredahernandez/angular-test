import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    private baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = environment.api;
    }

    getUsers() {
        const fullUrl = `${this.baseURL}/users/`;
        return this.http.get(fullUrl);
    }

    getUserById(id: number) {
        const fullUrl = `${this.baseURL}/users/${id}`;

        return this.http.get(fullUrl);
    }

    createUser(user: User) {
        const fullUrl = `${this.baseURL}/users`;

        return this.http.post(fullUrl, user);
    }

    updateUser(id: number, user: User) {
        const fullUrl = `${this.baseURL}/users/${id}`;

        return this.http.put(fullUrl, user);
    }

    deleteUser(id: number) {
        const fullUrl = `${this.baseURL}/users/${id}`;

        return this.http.delete(fullUrl);
    }
}