import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { PipesModule, routes as PipesRoutes } from './pipes/pipes.module';

import { AdminModule, routes as AdminRoutes } from './admin/admin.module';
import { FormsDemoModule, routes as FormRoutes  } from './forms/formsdemo.module';
import { ComponentsDemoModule, routes as ComponentsRoutes } from './components/componentsdemo.module';
import { BackendModule, routes as BackendRoutes } from './backend/backend.module';
import { RoutingDemoModule, routes as RoutingDemoRoutes } from './routing/routingdemo.module';
import { DiModule, routes as DiRoutes } from './DependencyInjection/di.module';
import { ChangeDetectionModule, routes as ChangeDetectionRoutes } from './changedetection/changedetection.module';

import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', children: AdminRoutes },
  { path: 'pipes', children: PipesRoutes },
  { path: 'forms', children: FormRoutes},
  { path: 'componentdemo', children: ComponentsRoutes },
  { path: 'backenddemo', children: BackendRoutes },
  { path: 'routingdemo', children: RoutingDemoRoutes },
  { path: 'didemo', children: DiRoutes },
  { path: 'changedetection', children: ChangeDetectionRoutes }
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
    ComponentsDemoModule,
    BackendModule,
    RoutingDemoModule,
    DiModule,
    ChangeDetectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
