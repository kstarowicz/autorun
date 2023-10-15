import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';  
import { MainPageComponent } from './main-page/main-page.component'; 
import { DetailPageComponent } from './detail-page/detail-page.component'; 
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';
import { ItemGridComponent } from './item-grid/item-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent, 
    DetailPageComponent,
    ItemGridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
