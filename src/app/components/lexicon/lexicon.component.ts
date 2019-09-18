import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { EditLexiconComponent } from '../dialog/edit-lexicon/edit-lexicon.component';
import { LexiconService } from 'src/app/services/lexicon.service';
import { ILexiconWords } from 'src/app/interfaces/lexicon-words.interface';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.scss']
})

export class LexiconComponent implements OnInit {
  lexiconForm = new FormGroup({
    lexiconName: new FormControl('', Validators.required),
    lexiconValue: new FormControl('', Validators.required),
  });

  public lexiconWords: ILexiconWords[];
  public unparsedData: ILexiconWords[];
  public errorText = '';

  constructor(
    private _lexiconService: LexiconService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getLexicon();
  }

  onSubmit() {
    const formData = this.lexiconForm.getRawValue();
    if (!this.lexiconWords.find((el) => el.lexiconName === formData.lexiconName)) {
      const model = {
        lexiconName: formData.lexiconName,
        lexiconValue: formData.lexiconValue
      };
      this.lexiconWords.push(model);
      this.saveData(this.lexiconWords);
      this.lexiconForm.reset();
    } else {
      this.errorText = 'lexicon already exists';
    }

  }


  deleteLexicon(index) {
    const newArray = this.lexiconWords
      .filter((element, id) => {
        return id !== index;
      });
    this.lexiconWords = newArray;
    this.saveData(this.lexiconWords);
  }

  updateLexicon(index) {
    const dialogRef = this.dialog.open(EditLexiconComponent, {
      width: '250px',
      data: this.lexiconWords[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lexiconWords[index].lexiconName = result.key;
      this.lexiconWords[index].lexiconValue = result.value;
    });
  }

  lexiconFilter(filterKey) {
    const newArray = this.unparsedData
      .filter((element) => {
        if (filterKey === 'positive') {
          return parseFloat(element.lexiconValue) > 0;
        }
        if (filterKey === 'negative') {
          return parseFloat(element.lexiconValue) < 0;
        } else {
          return true;
        }
      });
    this.lexiconWords = newArray;
  }


  getLexicon() {
    this._lexiconService.getLexicon().subscribe((response: ILexiconWords[]) => {
      this.unparsedData = response || [];
      this.lexiconWords = this.unparsedData;
    });
  }

  saveData(model) {
    this._lexiconService.saveLexicon(model).subscribe((res) => {
      if (res) {
        this.getLexicon();
      }
    });
  }
}
