import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePhonePipe } from '../pipes/pipe-phone.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipePhonePipe
  ],
  exports: [
    PipePhonePipe
  ]
})
export class ContactModuleModule { }
