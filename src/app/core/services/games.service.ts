import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngxs/store";
import {Games} from "../interfaces";
import {SetGames} from "../../store/actions/games.actions";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly GAMES_TITLE: string = 'need for speed';
  private readonly GAMES_COUNT: number = 15;

  constructor(private http: HttpClient, private store: Store) {
  }

  public getGames(): Subscription {
    return this.getGamesRequest().subscribe({
      next: (games: Games) => {
        this.store.dispatch(new SetGames(games))
      }
    })
  }

  private getGamesRequest(gameName: string = this.GAMES_TITLE, countGames: number = this.GAMES_COUNT): Observable<Games> {
    return this.http.get<Games>('https://www.cheapshark.com/api/1.0/games', {
      params: {
        title: gameName,
        limit: countGames,
      }
    })
  }
}
