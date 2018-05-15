import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SomeComponent } from './some.component';
import { AnotherComponent } from './another.component';
import { ChangeDetectionRootComponent } from './changedetection-root.component';

export const routes: Routes = [
    { path: '', redirectTo: '/changedetection', pathMatch: 'full' },
    { path: 'changedetection', component: ChangeDetectionRootComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [ChangeDetectionRootComponent],
    declarations: [
        SomeComponent,
        AnotherComponent,
        ChangeDetectionRootComponent
    ],
    providers: [],
})
export class ChangeDetectionModule {}
