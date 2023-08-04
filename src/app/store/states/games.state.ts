import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {SetGames} from "../actions/games.actions";
import {Games, IAction} from "../../core/interfaces";

@State<Games>({
  name: 'games',
  defaults: []
})
@Injectable()
export class GamesState {
  @Action(SetGames)
  setGames(ctx: StateContext<Games>, action: IAction<Games>) {
    const games: Games = action.payload;
    ctx.setState(games)
  }
}
