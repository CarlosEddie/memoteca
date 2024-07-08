import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought:Thought = {
    id: 5,
    content: 'Learning Angular',
    authorship: 'Dev',
    model: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert('Created new thought')
  }

  cancel() {
    alert('Canceled Action')
  }

}
