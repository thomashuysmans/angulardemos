import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { PipesModule, routes as PipesRoutes } from './pipes/pipes.module';
import { AdminModule, routes as AdminRoutes } from './admin/admin.module';
import { FormsDemoModule, routes as FormRoutes  } from './forms/formsdemo.module';
import { ComponentsDemoModule, routes as ComponentsRoutes } from './components/componentsdemo.module';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', children: AdminRoutes },
  { path: 'pipes', children: PipesRoutes },
  { path: 'forms', children: FormRoutes},
  { path: 'componentdemo', children: ComponentsRoutes }
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
    FormsDemoModule,
    ComponentsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
