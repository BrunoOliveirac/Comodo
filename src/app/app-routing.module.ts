import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PageAboutComponent } from './components/pages/page-about/page-about.component';
import { PageBlogComponent } from './components/pages/page-blog/page-blog.component';
import { PageContactComponent } from './components/pages/page-contact/page-contact.component';
import { PageElementsComponent } from './components/pages/page-elements/page-elements.component';
import { PageGalleryComponent } from './components/pages/page-gallery/page-gallery.component';
import { PageGamesComponent } from './components/pages/page-games/page-games.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PagePricingComponent } from './components/pages/page-pricing/page-pricing.component';

const routes: Routes = [

  {path: '', component: PageHomeComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'about', component: PageAboutComponent},
  {path: 'gallery', component: PageGalleryComponent},
   {path: 'pages', children: [
     {path: 'pricing', component: PagePricingComponent},
     {path: 'games', component: PageGamesComponent},
     {path: 'elements', component: PageElementsComponent},
   ]},
   {path: 'blog', children: [
     {path: 'about', component: PageBlogComponent},
     {path: 'details', component: BlogDetailsComponent},
   ]},
   {path: 'contact', component: PageContactComponent},
]; 

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes
    // {scrollPositionRestoration: 'enabled'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
