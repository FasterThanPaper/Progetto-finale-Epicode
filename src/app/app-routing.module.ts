import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './creator/creator.component';
import { DetailsComponent } from './details/details.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  {
    path: 'reader',
    component: ReaderComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: 'creator',
    component: CreatorComponent
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
