import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  Faq = [
    {
      id: 1,
      question: "1 What is lorem ipsum dolor sit amet?",
      answer: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim sapien a consectetur scelerisque. Vestibulum venenatis condimentum lectus, eget gravida est euismod et. Mauris pulvinar eget nibh id tempor. Pellentesque in nisi in ante pulvinar tempus vitae id quam. Pellentesque urna dolor, mattis ac nisi sed, tristique cursus lectus. Fusce suscipit mauris tortor, et tristique nulla vulputate in. Sed auctor quam sem. Suspendisse eleifend molestie tortor, eu tincidunt nibh venenatis in."
    },
    {
      id: 2,
      question: "2 What is lorem ipsum dolor sit amet?",
      answer: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim sapien a consectetur scelerisque. Vestibulum venenatis condimentum lectus, eget gravida est euismod et. Mauris pulvinar eget nibh id tempor. Pellentesque in nisi in ante pulvinar tempus vitae id quam. Pellentesque urna dolor, mattis ac nisi sed, tristique cursus lectus. Fusce suscipit mauris tortor, et tristique nulla vulputate in. Sed auctor quam sem. Suspendisse eleifend molestie tortor, eu tincidunt nibh venenatis in."
    },
    {
      id: 3,
      question: "3 What is lorem ipsum dolor sit amet?",
      answer: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim sapien a consectetur scelerisque. Vestibulum venenatis condimentum lectus, eget gravida est euismod et. Mauris pulvinar eget nibh id tempor. Pellentesque in nisi in ante pulvinar tempus vitae id quam. Pellentesque urna dolor, mattis ac nisi sed, tristique cursus lectus. Fusce suscipit mauris tortor, et tristique nulla vulputate in. Sed auctor quam sem. Suspendisse eleifend molestie tortor, eu tincidunt nibh venenatis in."
    }
  ];

  toggleIt = -1;

  toggle(e:number) {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
