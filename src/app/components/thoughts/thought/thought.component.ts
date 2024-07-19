import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: 'I love angular',
    authorship: 'Carlos',
    model: 'model3',
    favorite: false
  }
  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
  }

  thoughtLength(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }

  changeFavoriteIcon(): string {
      if (this.thought.favorite == false) {
        return 'inactive'
      } else {
        return 'active'
      }
  }

  updateFavorite() {
    this.service.changeFavorite(this.thought).subscribe()
  }

}
