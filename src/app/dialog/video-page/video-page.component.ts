import { Component, OnInit, Inject, ViewEncapsulation, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class VideoPageComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    public dialogRef: MatDialogRef<VideoPageComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // this.setVideo(true)
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.setVideo()
    // }, 300);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  // setVideo(pause?: boolean) {
  //   var path: string = 'assets/video/WeiChen.mp4';
  //   var vid = document.getElementById("WeiChenVideo") as HTMLVideoElement;
  //   if (vid) {
  //     if (pause) {
  //       vid.pause();
  //     } else {
  //       var src = document.createElement('source');
  //       src.setAttribute('src', path);
  //       vid.appendChild(src);
  //       vid.play();
  //     }
  //   }
  // }
}
