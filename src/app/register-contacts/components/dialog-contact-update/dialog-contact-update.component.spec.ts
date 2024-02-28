import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContactUpdateComponent } from './dialog-contact-update.component';

describe('DialogContactUpdateComponent', () => {
  let component: DialogContactUpdateComponent;
  let fixture: ComponentFixture<DialogContactUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContactUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContactUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
