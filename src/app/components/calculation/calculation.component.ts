import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LexiconService } from 'src/app/services/lexicon.service';
import { ILexiconWords } from 'src/app/interfaces/lexicon-words.interface';


@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  public sentenceValue: number;
  sentence = new FormControl('');
  public lexiconWords: ILexiconWords[];

  constructor(
    private _lexiconService: LexiconService
  ) {
    this._lexiconService.getLexicon().subscribe((response: any) => {
      this.lexiconWords = response;
    });
  }

  ngOnInit() {

  }

  submintSentence() {
    const res = this.analyze(this.sentence.value);
    this.sentenceValue = res.toFixed(1);
  }

  tokenize(text) {
    return text.toLowerCase().split(' ');
  }

  deleteSpecialCharacters(word): string {
    return word.replace(/[^\w\s]/gi, '');
  }

  rateWord(word) {
    let wordValue = 0;
    for (var i = 0; i < this.lexiconWords.length; i++) {
      if (word === this.lexiconWords[i].lexiconName) {
        wordValue = parseFloat(this.lexiconWords[i].lexiconValue);
      }
    }

    return wordValue;
  }

  sum(accumulator, currenValue) {
    return parseFloat(accumulator) + parseFloat(currenValue);
  }

  analyze(text) {
    return this.tokenize(text)
      .map(this.deleteSpecialCharacters)
      .map((word) => this.rateWord(word))
      .reduce(this.sum);
  }

}
