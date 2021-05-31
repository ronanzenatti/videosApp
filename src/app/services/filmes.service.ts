import { IListaFilmes } from './../models/IListaFilmes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = `https://api.themoviedb.org/3`;
  private key = '?api_key=84959203cd504bcbac6489c94f6146bb';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}/search/movie/${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    console.log('URL: ', url);
    return this.http.get<IListaFilmes>(url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  async exibeErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao acessar a API!',
      color: 'danger',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
