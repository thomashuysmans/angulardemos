import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceService } from './invoice.service';
import { DiRootComponent } from './di-root.component';
import { InvoiceComponent } from './invoice.component';
import { HomeWithDiComponent } from './homeWithDi.component';
import { HomeComponent } from './home.component';
import { MyService } from './myService';
import { API_URL } from './contants';


export const routes: Routes = [
    { path: '', redirectTo: '/diroot', pathMatch: 'full' },
    { path: 'diroot', component: DiRootComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [DiRootComponent, InvoiceComponent, HomeWithDiComponent, HomeComponent],
    providers: [
        { provide: MyService, useClass: MyService },
        { provide: API_URL, useValue: 'http://www.google.com'  }, // providing a constant
        { provide: 'MyApiUrl', useValue: 'http://www.google.com'  }, // providing a constant
        { provide: InvoiceService, useFactory: (): InvoiceService => new InvoiceService()  }, // Factory
    ],
})
export class DiModule { }
