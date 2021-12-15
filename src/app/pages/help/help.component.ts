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
      question: "??",
      answer: "!!"
    },
    {
      id: 2,
      question: "??",
      answer: "!!"
    },
    {
      id: 3,
      question: "??",
      answer: "!!"
    }
  ];
  toggle(e:number) {

  }
  constructor() { }

  ngOnInit(): void {
  }

}
