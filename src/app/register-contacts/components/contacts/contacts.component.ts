import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogContactsComponent } from '../dialog-contacts/dialog-contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Contact } from '@app/register-contacts/model/contact';
import { ContactsService } from '@app/register-contacts/service/contacts.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogContactUpdateComponent } from '../dialog-contact-update/dialog-contact-update.component';
import { PipePhonePipe } from "../../pipes/pipe-phone.pipe";

@Component({
    selector: 'app-contacts',
    standalone: true,
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.css',
    imports: [
        MatTableModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        PipePhonePipe
    ]
})
export class ContactsComponent {
  displayedColumns: string[] = [
    'name',
    'surname',
    'email',
    'cellPhone',
    'select',
    'update',
  ];
  contact!: Contact;
  list: Contact[] = [];
  msg: any;
  dataSource = new MatTableDataSource<Contact>([]);

  constructor(public dialog: MatDialog, private service: ContactsService) {}

  ngOnInit(): void {
    this.listContacts();
  }

  addContact(): void {
    debugger;
    const dialogRef = this.dialog.open(DialogContactsComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Salvou' + result);
      this.contact = result;
      this.saveContact(this.contact);
      setTimeout(() => {
        this.listContacts();
      }, 200);
    });
  }

  updateContact(contact: any): void {
    const dialogRef = this.dialog.open(DialogContactUpdateComponent, {
      data: {
        id: contact.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.saveContact(result);
      setTimeout(() => {
        this.listContacts();
      }, 200);
    });
  }

  listContacts() {
    this.service.listContactsAll().subscribe((contact: []) => {
      this.dataSource.data = contact;
    });
    return 'List update';
  }

  saveContact(contact: any) {
    this.service.save(contact).subscribe((data) => (this.msg = data));
  }

}
