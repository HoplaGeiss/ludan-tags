import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TagsModule } from 'projects/ngx-ludan-tags/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, TagsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
