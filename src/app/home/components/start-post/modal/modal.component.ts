import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  onPost() {
    if (!this.form.valid) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const body = this.form.value['body'];
    this.modalController.dismiss(
      {
        post: {
          body,
          createdAt: new Date(),
        },
      },
      'post'
    );
  }

  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss(null, 'dismiss');
  }
}
