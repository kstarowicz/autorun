import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  itemDetails: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
      
    if(itemId) { // sprawdzenie czy itemId istnieje
      this.dataService.getItemDetails(itemId)
        .subscribe(
          (data: any) => {
            this.itemDetails = data;
          },
          (error: any) => {
            console.error('An error occurred:', error);
          }
        );
    } else {
      console.error('Item ID is null');
    }
  }
}