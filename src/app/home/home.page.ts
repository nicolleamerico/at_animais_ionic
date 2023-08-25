import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor(public alertController: AlertController) {}
  animal: string = '';

  cardEscondido: boolean = false;

  p2s: boolean = true;
  p2n: boolean = true;

  p3s: boolean = true;
  p3n: boolean = true;
  p3s2: boolean = true;
  p3n2: boolean = true;

  // p3s3: boolean = true;
  // p3n3: boolean = true;
  // p3s4: boolean = true;
  // p3n4: boolean = true;


  // handleRefresh(event: any) {
  //   setTimeout(() => {
  //     // Any calls to load data go here
  //     event.target.complete();
  //   }, 2000);
  // };


  atualizarPagina() {
    window.location.reload();
  }

  async exibiranimal() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Seu animal',
      subHeader: '',
      message: 'Seu animal é ' + this.animal,
      buttons: ['OK'],
    });
    await alert.present();
  }

  veranimal8() {
      this.animal = 'mosquito'
      this.exibiranimal();
  }
  veranimal7() {
      this.animal = 'beija-flor'
      this.exibiranimal();
  }
  veranimal6() {
    this.animal = 'gavião'
    this.exibiranimal();
}
veranimal5() {
  this.animal = 'arara'
  this.exibiranimal();
}
veranimal3() {
  this.animal = 'cachorro'
  this.exibiranimal();
}
veranimal4() {
  this.animal = 'cavalo'
  this.exibiranimal();
}
veranimal2() {
  this.animal = 'golfinho'
  this.exibiranimal();
}
veranimal1() {
  this.animal = 'baleia'
  this.exibiranimal();
}


  hides() {
    this.cardEscondido = true;
    this.p2s = false;
  }
  hiden() {
    this.cardEscondido = true;
    this.p2n = false;
  }


  hide2s() {
    this.p2s = true;
    this.p3s = false;
  }
  hide2n() {
    this.p2s = true;
    this.p3n = false;
  }
  hide2s2() {
    this.p2n = true;
    this.p3s2 = false;
  }
  hide2n2() {
    this.p2n = true;
    this.p3n2 = false;
  }


  hide3s() {
    this.p3s = true;
  }
  hide3n() {
    this.p3s = true;
  }
  hide3s2() {
    this.p3n = true;
  }
  hide3n2() {
    this.p3n = true;
  }

  hide3s3() {
    this.p3s2 = true;
  }
  hide3n3() {
    this.p3s2 = true;
  }
  hide3s4() {
    this.p3n2 = true;
  }
  hide3n4() {
    this.p3n2 = true;
  }

}
