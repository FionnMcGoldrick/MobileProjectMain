import { Component, OnInit } from '@angular/core';  // Importing necessary Angular modules
import { CommonModule } from '@angular/common';  // Importing CommonModule for common Angular directives
import { FormsModule } from '@angular/forms';  // Importing FormsModule for two-way data binding
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';  // Importing Ionic components
import { Keyboard } from '@capacitor/keyboard';



@Component({
  selector: 'app-page1',  // Selector for the component
  templateUrl: './page1.page.html',  // Template file for the component
  styleUrls: ['./page1.page.scss'],  // Stylesheet file for the component
  standalone: true,  // Indicates that this component is standalone (not a part of a larger Ionic app)
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]  // Importing necessary modules for the component
})
export class Page1Page implements OnInit {

  constructor() { }  // Constructor method for the component

  ngOnInit() {  // Lifecycle hook called after component initialization
  }

  

}
//keyboard functions @capacitor
Keyboard.addListener('keyboardWillShow', info => {
  console.log('keyboard will show with height:', info.keyboardHeight);
});

Keyboard.addListener('keyboardDidShow', info => {
  console.log('keyboard did show with height:', info.keyboardHeight);
});

Keyboard.addListener('keyboardWillHide', () => {
  console.log('keyboard will hide');
});

Keyboard.addListener('keyboardDidHide', () => {
  console.log('keyboard did hide');
});
