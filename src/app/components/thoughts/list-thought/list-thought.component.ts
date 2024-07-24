import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThought: Thought[] = [];
  currentPage: number = 1;
  thereAreMoreThoughts: boolean =  true;
  filter: string = '';
  favorites: boolean = false;
  favoritesList: Thought[] = [];
  title: string = 'My Mural'

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.list(this.currentPage, this.filter, this.favorites).subscribe((thoughtList) => {
      this.listThought = thoughtList
    })
  }

  loadMoreThoughts() {
    this.service.list(++this.currentPage, this.filter, this.favorites).subscribe(listThought => {
      this.listThought.push(...listThought);
      if (!listThought.length ) {
        this.thereAreMoreThoughts = false
      }
    })
  }

  searchThought() {
    this.thereAreMoreThoughts = true
    this.currentPage = 1;
    this.service.list(this.currentPage, this.filter, this.favorites).subscribe(listThought => {
      this.listThought = listThought
    })
  }

  reloadComponent() {
    this.favorites = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listFavorites() {
    this.title = 'My Favorites'
    this.favorites = true
    this.thereAreMoreThoughts = true
    this.currentPage = 1
    this.service.list(this.currentPage, this.filter, this.favorites).subscribe(listFavoriteThoughts => {
      this.listThought = listFavoriteThoughts
      this.favoritesList = listFavoriteThoughts
    })
  }

}
