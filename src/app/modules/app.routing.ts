import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../components/layout/app/app.component';
import { Four0FourComponent } from '../components/layout/404/404.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = <Routes>[
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Four0FourComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
