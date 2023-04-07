import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForServiceComponent } from './ask-for-service.component';

describe('AskForServiceComponent', () => {
  let component: AskForServiceComponent;
  let fixture: ComponentFixture<AskForServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskForServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
