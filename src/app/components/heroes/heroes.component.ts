import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    // console.log('Constructor');
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      if (params.name) {
        // console.log(params.name);
        // tslint:disable-next-line:no-string-literal
        this.heroes = this._heroesService.buscarHeroes(params['name']);
        // console.log(this._heroesService.buscarHeroes(params['name']));
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
    });
    // console.log(this.heroes);
  }

  // tslint:disable-next-line: typedef
  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }
}
