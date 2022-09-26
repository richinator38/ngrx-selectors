import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Film } from '../models';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
  @Input() films: Film[];

  constructor() {}

  ngOnInit(): void {}
}
