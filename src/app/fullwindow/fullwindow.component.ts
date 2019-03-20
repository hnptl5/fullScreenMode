import { Component, OnInit, Inject } from '@angular/core';

import { FullwindowService } from '../service/fullwindow.service';
@Component({
  selector: 'app-fullwindow',
  templateUrl: './fullwindow.component.html',
  styleUrls: ['./fullwindow.component.scss']
})
export class FullwindowComponent implements OnInit {

  constructor(private screenService: FullwindowService) {}

  ngOnInit() {}

  openFullscreen() {
    this.screenService.openFullscreen();
  }

  closeFullscreen() {
    this.screenService.closeFullscreen();
  }
}
