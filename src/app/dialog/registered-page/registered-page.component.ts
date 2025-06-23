import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

enum PAGE {
  basic = 0,
  land,
  skill,
  money,
  tree,
  carbon,
  describe
}

interface UserInfo{
  basic: {
    name: string,
    company: string,
    position: string,
    phone: string,
    email: string,
    location: string
  },
  detail: {
    land: boolean,
    skill: boolean,
    money: boolean,
    tree: boolean,
    carbon: boolean,
    describe: string
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registered-page',
  standalone: true,
  templateUrl: './registered-page.component.html',
  styleUrl: './registered-page.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})

export class RegisteredPageComponent implements OnInit {



  PAGE = PAGE;

  name: string = '';
  company: string = '';
  position: string = '';
  phone: string = '';
  email: string = '';
  location: string = '';

  currentPage = 0;
  totalPage = 5;

  userInfo: UserInfo = {
    basic: {
      name: '',
      company: '',
      position: '',
      phone: '',
      email: '',
      location: ''
    },
    detail: {
      land: false,
      skill: false,
      money: false,
      tree: false,
      carbon: false,
      describe: ''
    }
  };

  emailFormControl = new FormControl(this.userInfo.basic.email, [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<RegisteredPageComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {

  }

  get enableNextBtn (): boolean {
    // if (this.currentPage == 0) {
    //   return this.userInfo.basic.name !== '' && this.userInfo.basic.company !== '' && this.userInfo.basic.email !== '' && this.userInfo.basic.location !== '' && this.userInfo.basic.phone !== '' && this.userInfo.basic.position !== '';

    // }
    return true
  }

  nextPage(isNext: boolean, confirm?: boolean) {
    if (this.currentPage == this.totalPage) {
      console.log(`${JSON.stringify(this.userInfo)}`)

      this.closeDialog();
    }else {
      switch (this.currentPage) {
        case PAGE.basic:
          console.log(`${JSON.stringify(this.userInfo.basic)}`)
          break;
        case PAGE.land:
          this.userInfo.detail.land = isNext;
          break;
        case PAGE.skill:
          this.userInfo.detail.skill = isNext;
          break;
        case PAGE.money:
          this.userInfo.detail.money = isNext;
          break;
        case PAGE.tree:
          this.userInfo.detail.tree = isNext;
          break;
        case PAGE.carbon:
          this.userInfo.detail.carbon = isNext;
          break;
        default:
          break;
      }
      this.currentPage = this.currentPage + 1;
    }
  }

  ngOnInit(): void {

  }

  closeDialog() {
    this.dialogRef.close(this.userInfo);
  }
}
