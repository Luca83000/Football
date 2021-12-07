import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EuropeComponent } from './europe/europe.component';
import { HomeComponent } from './home/home.component';
import { InternationalComponent } from './international/international.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recherche', component: SearchComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'international', component: InternationalComponent },
  { path: 'video', component: VideoComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
