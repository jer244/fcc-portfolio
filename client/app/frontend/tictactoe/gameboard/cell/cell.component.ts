import { Component, Input } from '@angular/core';

@Component({
  selector: 'fp-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent  {

  constructor() { }

  ngOnInit() {
  }
  @Input() cellState: string;

}
