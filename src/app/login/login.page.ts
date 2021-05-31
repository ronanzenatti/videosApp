import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;

  constructor(private route: Router, public toastController: ToastController) {}

  ngOnInit() {}

  login() {
    if (this.email === 'admin' && this.senha === 'admin') {
      this.route.navigateByUrl('/tabs/tab1');
      this.exibeMsg('success', 'Seja bem vindo!');
    } else {
      this.exibeMsg('danger', 'Usuário / Senha inválidos!');
    }
  }

  async exibeMsg(cor: string, texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
