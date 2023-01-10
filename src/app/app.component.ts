import { Component, OnInit, Input } from '@angular/core';
import { Frage } from './shared/fragen';


type ViewState ='list'|'details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
frage: Frage;
viewState: ViewState = 'list';


showList() {
  this.viewState ='list';
}

showDetails(frage:Frage) {
  this.frage = frage;
this.viewState ='details';
}

}
