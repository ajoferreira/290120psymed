import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

buscarNoticias() {
    return new Promise((resolve) => {
      this.http.get('http://localhost/psymed/api/list-news.php').subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          console.error(err)
        },
      )
    })
  }

buscarlocal() {
    return new Promise((resolve) => {
      this.http.get('http://localhost/psymed/api/list-places.php').subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          console.error(err)
        },
      )
    })
  }  

buscarUserGithub(user) {
  return new Promise((resolve) => {
    this.http.get('https://api.github.com/users/${user}').subscribe(
      (data) => {
        resolve(data)
      },
      (err) => {
        console.error(err)
      },
    )
  })
}


}
