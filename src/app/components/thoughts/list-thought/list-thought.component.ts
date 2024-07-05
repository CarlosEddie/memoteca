import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThought = [
    {
      content: 'Test Test Test Test Test Test Test ',
      authorship: 'Carlos',
      model: 'model3'
    },
    {
      content: 'Test Test Test Test Test  ',
      authorship: 'Carlos',
      model: 'model2'
    },
    {
      content: 'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
      authorship: 'Carlos',
      model: 'model3'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
