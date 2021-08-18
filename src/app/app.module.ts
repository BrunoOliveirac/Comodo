import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/componentes/navbar/navbar.component';
import { HomeComponent } from './components/componentes/home/home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/componentes/about/about.component';
import { CardGamesComponent } from './components/componentes/card-games/card-games.component';
import * as jumbotronComponent from './components/componentes/jumbotron/jumbotron.component';
import { CardGalleryComponent } from './components/componentes/card-gallery/card-gallery.component';
import { CarouselComponent } from './components/componentes/carousel/carousel.component';
import { CardPlansComponent } from './components/componentes/card-plans/card-plans.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { QuestionsComponent } from './components/componentes/questions/questions.component';
import { BlogComponent } from './components/componentes/blog/blog.component';
import { SubscribeComponent } from './components/componentes/subscribe/subscribe.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { PageAboutComponent } from './components/pages/page-about/page-about.component';
import { PageGalleryComponent } from './components/pages/page-gallery/page-gallery.component';
import { PagePricingComponent } from './components/pages/page-pricing/page-pricing.component';
import { PageGamesComponent } from './components/pages/page-games/page-games.component';
import { PageElementsComponent } from './components/pages/page-elements/page-elements.component';
import { PageBlogComponent } from './components/pages/page-blog/page-blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PageContactComponent } from './components/pages/page-contact/page-contact.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AuthService } from './components/pages/page-login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './components/guards/auth-guard';
import { PageRegisterComponent } from './components/pages/page-register/page-register.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CardGamesComponent,
    jumbotronComponent.JumbotronComponent,
    CardGalleryComponent,
    CarouselComponent,
    CardPlansComponent,
    QuestionsComponent,
    BlogComponent,
    SubscribeComponent,
    FooterComponent,
    PageAboutComponent,
    PageGalleryComponent,
    PagePricingComponent,
    PageGamesComponent,
    PageElementsComponent,
    PageBlogComponent,
    BlogDetailsComponent,
    PageContactComponent,
    PageHomeComponent,
    PageLoginComponent,
    PageRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    IvyCarouselModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
