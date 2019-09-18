import { Component, OnInit, Inject, } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ILexiconWords } from 'src/app/interfaces/lexicon-words.interface';

@Component({
  selector: 'app-edit-lexicon',
  templateUrl: './edit-lexicon.component.html',
  styleUrls: ['./edit-lexicon.component.scss']
})
export class EditLexiconComponent implements OnInit {
  lexiconForm = new FormGroup({
    lexiconName: new FormControl('', Validators.required),
    lexiconValue: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<EditLexiconComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILexiconWords) { }

  ngOnInit() {
    this.lexiconForm.setValue(
      {
        lexiconName: this.data.lexiconName,
        lexiconValue: this.data.lexiconValue
      });
  }

  onSubmit(): void {
    const formData = this.lexiconForm.getRawValue();
    const model = {
      key: formData.lexiconName,
      value: formData.lexiconValue
    }
    this.dialogRef.close(model);
  }

}
