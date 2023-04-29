import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotGitComponent } from './not-git/not-git.component';
import { NotAngularComponent } from './not-angular/not-angular.component';
import { NotBootstrapComponent } from './not-bootstrap/not-bootstrap.component';

const routes: Routes = [
  {path:"", component:PrincipalComponent},
  {path:"blog", component:BlogComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"noticia_git", component:NotGitComponent},
  {path:"noticia_angular", component:NotAngularComponent},
  {path:"noticia_bootstrap", component:NotBootstrapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
