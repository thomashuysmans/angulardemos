import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { PipesModule, routes as PipesRoutes, PipesComponent } from './pipes/pipes.module';
import { AdminModule, routes as AdminRoutes, AdminComponent } from './admin/admin.module';
 import { FormsDemoModule, routes as FormRoutes, FormsHomeComponent,  } from './forms/formsdemo.module';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, children: AdminRoutes },
  { path: 'pipes', component: PipesComponent, children: PipesRoutes },
  { path: 'forms', component: FormsHomeComponent, children: FormRoutes}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PipesModule,
    AdminModule,
    FormsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
