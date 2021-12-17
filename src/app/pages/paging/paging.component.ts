import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  pages = [ 1, 2, 3, 4, 5];
  changePage(e:number) {

  }
}
