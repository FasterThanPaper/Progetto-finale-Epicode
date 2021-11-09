import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  {
    path: 'reader',
    component: ReaderComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  { path: '',
  pathMatch: 'full',
  redirectTo: 'reader'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
