import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { SimpleHTTPComponent } from './SimpleHttp/simplehttp.component';
import { SimpleHttpService } from './simpleHttp.service';

export const routes: Routes = [
    { path: 'backenddemo', component: SimpleHTTPComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [SimpleHTTPComponent],
    providers: [SimpleHttpService],
})
export class BackendModule { }
