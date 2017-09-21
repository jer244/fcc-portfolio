import { Component, Input } from '@angular/core';

@Component({
  selector: 'fp-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent  {
  @Input() cellState: string;
}
