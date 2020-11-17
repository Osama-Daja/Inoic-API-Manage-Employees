import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployelistPage } from './employelist.page';

describe('EmployelistPage', () => {
  let component: EmployelistPage;
  let fixture: ComponentFixture<EmployelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
