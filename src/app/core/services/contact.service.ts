import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { ContactForm, ContactResponse } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://api.example.com/contact'; // Remplacer par votre API

  constructor(private http: HttpClient) {}

  sendMessage(formData: ContactForm): Observable<ContactResponse> {
    // Simulation d'envoi (à remplacer par un vrai appel API)
    return of({
      success: true,
      message: 'Message envoyé avec succès!'
    }).pipe(delay(1000));

    //  Avec vraie API:
    // return this.http.post<ContactResponse>(this.apiUrl, formData);
  }
}
