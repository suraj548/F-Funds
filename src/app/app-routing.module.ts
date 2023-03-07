import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorsComponent } from './display-donors/donors/donors.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: DonorsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
