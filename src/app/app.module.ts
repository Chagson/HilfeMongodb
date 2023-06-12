import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { ChatHeaderComponent } from './components/chat/chat-header/chat-header.component';
import { ChatUserInputComponent } from './components/chat/chat-user-input/chat-user-input.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/AnmeldeRegistrierung/button/button.component';
import { InputsComponent } from './components/AnmeldeRegistrierung/inputs/inputs.component';
import { StartButtonsComponent } from './components/Startseite/start-buttons/start-buttons.component';
import { ErrungenschaftenComponent } from './components/Startseite/errungenschaften/errungenschaften.component';
import { ProgressBarComponent } from './components/chat/progress-bar/progress-bar.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AbmeldeButtonComponent } from './components/profil/abmelde-button/abmelde-button.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatWindowComponent,
    ChatHeaderComponent,
    ChatUserInputComponent,
    ButtonComponent,
    InputsComponent,
    StartButtonsComponent,
    ErrungenschaftenComponent,
    ProgressBarComponent,
    ProfilComponent,
    AbmeldeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
