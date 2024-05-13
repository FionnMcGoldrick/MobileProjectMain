import { Component, inject } from '@angular/core'; // Importing necessary Angular modules
import { // Importing Ionic components
  IonHeader,
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
} from '@ionic/angular/standalone';
import { GameService } from '../services/game-services.service'; // Importing custom service
import { ApiResult, GameResult } from '../services/interfaces'; // Importing interfaces
import { finalize, catchError } from 'rxjs'; // Importing RxJS operators
import { RouterLinkWithHref } from '@angular/router'; // Importing RouterLinkWithHref
import { DatePipe } from '@angular/common'; // Importing DatePipe
import { Browser } from '@capacitor/browser'; // Importing Browser module from Capacitor

@Component({
  selector: 'app-home', // Selector for the component
  templateUrl: 'home.page.html', // Template file for the component
  styleUrls: ['home.page.scss'], // Stylesheet file for the component
  standalone: true, // Indicates that this component is standalone (not a part of a larger Ionic app)
  imports: [ // Importing necessary modules for the component
    IonHeader,
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
    RouterLinkWithHref,
  ],
})
export class HomePage {

  constructor() {} // Constructor method for the component

  private gameService = inject(GameService); // Injecting GameService
  public games: GameResult[] = []; // Array to hold game results

  ionViewWillEnter() { // Lifecycle hook called before the component is displayed

    this.gameService.getTopGames() // Calling the getTopGames method from GameService
      .subscribe({ // Subscribing to the observable returned by getTopGames
        next: (res) => { // Handling the next value emitted by the observable
          console.log(res); // Logging the response to the console
          this.games.push(...res.results); // Adding game results to the games array
          console.log(this.games); // Logging the updated games array to the console
        },
      });

    this.gameService.getGame('') // Calling the getGame method from GameService
      .subscribe({ // Subscribing to the observable returned by getGame
        next: (res) => { // Handling the next value emitted by the observable
          console.log(res); // Logging the response to the console
        },
      });

  }

}
