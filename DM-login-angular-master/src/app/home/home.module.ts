import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, MatInputModule
  ],
  providers: [
MatDatepickerModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
