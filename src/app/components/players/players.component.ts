import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any[] = [];

  constructor( private _playersService: PlayersService ) { }

  ngOnInit(): void {
    this.players = this._playersService.getPlayers();
  }

}
