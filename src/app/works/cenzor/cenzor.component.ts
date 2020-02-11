import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  word = /^[A-Za-z0-9]+$/;
  addWord(): void {
    if (!this.word.test(document.forms[0].txtAdd.value)) {
      document.forms[0].txtAdd.placeholder = 'Please write a word!';
    }
    else {
      document.forms[0].txt.value += ` ${document.forms[0].txtAdd.value}`;
      document.forms[0].txtAdd.value = '';
      document.forms[0].txtAdd.placeholder = 'word here...'
    }
  }

  resForm(): void {
    document.forms[0].reset();
  }
  
  cenTxt() {
    if (/^$/.test(document.forms[0].txtCen.value)) document.forms[0].txtCen.placeholder = 'Please write a text!';
    else {
        let arrTxt = document.forms[0].txt.value.split(' ');
        let arrTxtCen = document.forms[0].txtCen.value.split(' ');
        for (let i = 0; i < arrTxtCen.length; i++) {
            for (let j = 0; j < arrTxt.length; j++) {
                if (arrTxtCen[i] == arrTxt[j]) {
                    let z = '';
                    for (let k = 0; k < arrTxtCen[i].split('').length; k++) {
                        z += '*';
                    }
                    arrTxtCen[i] = z;
                }
            }
        }
        let newTxtCen = '';
        for (let i = 0; i < arrTxtCen.length; i++) {
            newTxtCen += ` ${arrTxtCen[i]}`;
        }
        document.forms[0].txtCen.value = newTxtCen.trim();
    }
  }
}
