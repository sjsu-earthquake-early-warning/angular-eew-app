import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterfeedComponent } from './twitterfeed.component';

describe('TwitterfeedComponent', () => {
  let component: TwitterfeedComponent;
  let fixture: ComponentFixture<TwitterfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
