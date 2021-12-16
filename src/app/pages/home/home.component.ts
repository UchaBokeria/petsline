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
      src: "assets/Images/carousel pic1.png"
    },
    {
      title: "title2",
      src: "assets/Images/carousel pic2.png"
    },
    {
      title: "title3",
      src: "assets/Images/carousel pic3.png"
    },
    {
      title: "title4",
      src: "assets/Images/carousel pic4.png"
    },
    {
      title: "title5",
      src: "assets/Images/carousel pic5.png"
    },
    {
      title: "title6",
      src: "assets/Images/carousel pic6.png"
    },
    {
      title: "title7",
      src: "assets/Images/carousel pic1.png"
    },
    {
      title: "title8",
      src: "assets/Images/carousel pic2.png"
    },
    {
      title: "title9",
      src: "assets/Images/carousel pic3.png"
    },
    {
      title: "title10",
      src: "assets/Images/carousel pic4.png"
    }
  ];
  Translate = {
    svips: "S-vips",
    vips: "Vips",
    populars: "Popular"
  };
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
