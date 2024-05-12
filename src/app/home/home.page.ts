import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { GameService } from '../services/game-services.service';
import { ApiResult } from '../services/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  constructor() {}

  private gameService = inject(GameService);
  public games: ApiResult | null = null;

  ionViewWillEnter(){

    this.gameService.getTopGames()
    .subscribe({
      next: (res) => {
        console.log(res);
      },
    });

  }

}
