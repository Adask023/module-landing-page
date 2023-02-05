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
import { CityComponent } from './main-page/city/city.component';
import { CityPopupComponent } from './shared/city-popup/city-popup.component';
import { httpService } from './services/http-req.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';

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
    CityComponent,
    CityPopupComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  providers: [httpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
