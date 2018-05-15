/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoteComponent } from './vote.component';
import { PersonList } from './person-list.component';
import { Person } from './person';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent, PersonList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not emit the event initially', function(){
    let myElement = fixture.debugElement.query(By.css('h1'));
    let el = myElement.nativeElement; //h1 element
    expect(el.innerText).toBe("Total votes: 0");
  })
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
