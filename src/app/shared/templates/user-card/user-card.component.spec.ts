import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { PAGE_URLS as urls} from './../../../../environments/environment';
import { User } from './../../../models/user';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  let url: string;
  let offerText: string;
  let users: User[];

  beforeAll((): void => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [
        UserCardComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    url = component.pageUrl;
    offerText = component.offer;
    users = component.list;
  });

  it('should be created.', (): void => {
    expect(component).toBeTruthy();
  });

  it('should have property pageUrl.', (): void => {
    expect(url).toBeDefined();
  });

  it('should have same value with urls[1].', (): void => {
    expect(url).toEqual(urls.oneUserPage);
  });

  it('should have property offer.', (): void => {
    expect(offerText).toBeDefined();
  });

  it(`should have value.`, (): void => {
    expect(offerText).toEqual('Go to user profile');
  });
});
