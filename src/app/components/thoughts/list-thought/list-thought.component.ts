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
  currentPage: number = 1;
  thereAreMoreThoughts: boolean =  true;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list(this.currentPage).subscribe((thoughtList) => {
      this.listThought = thoughtList
    })
  }

  loadMoreThoughts() {
    this.service.list(++this.currentPage).subscribe(listThought => {
      this.listThought.push(...listThought);
      if (!listThought.length ) {
        this.thereAreMoreThoughts = false
      }
    })
  }

}
