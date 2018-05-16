
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contactFilter',
    pure: true
})
export class ContactFilterPipe implements PipeTransform {
    transform(value:string): any {
        return "Hello " + value + "!";
    }
}