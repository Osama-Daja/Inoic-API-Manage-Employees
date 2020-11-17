import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivatehomePage } from './privatehome.page';

describe('PrivatehomePage', () => {
  let component: PrivatehomePage;
  let fixture: ComponentFixture<PrivatehomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatehomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivatehomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
