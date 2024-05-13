import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, GameResult, DetailsGameResult } from './interfaces';

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

  getGame(id:string): Observable<DetailsGameResult> {
    return this.httpClient.get<DetailsGameResult>("https://api.rawg.io/api/games/"+id+"?&key=b4abdff1bda64f898a54686eb99ca861");
  }

 
}