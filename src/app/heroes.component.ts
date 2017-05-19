import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit  {	
	heroes : Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	getHeroes(): void {
  		this.heroService.getHeroes1()
  			.subscribe(heroes => this.heroes = heroes.data);
	}

	ngOnInit(): void {
    	this.getHeroes();
  	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name: String): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.create(name)
			.then(hero => {
				this.heroes.push(hero);
				this.selectedHero = null;
			});
	}
	add1(name: String): void {
		if (!name) {}
		this.heroService.create1(name)
			.subscribe(
				hero => this.heroes.push(hero),
				error => this.errorMessage = <any>error);
	}

	delete(hero: Hero): void {
		this.heroService
			.delete(hero.id)
			.then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) { this.selectedHero = null; }
			});
	}
}
