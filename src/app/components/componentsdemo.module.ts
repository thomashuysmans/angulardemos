import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentDemoRootComponent } from './component-demo-root.components';
import { PersonListComponent } from './vote/person-list.component';
import { VoteComponent } from './vote/vote.component';

export const routes: Routes = [
  { path: 'componentdemo', component: ComponentDemoRootComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ComponentDemoRootComponent],
  declarations : [
      ComponentDemoRootComponent,
      PersonListComponent,
      VoteComponent
    ],
  providers: []
})
export class ComponentsDemoModule { }
