import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanAddPage } from './plan-add.page';

describe('PlanAddPage', () => {
  let component: PlanAddPage;
  let fixture: ComponentFixture<PlanAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
