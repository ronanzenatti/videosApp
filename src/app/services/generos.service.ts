import { map, catchError } from 'rxjs/operators';
import { IGenero, IListaGenero } from './../models/IGenero.model';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  lingua = 'pt-BR';

  private apiURL = `https://api.themoviedb.org/3`;
  private key = '?api_key=84959203cd504bcbac6489c94f6146bb';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  buscarGeneros(): Observable<IListaGenero> {
    const url = `${this.apiURL}/genre/movie/list${this.key}&language=${this.lingua}`;
    console.log('URL: ', url);
    return this.http.get<IListaGenero>(url).pipe(
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
