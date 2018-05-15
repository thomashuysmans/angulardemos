import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { RoutingRootComponent } from './routing-root.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product.component';
import { AboutComponent } from './about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'root', pathMatch: 'full' },
    { path: 'root', component: RoutingRootComponent },
    { path: 'root/home', component: HomeComponent },
    { path: 'root/contact', component: ContactComponent },
    { path: 'root/product/:id', component: ProductComponent },
    { path: 'root/about', component: AboutComponent }
];

//'artist/:artistId'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    exports: [RoutingRootComponent],
    declarations: [
        RoutingRootComponent,
        ContactComponent,
        HomeComponent,
        ProductComponent,
        AboutComponent
    ],
    providers: [],
})
export class RoutingDemoModule { }
