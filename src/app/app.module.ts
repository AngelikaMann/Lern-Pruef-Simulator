import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrageListeComponent } from './frage-liste/frage-liste.component';
import { FrageListItemComponent } from './frage-list-item/frage-list-item.component';
import { FrageDetailsComponent } from './frage-details/frage-details.component';
import { HomeComponent } from './home/home.component';
// import { TeilPruefModusComponent } from './teil-pruef-modus/teil-pruef-modus.component';
import { VollPruefModusComponent } from './voll-pruef-modus/voll-pruef-modus.component';
import { RouterModule } from '@angular/router';
import { TpmPoolComponent } from './tpm-pool/tpm-pool.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    FrageListeComponent,
    FrageListItemComponent,
    FrageDetailsComponent,
    HomeComponent,
  
    // TeilPruefModusComponent,
    VollPruefModusComponent,
  
    TpmPoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
