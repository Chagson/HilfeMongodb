import { Component, EventEmitter, OnInit , Output, Renderer2, ElementRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ChatService } from 'src/app/service/chat.service';
@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit{

  currentUrl: string = "";

  constructor(private ChatService: ChatService, private router: Router) {};
  
  //Later we have to take this from the database
  title: string = 'StudyBuddy';
  name: string = 'Ben';
  buddyImage: string = "assets/img/maleBuddy1.png";
  starImage: string ='assets/img/stars.png';
  medallImage: string = 'assets/img/medall.png';
  startWindow:string = '/startButtons/chatWindow';
  Errungenschaften:string = '/startButtons/errungenschaften';
  amountStars: number = 5;
  amountMedalls: number = 10;
  playerLevel: number = 3;
  bildIsSelected: boolean = false;
  backIsSelected: boolean = false;
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if(event.url === this.startWindow || event.url === this.Errungenschaften){
          this.selectBack();
          console.log(this.ChatService.backIsSelected);
        } else{
          console.log("this.backIsSelected");
          this.ChatService.backIsSelected = false;
        }
      }
    });
    this.backIsSelected = this.ChatService.backIsSelected;
    

  }

  //constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  //ngOnInit() {
    //this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
      //this.selectBild();
    //});
  //}
  
  @Output() closeChat = new EventEmitter();

  //Method to close the chatwindow
  onCloseClick() {
    this.closeChat.emit();
  }
  selectBack(){
    this.ChatService.backIsSelected = !this.ChatService.backIsSelected;
  }
  selectBild() {
    console.log(this.ChatService.backIsSelected);
    console.log(this.backIsSelected);
    this.bildIsSelected = !this.bildIsSelected;
  }
}
