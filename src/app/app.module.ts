import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {JournalService} from './components/journal/journal-service.service';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { JournalHomeComponent } from './components/journal/journal-home/journal-home.component';
import { JournalEntryComponent } from './components/journal/journal-entry/journal-entry.component';
import { JournalNewComponent } from './components/journal/journal-new/journal-new.component';
import { JournalListComponent } from './components/journal/journal-list/journal-list.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    ShopHomeComponent,
    ShopHomeComponent,
    JournalHomeComponent,
    JournalEntryComponent,
    JournalNewComponent,
    JournalListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
