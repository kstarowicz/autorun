import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    items: any[] = [];
  
    constructor(private dataService: DataService) { }
  
    ngOnInit(): void {
      this.dataService.getItems().subscribe((data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      });
    }
  }