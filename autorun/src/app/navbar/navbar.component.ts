import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public items: any[] = [];

  constructor(private dataService: DataService) {
    this.fetchData();
  }

  private fetchData(): void {
    this.dataService.getItems()
      .subscribe(
        (data: any[]) => this.items = data,
        (error: any) => console.error('Data fetching error', error)
      );
  }
}