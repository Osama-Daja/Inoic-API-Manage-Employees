import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublichomePage } from './publichome.page';

describe('PublichomePage', () => {
  let component: PublichomePage;
  let fixture: ComponentFixture<PublichomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublichomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublichomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
