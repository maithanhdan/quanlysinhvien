import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AsidenavComponent } from './asidenav/asidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [AdminComponent, AsidenavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,MaterialModule,AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
