import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slider = [
    {
      title: "title1",
      src: "wowa1"
    },
    {
      title: "title2",
      src: "wowa2"
    },
    {
      title: "title3",
      src: "wowa3"
    },
    {
      title: "title4",
      src: "wowa4"
    },
    {
      title: "title5",
      src: "wowa5"
    },
    {
      title: "title6",
      src: "wowa6"
    },
    {
      title: "title7",
      src: "wowa7"
    },
    {
      title: "title8",
      src: "wowa8"
    },
    {
      title: "title9",
      src: "wowa9"
    },
    {
      title: "title10",
      src: "wowa10"
    }
  ];

  currentSlide = 0;

  currentCarouselSlide = 0;
  carouselCell = 3;
  
  slide(e:number) {
    this.currentSlide += e;
    if(this.currentSlide < 0) this.currentSlide = this.slider.length - 1;
    if(this.currentSlide > this.slider.length - 1 ) this.currentSlide = 0;
    console.log(e);
  }

  
  carouselSlide(e:number) {
    this.currentCarouselSlide += e;

    if(this.currentCarouselSlide < 0) this.currentCarouselSlide = this.slider.length - this.carouselCell;
   
    if(this.currentCarouselSlide > this.slider.length - 1 ) this.currentCarouselSlide = 0;
    console.log(e);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
