import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DeprecatedI18NPipesModule } from '@angular/common';

// import localeFr from '@angular/common/locales/fr';
// import localeBe from '@angular/common/locales/be';

// Reminder: if your using pipes you need to import this module
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PipesComponent } from './pipes.component';
import { ContactFilterPipe } from './contact-filter.pipe';
import { ContactsAsyncPipe } from './contacts-async.pipe';

export const routes: Routes = [
    {
        path: 'pipes', component: PipesComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        CommonModule,
        DeprecatedI18NPipesModule
    ],
    exports: [PipesComponent],
    declarations: [PipesComponent, ContactFilterPipe, ContactsAsyncPipe],
    providers: [
        {
           // provide: LOCALE_ID, useValue: "en-US"
           provide: LOCALE_ID, useValue: 'nl-BE'
       }
     ],
})
export class PipesModule { }
