import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      body: [''],
    });
  }

  onPost(body) {
    this.modalDismiss(body);
  }
  modalDismiss(body) {
    this.modalController.dismiss(
      {
        // data
        post: {
          body,
          createAt: new Date(),
        },
      },
      // role
      'post'
    );
  }
}
