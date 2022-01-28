import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface pinterestResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<pinterestResponse>('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID ynlA9Bsb0A3_acp0VnJhMflo8BBiQmPoqIKQ1z8xOIo'
      }

    });
  }
}
