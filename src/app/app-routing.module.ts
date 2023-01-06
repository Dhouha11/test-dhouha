import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: '', component:PostItemComponent, pathMatch:'full'},
  {path:'',component:PostListComponent},
{path:'',component:AuthentificationComponent},

  // {path: '**', redirectTo: 'appareils'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
