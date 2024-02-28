import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContactsComponent } from './dialog-contacts.component';

describe('DialogContactsComponent', () => {
  let component: DialogContactsComponent;
  let fixture: ComponentFixture<DialogContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
