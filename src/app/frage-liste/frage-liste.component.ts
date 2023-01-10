import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Frage } from '../shared/fragen';
import { FrageStoreService } from '../shared/frage-store.service';

@Component({
  selector: 'app-frage-liste',
  templateUrl: './frage-liste.component.html',
  styleUrls: ['./frage-liste.component.css'],
})
export class FrageListeComponent implements OnInit {
  @Output() inputFrage: Frage;
  fragenliste: Frage[];

  @Output() showDetailsEvent = new EventEmitter<Frage>();

  constructor(private fs: FrageStoreService) {}

  ngOnInit(): void {
    this.fragenliste = this.fs.getAll();
  }

  showDetails(frage: Frage) {
    this.showDetailsEvent.emit(frage);
  }
}
