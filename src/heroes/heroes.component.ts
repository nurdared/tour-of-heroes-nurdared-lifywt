import { Component, OnInit } from '@angular/core';
import { HeroService } from '../app/hero.service';
import { Hero } from '../app/hero';
import { Observable} from 'rxjs'; 
import { MessageService } from '../app/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}