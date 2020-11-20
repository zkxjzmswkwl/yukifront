import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPlayer {
  id: number;
  username: string;
  twitter: string;
  games: string[];
  is_pro: boolean;
};


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.sass']
})
export class RosterComponent implements OnInit {

  // a: IPlayer = {id: 1, name: 'Carter', games: ['Overwatch', 'Apex']};
  public players: IPlayer[] = [];

  constructor(private _http: HttpClient) {
    // this.playerList = ''qqqqqqqq;
  }

  click()
  {
    this.getAllPlayers().subscribe((r: any) => {
      this.players = r;
    });
  }
  getAllPlayers()
  {
    return this._http
      .get('http://localhost:8000/api/members/');
  }

  ngOnInit(): void
  {
    this.click();
  }

}
