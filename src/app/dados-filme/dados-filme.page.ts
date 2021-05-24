import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log('Filme Enviado', this.filme);
  }

}
