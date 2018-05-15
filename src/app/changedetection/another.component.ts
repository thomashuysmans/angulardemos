import { Component, Input, ChangeDetectionStrategy,
} from '@angular/core';

import { Profile } from './profile';

@Component({
  selector: 'another',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './another.component.html'
})
export class AnotherComponent {
 
  @Input() profile: Profile;
}