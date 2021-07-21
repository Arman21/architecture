import { Component, OnInit } from '@angular/core';
import { ListApiService } from '../../services/list-api.service';
import { URLs as urls } from 'src/environments/environment';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  usersList!: User[];
  pageUrl: string = urls[1];

  constructor(private readonly _listService: ListApiService) {

  }

  ngOnInit(): void {
    this._listService.getUsersList().subscribe(
      (data: User[]): void => {
        this.usersList = data;
      },
      (error: any): void => console.log(error)
    );
  }

}
