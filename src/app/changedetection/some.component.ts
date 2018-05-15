import { Component, Input } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'some',
  templateUrl: './some.component.html'
})
export class SomeComponent {
  @Input() profile: Profile;
}
