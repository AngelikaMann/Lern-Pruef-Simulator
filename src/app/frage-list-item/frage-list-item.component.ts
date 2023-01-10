import { Component, Input, OnInit } from '@angular/core';
import { Frage } from '../shared/fragen';

@Component({
  selector: 'app-frage-list-item',
  templateUrl: './frage-list-item.component.html',
  styleUrls: ['./frage-list-item.component.css'],
})
export class FrageListItemComponent implements OnInit {
  @Input() inputFrage: Frage;

  constructor() {}

  ngOnInit(): void {}
}
