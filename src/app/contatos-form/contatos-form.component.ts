import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
  styleUrls: ['./contatos-form.component.css']
})
export class ContatosFormComponent implements OnInit {

  nome: string = '';
  telefone: string = '';
  email: string = '';
  url: string = 'http://localhost:3000/api/contato';
  method: string = 'post';
  contatoId: string = '';

  constructor(private contatoService: ContatosService, private route: ActivatedRoute) { 
      this.route.params.subscribe(params => this.contatoId = params['id'])
  }

  ngOnInit(): void {
    if (this.contatoId) {
      this.edit(this.contatoId)
      this.url = 'http://localhost:3000/api/contato/update/' + this.contatoId + '';
      this.method = 'put';
    }
  }

  submit()
  {
    if (this.method == 'post') {
      this.store();
    } else {
      this.update();
    }
  }

  store() {
    const data = {
      nome: this.nome,
      telefone : this.telefone,
      email : this.email
    }
    this.contatoService.submit(data, this.url).subscribe(response => {
      window.location.href = 'http://localhost:4200/contatos'
      console.log(response)
    }, err => {
       console.log('erro', err);
    })
  }

  update() {
    const data = {
      nome: this.nome,
      telefone : this.telefone,
      email : this.email
    }
    this.contatoService.update(data, this.url).subscribe(response => {
      console.log(response)
      window.location.href = 'http://localhost:4200/contatos'
    }, err => {
       console.log('erro', err);
    })
  }

  edit(id: any) {
      this.contatoService.edit(id).subscribe(response => {
      const {contato}:any = response;
        if (contato) {
        this.nome = contato.nome;
        this.telefone = contato.telefone;
        this.email = contato.email;
      }
    }, err => {
       console.log('erro', err);
    })  
  }
}
