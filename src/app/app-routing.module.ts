import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'detail/1',
        component: DetailComponent
      },
      {
        path: 'detail/2',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ]
})
export class AppRoutingModule { }
