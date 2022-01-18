import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutUsComponent} from './about-us/about-us.component'
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path : '',  component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'about', component : AboutUsComponent},
  { path : 'gallery' , component : GalleryComponent},
  { path : 'contact' , component : ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
