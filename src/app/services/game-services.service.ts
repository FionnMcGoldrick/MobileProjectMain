import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, GameResult } from './interfaces';

const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private httpClient = inject(HttpClient);

  constructor() { }

  getTopGames(page = 1): Observable<ApiResult> {
    return this.httpClient.get<ApiResult>("https://api.rawg.io/api/games?key=b4abdff1bda64f898a54686eb99ca861&page=1");
  }

  getTest(): Observable<any> {
    return this.httpClient.get<any>("https://api.rawg.io/api/games?key=b4abdff1bda64f898a54686eb99ca861&dates=2019-09-01,2019-09-30&platforms=18,1,7");
  }

 
}