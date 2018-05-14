import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const routes: Routes = [
    { path: 'Admin', component: AdminComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [AdminComponent],
    declarations: [AdminComponent],
    providers: [],
})
export class AdminModule { }
