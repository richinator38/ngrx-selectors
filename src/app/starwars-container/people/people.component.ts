import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { PeopleComponentViewModel } from '../../models/people.component.view-model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent implements OnInit, OnChanges {
  @Input() peopleData: PeopleComponentViewModel;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'People component peopleData changed!',
      changes['peopleData'].currentValue,
      changes['peopleData'].firstChange
    );
  }
}
