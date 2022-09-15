import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { BannerComponent } from './main-page/banner/banner.component';
import { PostsComponent } from './main-page/posts/posts.component';

import { HelpCardsComponent } from './main-page/help-cards/help-cards.component';
import { CardModule } from 'primeng/card';
import { DividerComponent } from './shared/divider/divider.component';
import { ShopComponent } from './main-page/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    BannerComponent,
    PostsComponent,
    HelpCardsComponent,
    DividerComponent,
    ShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
