import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {
  percent: number = 0;
  get style() {
    return 'width:' + this.percent + '%'
  }
  constructor() { }

  ngOnInit(): void {
    this.percent = 60;
  }
}

