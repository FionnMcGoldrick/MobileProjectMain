import { Component, inject } from '@angular/core';
import { IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList, 
  IonItem,
  IonLabel,
  IonAvatar,
  IonSkeletonText, 
  IonAlert,
  IonBadge,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSearchbar,
  IonButton,
  IonButtons,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonCard,
  IonPopover,
  IonText, } from '@ionic/angular/standalone';
import { GameService } from '../services/game-services.service';
import { ApiResult, GameResult } from '../services/interfaces';
import { finalize, catchError} from 'rxjs';
import { RouterLinkWithHref } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-game-details',
  templateUrl: 'game-details.page.html',
  styleUrls: ['game-details.page.scss'],
  standalone: true,
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList, 
    IonItem,
    IonLabel,
    IonAvatar,
    IonSkeletonText, 
    IonAlert,
    IonBadge,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSearchbar,
    IonButton,
    IonButtons,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonCard,
    IonPopover,
    IonText,
    RouterLinkWithHref],
})
export class GameDetailsPage {

  constructor() {}

  private gameService = inject(GameService);
  public games: GameResult[] = [];

  ionViewWillEnter(){

    this.gameService.getTopGames()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.games.push(...res.results);
        console.log(this.games);
      },
    });

    this.gameService.getGame('')
    .subscribe({
      next: (res) => {
        console.log(res);
      },
    });

  }

  


}
