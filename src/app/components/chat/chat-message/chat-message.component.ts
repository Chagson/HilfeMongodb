import { Component, Input, OnInit, Output,OnDestroy, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit, OnDestroy {
  @Input() messageText!: string;
  @Input() messageTime!: string;
  @Input() messageImage!: string;
  @Input() isUser!: boolean;
  @Input() messageButtons!: { title: string; payload: string }[];

  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  // Define a property 'isTyping' to represent whether the user is typing or not
  isTyping = false;
  TimerEin = false;
  minutes: number = 0;
  seconds: number = 30;
  timer: any;
  isButtonDisabled: boolean = false;

  timerElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.timerElement = elementRef.nativeElement;
  }

  ngOnInit() {
    // If the component is not representing the user, set 'isTyping' to true
    if (!this.isUser) {
      this.isTyping = true;
      // Set a timer to set 'isTyping' to false after a delay
      setTimeout(() => {
        this.isTyping = false;
      }, 1000);
    }
    if(!this.isUser && this.messageText != "Hallo, wie kann ich Ihnen helfen?"){
      this.startTimer();
      this.TimerEin = true;
    }
  }
  ngOnDestroy() {
    this.stopTimer();
  }

  desableButton() {
    this.isButtonDisabled = true;
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.stopTimer();
        }
      }
       if (this.minutes === 0 && this.seconds <= 30) {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
          timerElement.classList.add('fade-out');
        }
      }
    }, 1000);
  }
  stopTimer() {
    this.desableButton();
    clearInterval(this.timer);
  }

  // Method for buttons in the chatbot. Emit the 'buttonClick' event with the provided payload.
  onButtonClick(payload: string): void {
    this.buttonClick.emit(payload);
    this.stopTimer();
  }
}
