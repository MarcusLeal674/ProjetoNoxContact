import { Contact } from './../../model/contact';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactsService } from '@app/register-contacts/service/contacts.service';

@Component({
  selector: 'app-dialog-contact-update',
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
  templateUrl: './dialog-contact-update.component.html',
  styleUrl: './dialog-contact-update.component.css',
})
export class DialogContactUpdateComponent implements OnInit {
  id: any;

  contact: Contact = {
    _id: 0,
    name: '',
    surname: '',
    email: '',
    cellPhone: '',
    favorite: false
  };

  constructor(
    private service: ContactsService,
    public dialogRef: MatDialogRef<DialogContactUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.findContatc();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  findContatc() {
    this.service.findContactById(this.id).subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }
}
