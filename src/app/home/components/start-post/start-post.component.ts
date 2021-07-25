import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
    });
    await modal.present();
    const { data, role } = await modal.onDidDismiss();
    if (data) {
      console.log('data exists');
    }
    console.log('data: ', data, 'role: ', role); // data is when modal is dissmissed that containing data
  }
}
