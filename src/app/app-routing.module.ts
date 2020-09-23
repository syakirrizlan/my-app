import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { SearchComponent} from './search/search.component';

const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'About',component:AboutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }