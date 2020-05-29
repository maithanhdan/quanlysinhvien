import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,MaterialModule,AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
