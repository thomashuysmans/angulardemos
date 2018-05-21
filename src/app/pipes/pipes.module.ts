import { NgModule, LOCALE_ID } from '@angular/core';
// import { CommonModule, DeprecatedI18NPipesModule } from '@angular/common';

import localeBe from '@angular/common/locales/be';
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
        // CommonModule,
        // DeprecatedI18NPipesModule
    ],
    exports: [PipesComponent],
    declarations: [PipesComponent, ContactFilterPipe, ContactsAsyncPipe],
    providers: [
    //     {
    //       provide: LOCALE_ID, useValue: 'nl-BE'
    //    }
     ],
})
export class PipesModule { }
