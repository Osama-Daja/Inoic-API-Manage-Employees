import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputadminPage } from './inputadmin.page';

describe('InputadminPage', () => {
  let component: InputadminPage;
  let fixture: ComponentFixture<InputadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
