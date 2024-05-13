import { Component, OnInit } from '@angular/core'; // Importing necessary Angular modules
import { CommonModule } from '@angular/common'; // Importing CommonModule for common Angular directives
import { FormsModule } from '@angular/forms'; // Importing FormsModule for two-way data binding
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
import { RouterLinkWithHref } from '@angular/router'; // Importing RouterLinkWithHref

@Component({
  selector: 'app-page2', // Selector for the component
  templateUrl: './page2.page.html', // Template file for the component
  styleUrls: ['./page2.page.scss'], // Stylesheet file for the component
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
export class Page2Page implements OnInit {

  constructor() { } // Constructor method for the component

  ngOnInit() { // Lifecycle hook called after component initialization
  }

}
