import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPOSTAPIComponent } from './add-user-post-api.component';

describe('AddUserPOSTAPIComponent', () => {
  let component: AddUserPOSTAPIComponent;
  let fixture: ComponentFixture<AddUserPOSTAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserPOSTAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserPOSTAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
