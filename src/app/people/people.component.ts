import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { PeopleComponentViewModel } from '../models/people.component.view-model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent implements OnInit {
  @Input() peopleData: PeopleComponentViewModel;

  constructor() {}

  ngOnInit(): void {}
}
