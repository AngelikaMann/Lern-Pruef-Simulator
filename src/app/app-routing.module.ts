
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { FrageDetailsComponent } from './frage-details/frage-details.component';
import { FrageListItemComponent } from './frage-list-item/frage-list-item.component';
import { FrageListeComponent } from './frage-liste/frage-liste.component';
import { HomeComponent } from './home/home.component';
import { VollPruefModusComponent } from './voll-pruef-modus/voll-pruef-modus.component';
import { TpmPoolComponent} from './tpm-pool/tpm-pool.component';

const routes: Routes = [

{
  path: '',  redirectTo: 'home',  pathMatch: 'full'},
{
  path: 'home',    component: HomeComponent},
{
  path: 'fragen',    component: FrageListeComponent},
{
  path: 'fragen/:id',  component: FrageDetailsComponent},
{
  path: 'vpmodus',  component: VollPruefModusComponent},
{
  path: 'tpmpool',  component: TpmPoolComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }




