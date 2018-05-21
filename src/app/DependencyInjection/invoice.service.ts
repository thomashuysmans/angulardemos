
import { Injectable } from '@angular/core';

@Injectable()
export class InvoiceService {
    getInvoice(): void {
        console.log("Returning invoice 1");
    }
}