import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { CardGamesComponent } from './components/card-games/card-games.component';
import * as jumbotronComponent from './components/jumbotron/jumbotron.component';
import { CardGalleryComponent } from './components/card-gallery/card-gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardPlansComponent } from './components/card-plans/card-plans.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { QuestionsComponent } from './components/questions/questions.component';
import { BlogComponent } from './components/blog/blog.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageAboutComponent } from './components/pages/page-about/page-about.component';
import { PageGalleryComponent } from './components/pages/page-gallery/page-gallery.component';
import { PagePricingComponent } from './components/pages/page-pricing/page-pricing.component';
import { PageGamesComponent } from './components/pages/page-games/page-games.component';
import { PageElementsComponent } from './components/pages/page-elements/page-elements.component';
import { PageBlogComponent } from './components/pages/page-blog/page-blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PageContactComponent } from './components/pages/page-contact/page-contact.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
