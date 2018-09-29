import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
* Generated class for the DetalhesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  times;
  informacoes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.informacoes = this.navParams.get('nome') + " - "+this.navParams.get("idade");
    this.times = [];
    this.buscarTimes();
  }

  buscarTimes(){
    this.http.get("http://200.17.98.122:8080/hellows/rest/service/listaTimesSP")
    .map(res => res.json())
    .subscribe(
      data => {
        this.times = data;
        console.log(this.times);
      },
      error =>{
        console.log(error);
      });
    }

    verTime(time){
      console.log("Nome: "+time.nome+" - Cidade: "+time.cidade);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad DetalhesPage');
    }

  }
