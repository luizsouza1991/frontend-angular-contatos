import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private http: HttpClient) { }

  index(): Observable<any> {
    return this.http.get('http://localhost:3000/api/contatos')
  }

  submit(data:any, url:string) {
    return this.http.post(url,data);
  }

  update(data:any, url:string) {
    return this.http.put(url,data);
  }

  edit(id:any)  {
    return this.http.get('http://localhost:3000/api/contato/' + id + '/edit');
  }

  destroy(id:string){
    return this.http.delete('http://localhost:3000/api/contato/'+id+'')
  }
}
