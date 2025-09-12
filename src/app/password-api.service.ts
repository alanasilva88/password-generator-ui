import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para o objeto de requisição
interface PasswordRequest {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PasswordApiService {

  private readonly apiUrl = 'https://password-generator-backend-xiaa.onrender.com';

  constructor(private http: HttpClient) { }

  generatePassword(requestBody: PasswordRequest): Observable<string> {
    // Retorna um Observable com a resposta da API
    return this.http.post(this.apiUrl, requestBody, { responseType: 'text' });
  }
}