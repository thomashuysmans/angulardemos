import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { RegistrationComponent } from './registration/registration.component';
import { RegistrationReactiveComponent } from './registration-reactive/registration-reactive.component';

import { FormsHomeComponent } from './forms-home.component';

export const routes: Routes = [
    { path: 'forms', component: FormsHomeComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [FormsHomeComponent],
    declarations: [
        FormsHomeComponent,
        RegistrationComponent,
        RegistrationReactiveComponent
    ],
    providers: [],
})
export class FormsDemoModule { }
