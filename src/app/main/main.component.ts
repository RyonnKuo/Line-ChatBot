import { Component, OnInit } from '@angular/core';
import { OpenAiApiServiceService } from './../service/open-ai-api.service.service';
import { GoogleTranslateService } from './../service/google-translate.service';
import { DialogServiceService } from './../service/dialog-service.service';
import { GlobalService } from '../service/global.service';

enum SwapAct {
  left = 0,
  right
}

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  _inputText: string = '';


  recommendItems: string[] = [
    './assets/images/chen/chen_2.jpg',
    './assets/images/chen/chen_3.png'
  ];
  currentRecommend: string = '';
  slideIndex = 1;
  SwapAct = SwapAct;
  SwapTimer: any;
  imageWid = 800;
  transition: string = 'transform 0.5s ease-in-out';
  transform: string = 'translateX(0px)'
  disableSwapBtn: boolean = false;


  constructor(
    private openaiService: OpenAiApiServiceService,
    private gtr: GoogleTranslateService,
    private dialog: DialogServiceService,
    private gos: GlobalService
  ) {

  }

  get recommendLeng(): number {
    if (this.recommendItems) {
      return this.recommendItems.length;
    }
    return 0;
  }

  get inputText(): string {
    return this._inputText;
  }
  set inputText(s: string) {
    this._inputText = s;
  }
  ngOnInit(): void {
    this.initQueue(this.recommendItems);
  }

  onKeyUp(event: any) {
    if (event.target.value) {
      this.inputText = event.data;
    }
  }

  askAI() {
    this.openaiService.getOpenAIResponse();
  }

  sendLineMessage() {

  }

  openVideoDlg() {
    const dlg = this.dialog.openVideoDlg();
    dlg.afterClosed().subscribe(res => {
      console.log(`VideoDlg is close`);

    });
  }

  onRegistered() {
    const dlg = this.dialog.openRegisteredDlg();
    dlg.afterClosed().subscribe(res => {
      console.log(`RegisteredDlg is close, res = ${JSON.stringify(res)}`);

      const d = res;
      this.gos.sendUserInfoToServer(d);
    });
  }

  onLanguageSwitch() {

  }

  winScroll(e: any) {

  }

  initQueue(data: string[]) {
    this.cleanSwapTimer();

    const tmp = data;
    this.currentRecommend = tmp[0];
    if (tmp.length > 1) {

      let lastClone = tmp[tmp.length - 1];
      let firstClone = tmp[0];
      tmp.push(firstClone);
      tmp.unshift(lastClone);

      this.slideIndex = 1;
      this.transition = 'transform 0.5s ease-in-out';
      this.transform = `translateX( -800px )`;

    }else if (tmp.length == 1) {
      this.slideIndex = 0;
      this.transition = 'none';
      this.transform = `translateX( 0px )`;
    }

    this.recommendItems = tmp;

    if (tmp.length > 1) {
      this.startSwapTimer();
    }
  }

  swapMsg(act: SwapAct) {
    this.cleanSwapTimer();
    act == SwapAct.left ? this.slideIndex-- : this.slideIndex++;
    this.transition = 'transform 0.5s ease-in-out';
    this.transform = `translateX( -${this.imageWid * this.slideIndex}px )`;
    this.currentRecommend = this.recommendItems[this.slideIndex];
    this.startSwapTimer();
  }

  onHyperlink(e: MouseEvent, rec: string) {
    e.stopPropagation();
    e.preventDefault();
    var link = rec;
    if (link !== '') {
      window.open(link, "_blank");
    }
  }

  startSwapTimer() {
    this.SwapTimer = setInterval(() => {
      if (this.recommendItems.length == 0) {
        this.cancelAllAnim();
      }else {
        this.slideIndex++;
        this.transition = 'transform 0.5s ease-in-out';
        this.transform = `translateX( -${this.imageWid * this.slideIndex}px )`;
        this.currentRecommend = this.recommendItems[this.slideIndex];
      }
    }, 3500);
  }

  cleanSwapTimer() {
    if (this.SwapTimer) {
      clearInterval(this.SwapTimer);
      this.SwapTimer = null;
    }
  }

  cancelAllAnim() {
    this.transition = 'none';
    this.cleanSwapTimer();
  }

  swapStart() {
    this.disableSwapBtn = true;
  }

  swapEnd() {
    if (this.slideIndex <= 0) {
      this.transition = 'none';
      this.slideIndex = this.recommendItems.length - 2;
      this.transform = `translateX( -${this.imageWid * this.slideIndex}px )`;
    } else if (this.slideIndex >= this.recommendItems.length - 1) {
      this.transition = 'none';
      this.slideIndex = this.recommendItems.length - this.slideIndex;
      this.transform = `translateX( -${this.imageWid * this.slideIndex}px )`;
    }
    this.disableSwapBtn = false;
  }
}
