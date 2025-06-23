import { VideoPageComponent } from './../dialog/video-page/video-page.component';
import { RegisteredPageComponent } from './../dialog/registered-page/registered-page.component';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(
    public dialog: MatDialog,
  ) { }

  openRegisteredDlg() {
    return this.dialog.open(RegisteredPageComponent,
      {
        height: '800px',
        width: '800px',
        data: {},
        disableClose: true
    });
  }
  openVideoDlg() {
    return this.dialog.open(VideoPageComponent,
      {
        height: '600px',
        width: '800px',
        data: {},
        disableClose: true
    });
  }
}
