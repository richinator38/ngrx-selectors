import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Starship } from '../../models';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipsComponent implements OnInit, OnChanges {
  @Input() ships: Starship[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'StarshipsComponent ships changed!',
      changes['ships'].currentValue,
      changes['ships'].firstChange
    );
  }
}
