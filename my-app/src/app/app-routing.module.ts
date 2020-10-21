import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './modules/teste/teste.component';
import { Teste2Component } from './modules/teste2/teste2.component';
import { Teste3Component } from './modules/teste3/teste3.component';
import { Teste4Component } from './teste4/teste4.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: TesteComponent},
  {path:'pagina1', component: Teste2Component},
  {path:'pagina2', component: Teste3Component},
  {path:'pagina3', component: Teste4Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
