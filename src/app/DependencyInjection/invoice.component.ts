import { Component  } from '@angular/core';
import { InvoiceService } from './invoice.service';

@Component({
    selector: 'invoice-control',
    template: '<button (click)="getInvoice()">Get Invoice</button>'
})
export class InvoiceComponent {

    constructor(private invoiceService: InvoiceService) {}    

    getInvoice(){
        this.invoiceService.getInvoice();
    }
}