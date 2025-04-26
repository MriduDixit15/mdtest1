import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExternalComponent } from './external/external.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page (Client Side Only)',
        providers: [],
        data: { ssr: false }
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'About Page (Server Rendered)',
        providers: [],
      },
      {
        path: 'external',
        component: ExternalComponent,
        title: 'ext Page (Server Rendered)',
        providers: [],
      }
];
