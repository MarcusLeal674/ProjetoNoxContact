import { Contact } from './../../model/contact';
import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-contacts',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog-contacts.component.html',
  styleUrl: './dialog-contacts.component.css'
})
export class DialogContactsComponent {

contact: Contact = {
  _id: 0,
  name: '',
  surname: '',
  email: '',
  cellPhone: '',
  favorite: false
};

  constructor(
    public dialogRef: MatDialogRef<DialogContactsComponent>
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

}
