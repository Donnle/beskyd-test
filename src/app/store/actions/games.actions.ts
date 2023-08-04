import {GAMES_ACTIONS} from "../../core/enums";
import {Games} from "../../core/interfaces";

export class SetGames {
  static readonly type = GAMES_ACTIONS.SET_GAMES

  constructor(public payload: Games) {
  }
}
