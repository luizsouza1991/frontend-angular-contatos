import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';

const routes: Routes = [
  {
    path: 'contatos',
    component: ContatoComponent
  },
  {
    path: 'contato/create',
    component: ContatosFormComponent
  },
  {
    path: 'contato/:id/edit',
    component: ContatosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
