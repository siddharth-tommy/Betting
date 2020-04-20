import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  constructor(private http: HttpClient,
              private router: Router,) { }
  
  public isAuthenticated() {
    return localStorage.getItem('token');
  }
  
 
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

