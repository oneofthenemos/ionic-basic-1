import { HttpService } from './HTTP/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [HttpService],
})
export class CoreModule {}
