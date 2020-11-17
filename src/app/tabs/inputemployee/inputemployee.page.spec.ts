import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputemployeePage } from './inputemployee.page';

describe('InputemployeePage', () => {
  let component: InputemployeePage;
  let fixture: ComponentFixture<InputemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputemployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
