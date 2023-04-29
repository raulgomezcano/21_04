import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotGitComponent } from './not-git/not-git.component';
import { NotAngularComponent } from './not-angular/not-angular.component';
import { NotBootstrapComponent } from './not-bootstrap/not-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PrincipalComponent,
    ContactoComponent,
    NotGitComponent,
    NotAngularComponent,
    NotBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
