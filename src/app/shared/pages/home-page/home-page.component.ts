import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Select} from "@ngxs/store";
import {GamesState} from "../../../store/states/games.state";
import {GamesService} from "../../../core/services/games.service";
import {Game, Games, Products} from "../../../core/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public products: Products = [];
  @Select(GamesState) private games$: Observable<Games> | undefined;
  private getGamesSubscription: Subscription | undefined;
  private gamesSubscription: Subscription | undefined;

  constructor(private gamesService: GamesService) {
    this.getGamesSubscription = this.gamesService.getGames()
  }

  ngOnInit() {
    this.gamesSubscription = this.games$?.subscribe({
      next: (games: Games) => {
        this.products = games?.map((game: Game) => ({
          id: game.gameID,
          name: game.external,
          price: game.cheapest,
          imageUrl: game.thumb,
        }))
      }
    })
  }

  ngOnDestroy() {
    this.gamesSubscription?.unsubscribe()
    this.getGamesSubscription?.unsubscribe()
  }
}
