import { Component, OnInit, Input } from '@angular/core';
import { PAGE_URLS as urls } from 'src/environments/environment';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {
  @Input() list!: User[];

  pageUrl: string = urls.oneUserPage;
  offer: string = 'Go to user profile';

  constructor() {

  }

  ngOnInit(): void {

  }

}
