import { Component, OnInit } from '@angular/core';
import { ListApiService } from '../../services/list-api.service';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  usersList!: User[];

  constructor(private readonly _listService: ListApiService) {

  }

  ngOnInit(): void {
    this._listService.getUsersList().subscribe(
      (data: Array<User>): void => {
        this.usersList = data;
      },
      (error: any): void => console.log(error)
    );
  }

}
