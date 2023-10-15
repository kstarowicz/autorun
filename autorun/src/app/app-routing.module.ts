import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // przekierowanie ze ścieżki głównej
  { path: 'main', component: MainPageComponent },
  { path: 'details/:id', component: DetailPageComponent }, // :id to parametr route, który przechowuje ID elementu
  { path: '**', redirectTo: '/main' } // przekierowuje wszystkie nieznane ścieżki do '/main'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
