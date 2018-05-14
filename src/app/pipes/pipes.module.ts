import { NgModule } from '@angular/core';

// Reminder: if your using pipes you need to import this module
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';
import { PipesComponent } from './pipes.component';

export const routes: Routes = [
    {
        path: 'pipes', component: PipesComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [PipesComponent],
    declarations: [PipesComponent],
    providers: [],
})
export class PipesModule { }
