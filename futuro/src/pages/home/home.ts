import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhesPage } from '../detalhes/detalhes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  chamarPaginaDetalhes(){
    this.navCtrl.push(DetalhesPage, {idade:20,nome:'José'});

  }

}
