import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { BrowserModule } from '@angular/platform-browser';
import { Browser } from 'protractor';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    exports: [AdminComponent],
    declarations: [AdminComponent],
    providers: [],
})
export class AdminModule { }
