import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatos:Array<any> = new Array();

  constructor(private contatosService: ContatosService) {

   }

  ngOnInit(): void {
      this.index()
  }

  index() {
    this.contatosService.index().subscribe(response => {
      this.contatos = response.contatos;
    }, err => {
       console.log('erro', err);
    })  
  }

  delete(id:string) {
      this.contatosService.destroy(id).subscribe(response => {
        console.log(response)
        window.location.href = 'http://localhost:4200/contatos'
      }, err => {
        console.log(err)
      })
  }

}
