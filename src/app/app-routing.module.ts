import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:"", component:PrincipalComponent},
  {path:"blog", component:BlogComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
