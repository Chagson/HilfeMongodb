import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component'
import { ButtonComponent } from './components/AnmeldeRegistrierung/button/button.component';
import { StartButtonsComponent } from './components/Startseite/start-buttons/start-buttons.component';
import { InputsComponent } from './components/AnmeldeRegistrierung/inputs/inputs.component';
import { ErrungenschaftenComponent } from './components/Startseite/errungenschaften/errungenschaften.component';

const routes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'startButtons', component: StartButtonsComponent },
  { path: 'input', component: InputsComponent },
  { path: 'startButtons/errungenschaften', component: ErrungenschaftenComponent },
  { path: 'startButtons/chatWindow', component: ChatWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
