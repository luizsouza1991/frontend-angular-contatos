import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContatosService } from '../app/contatos.service';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ContatosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContatosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
