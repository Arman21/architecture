import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { ApiStorageService } from 'src/app/globalServices/state/api-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-user-side',
  templateUrl: './user-side.component.html',
  styleUrls: ['./user-side.component.css']
})

export class UserSideComponent implements OnInit {

  constructor(
      private readonly _userApiService: UserApiService,
      private readonly _storageService: ApiStorageService,
      private readonly _router: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    this._router.params.subscribe(
      (param: Params): void => {
        this._storageService.userId = param.id;
        this._userApiService.getUserData(this._storageService.userId).subscribe(
          (info: User): void => {
            console.log(info);
          },
          (error: any): void => console.log(error)
        );
      }
    );
  }

}
