import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  currentPageData: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchQuery = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllItems().subscribe(
      (data) => {
        this.data = data;
        this.filterData();
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  filterData(): void {
    this.filteredData = this.data.filter((item) => 
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applyPagination();
  }

  applyPagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageData = this.filteredData.slice(startIndex, endIndex);
  }

  sortData(column: string): void {
    this.filteredData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    this.applyPagination();
  }

  onSearchChange(): void {
    this.filterData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyPagination();
  }
}
