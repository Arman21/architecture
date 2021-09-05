import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { ApiStorageService } from 'src/app/globalServices/state/api-storage.service';
import { LoadingService } from 'src/app/globalServices/state/loading.service';
import { TimerService } from 'src/app/globalServices/state/timer.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-user-side',
  templateUrl: './user-side.component.html',
  styleUrls: ['./user-side.component.css']
})

export class UserSideComponent implements OnInit, OnDestroy {
  userData!: User | null;

  constructor(
      private readonly _storageService: ApiStorageService,
      private readonly _router: ActivatedRoute,
      private readonly _loadingService: LoadingService,
      private readonly _timerService: TimerService,
      public userApiService: UserApiService
    ) {

  }

  ngOnInit(): void {
    this._router.params.subscribe(
      (param: Params): void => {
        this._storageService.userId = param.id;
        this._timerService.setInterval().subscribe((time: number): void => {
          this.userApiService.getUserData(this._storageService.userId).subscribe(
            (info: User): void => {
              console.log(info);
              this.userData = info;
            },
            (error: any): void => console.log(error)
          );
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.userData = null;
    this._loadingService.setLoading(true);
  }

}
