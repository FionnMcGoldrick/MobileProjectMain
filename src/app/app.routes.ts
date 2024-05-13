import { Routes } from '@angular/router'; // Importing Routes module from Angular router

export const routes: Routes = [ // Defining an array of route objects
  {
    path: 'home', // Path for the home page
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage), // Lazy loading the HomePage component
  },
  {
    path: '', // Default path (root)
    redirectTo: 'home', // Redirecting to the home page
    pathMatch: 'full', // Matching the full path
  },
  {
    path: 'page1', // Path for Page1
    loadComponent: () => import('./page1/page1.page').then((m) => m.Page1Page), // Lazy loading the Page1Page component
  },
  {
    path: 'page2', // Path for Page2
    loadComponent: () => import('./page2/page2.page').then((m) => m.Page2Page), // Lazy loading the Page2Page component
  },
  {
    path: 'game-details/:id', // Path for game details with parameter :id
    loadComponent: () => import('./game-details/game-details.page').then((m) => m.GameDetailsPage), // Lazy loading the GameDetailsPage component
  },
];
