import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencesComponentComponent } from './residences-component.component';

describe('ResidencesComponentComponent', () => {
  let component: ResidencesComponentComponent;
  let fixture: ComponentFixture<ResidencesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidencesComponentComponent]
    });
    fixture = TestBed.createComponent(ResidencesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
