import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse, Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  api = environment.apiUrl

  private http = inject(HttpClient);


  constructor() { }

  enviarMensaje(data: Omit<Message, 'id' | 'createdAt' | 'updatedAt'>): Observable<ApiResponse<Message>>{
    return this.http.post<ApiResponse<Message>>(`${this.api}/contact/send`, data);
  }
}
