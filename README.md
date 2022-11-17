# Facebook Clone in Angular 15+

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## App Routing.
- Due to the huge size of the application, we'll enable app routing and enable [lazy loading](https://www.freecodecamp.org/news/lazy-loading-in-angular-intro-to-ngmodules/).

```typescript
import { FacebookGuard } from './guards/facebook.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate: [FacebookGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


```

## App Guarding
- Occassionally you'll need to secure certain pages. Only then, authenticatecd users can access them.
- Set up project guards as below. set up `canActivate` as the implementation interface.

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
```
### Connecting App to Firebase
- Features like `firebaseAuth`, `firebaseHosting` are just afew of the cserverless candies that Firebase offers the developer and helps save time.
- [x] Install the Angular firebase firestore package into youtr project as below.
 ```bash
ng add @angular/fire
 ```

 ```typescript
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import {AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
 ```

 - [x] As well, add the following firebase cofigs from your dfirebase console into your app `environment.ts` and `environment.prod.ts` as below:
 
 ```typescript

export const environment = {
  production: true,
  // Your web app's Firebase configuration
  firebaseConfig: {
    apiKey: 'AIzaSyD9Y3bz_a....pvzNyTj9Y1N-FlTno8',
    authDomain: "facebook-....firebaseapp.com",
    projectId: "facebook-...",
    storageBucket: "facebook-....appspot.com",
    messagingSenderId: '89307...4722',
    appId: '1:...830716...:web:dea...0f44e0b5c58d9b'
  }
};

 ```
 - As well import the environmwent files into your `app.modules.ts` as below:

 ```typescript
 import { environment } from './../environments/environment';
 ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Resources
1. [Material Icons Archive](https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/)
2. [Angular Guards & canActivate](https://angular.io/api/router/CanActivate)