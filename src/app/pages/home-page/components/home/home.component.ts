import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListApiService } from '../../services/list-api.service';
import { LoadingService } from 'src/app/globalServices/state/loading.service';
import { TimerService } from 'src/app/globalServices/state/timer.service';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  usersList!: User[] | null;

  constructor(
      private readonly _loadingService: LoadingService,
      private readonly _timerService: TimerService,
      public listService: ListApiService
    ) {

  }

  ngOnInit(): void {
    this._timerService.setInterval().subscribe((time: number): void => {
      this.listService.getUsersList().subscribe(
        (data: Array<User>): void => {
          this.usersList = data;
        },
        (error: any): void => console.log(error)
      );
    });
  }

  ngOnDestroy(): void {
    this.usersList = null;
    this._loadingService.setLoading(true);
  }

}
