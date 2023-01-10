import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrageStoreService } from '../shared/frage-store.service';
import { Frage, Antwort } from '../shared/fragen';

@Component({
  selector: 'app-tpm-pool',
  templateUrl: './tpm-pool.component.html',
  styleUrls: ['./tpm-pool.component.css'],
})
export class TpmPoolComponent implements OnInit {
  @Output() inputFrage: Frage;
  // @Input() inputFrage: Frage;
  fragenliste: Frage[];
  indexFrageNr: number;
  frage: Frage;
  antworten: Antwort[];
  toggel: boolean;
  zahlrichantuser: number;
  zahlfalantuser: number;
  ergAnzeigen: boolean;
  fragenanzahl: number;
  anzUnBeFr: number;
  anzBeFr: number;
  anzFaBeFr: number;
  anzRiBeFr: number;
  frageistRichtig: boolean;
  frageIstFalsch: boolean;
  feetFlag: boolean;

  lernenFlag: boolean;
  frageNichtBeantwortet: boolean;
  ergFrageAnzeigen: boolean;
  bewertung_anzeigen: boolean;
  negatives: boolean;

  constructor(
    private fs: FrageStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.indexFrageNr = 0;
    // wir holen uns hier unsere Fragen über unseren fragen service
    this.fragenliste = this.fs.getAll();
    // die Array ID der, per Route übergebenen Frage, suchen
    this.frage = this.fs.getSingle(this.indexFrageNr);

    // this.frage = this.fragenliste[this.indexFrageNr]
    this.fragenanzahl = this.fs.fragenliste.length;
    this.lernenFlag = false;
    this.frageIstFalsch = false;
    // this.frageNichtBeantwortet = false;
    this.frageistRichtig = false;
    this.ergFrageAnzeigen = false;
    this.bewertung_anzeigen = false;
    this.ergAnzeigen = false;
    this.toggel = false;
    this.negatives = false;
    this.feetFlag = false;
  }

  anfang() {
    this.indexFrageNr = 0;
    this.frage = this.fs.getSingle(this.indexFrageNr);
  }

  v_frage() {
    this.lernenFlag = false;
    if (this.indexFrageNr <= 0) {
      this.indexFrageNr = 0;
    } else {
      this.indexFrageNr--;
    }
    this.frage = this.fs.getSingle(this.indexFrageNr);
    this.frage.antworten.map((a) => (a.gebAntwort = false));
  }

  n_frage() {
    this.feetFlag = false;
    this.lernenFlag = false;
    console.log('letzte Frage', this.frage.antworten);
    if (this.indexFrageNr < this.fragenliste.length - 1) {
      this.indexFrageNr++;
    }
    this.frage = this.fs.getSingle(this.indexFrageNr);
    this.frage.antworten.map((a) => (a.gebAntwort = false));
  }

  ende() {
    this.toggel = false;

    this.indexFrageNr = this.fragenliste.length - 1;
    this.frage = this.fs.getSingle(this.indexFrageNr);
  }

  ergebnis() {
    this.ergAnzeigen = !this.ergAnzeigen;
    // this.bewertung_anzeigen = !this.bewertung_anzeigen;
    // anzahl Fragen
    // anzahl unbeantworteter Fragen
    // Anzahl beantworteter Fragen
    // Anzahl falsch beantworter Fragen
    // Anzahl richtig beantworter Fragen

    this.anzUnBeFr = 0;
    this.anzBeFr = 0;
    this.anzFaBeFr = 0;
    this.anzRiBeFr = 0;
    // anzahl Fragen
    this.fragenanzahl = this.fragenliste.length;

    // anzahl unbeantworteter Fragen
    this.fragenliste.map((f) => {
      let beantwortet = false;
      f.antworten.map((a) => {
        if (a.gebAntwort) beantwortet = true;
      });
      if (!beantwortet) this.anzUnBeFr++;
    });

    // Anzahl beantworteter Fragen
    this.anzBeFr = this.fragenanzahl - this.anzUnBeFr;

    // Anzahl falsch beantworter Fragen
    //
    this.fragenliste.map((f) => {
      let falschbeant = false;
      f.antworten.map((a) => {
        if (a.richtig) {
          if (!a.gebAntwort) falschbeant = true;
        }
        if (!a.richtig) {
          if (a.gebAntwort) falschbeant = true;
        }
      });
      if (falschbeant) this.anzFaBeFr++;
    });
    this.anzFaBeFr -= this.anzUnBeFr;

    // Anzahl richtig beantworter Fragen
    this.anzRiBeFr = this.fragenanzahl - this.anzUnBeFr - this.anzFaBeFr;
  }

  ergebnisFrage() {
    this.ergFrageAnzeigen = !this.ergFrageAnzeigen;

    //Frage richtig beantwortet

    this.frageistRichtig = false;
    if (this.frageBeant()) {
      this.frageistRichtig = this.frageRichtigBeant();
      console.log(this.frageistRichtig);
    }
    //Frage falsch beantwortet

    this.frageIstFalsch = false;
    if (!this.frageRichtigBeant()) {
      this.frageIstFalsch = true;
      console.log(this.fr_Fal_Beant());
      console.log(this.frageIstFalsch);
    }

    // Frage nicht beantwortet
    this.frageNichtBeantwortet = this.frageNichtBeant();
  }
  // Frage falsch beantwortet

  frageNichtBeant(): boolean {
    let nichtBeantwortet = true;
    this.frage.antworten.map((a) => {
      if (a.richtig) nichtBeantwortet = false;
    });
    return nichtBeantwortet;
  }

  frageBeant(): boolean {
    let beantwortet = false;
    this.frage.antworten.map((a) => {
      if (a.richtig) beantwortet = true;
    });
    return beantwortet;
  }

  fr_Fal_Beant(): boolean {
    let falBetet = false;
    this.frage.antworten.map((a) => {
      if (a.richtig) {
        if (!a.gebAntwort) falBetet = true;
      }
      if (!a.richtig) {
        if (a.gebAntwort) falBetet = true;
      }
    });
    return falBetet;
  }

  frageRichtigBeant(): boolean {
    // zaehle alle korekten antworten
    // Zaehlen alle gegebenen antworten
    let correctAntworten = 0;
    let givenAntworten = 0;
    let givenCorrectAntworten = 0;
    this.frage.antworten.map((a) => {
      if (a.richtig) correctAntworten++;
      if (a.gebAntwort) givenAntworten++;
      if (a.richtig && a.gebAntwort) givenCorrectAntworten++;
    });
    if (
      givenAntworten - givenCorrectAntworten == 0 &&
      correctAntworten - givenCorrectAntworten == 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
