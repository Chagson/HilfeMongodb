import { Component} from '@angular/core';
@Component({
  selector: 'app-start-buttons',
  templateUrl: './start-buttons.component.html',
  styleUrls: ['./start-buttons.component.css']
})
//

export class StartButtonsComponent{

/*
export class StartButtonsComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    window.history.replaceState(null, '', window.location.href);
  }
  */


  checkQuiz: boolean = true;
  checkErrungenschaften: boolean = true;
  checkInput: boolean = false;
  checkSelect: boolean = false;

  selectStartQuiz() {
    this.checkQuiz = false;
    this.checkSelect = true;
    this.checkInput = true;

  }

  selectErrungenschaften() {
    this.checkErrungenschaften = false;
    this.checkSelect = true;
    this.checkInput = false;
  }
}
