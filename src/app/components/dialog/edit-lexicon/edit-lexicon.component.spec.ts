import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLexiconComponent } from './edit-lexicon.component';

describe('EditLexiconComponent', () => {
  let component: EditLexiconComponent;
  let fixture: ComponentFixture<EditLexiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLexiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLexiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
