import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private httpClient = inject(HttpClient);

  constructor() { }

  getTopGames(page = 1): Observable<any> {
    return this.httpClient.get(BASE_URL + "https://api.rawg.io/api/platforms?key=b4abdff1bda64f898a54686eb99ca861" + page + "&api_key=" + API_KEY);
  }

 
}