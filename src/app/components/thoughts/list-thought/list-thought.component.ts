import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThought: Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list().subscribe((thoughtList) => {
      this.listThought = thoughtList
    })
  }

}
