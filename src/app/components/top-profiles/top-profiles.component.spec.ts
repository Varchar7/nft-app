import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProfilesComponent } from './top-profiles.component';

describe('TopProfilesComponent', () => {
  let component: TopProfilesComponent;
  let fixture: ComponentFixture<TopProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
