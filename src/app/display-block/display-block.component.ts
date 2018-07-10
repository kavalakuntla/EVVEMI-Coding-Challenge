import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-block',
  templateUrl: './display-block.component.html',
  styleUrls: ['./display-block.component.css'],
})
export class DisplayBlockComponent {

  private blocks: String[][] = [];
  private isBlack: Boolean = true;

  @Input() blockCount = 25;
  @Input() blocksPerRow = 4;

  constructor() {
    const remainder: number = this.blockCount % this.blocksPerRow;
    const quotient: number =  Math.floor(this.blockCount / this.blocksPerRow);
    // Intializing the 2D array to store the blocks
    for (let i = 0; i < quotient; i++) {
        this.blocks[i] = [];
        for (let j = 0; j < this.blocksPerRow; j++) {
            this.blocks[i][j] = 'X';
        }
    }
    // If remainder is not zero. The last row contains less blocks. Intializing the last row fo the Array
    if (remainder !== 0) {
      this.blocks[quotient] = [];
      for (let i = 0; i < remainder; i++) {
        this.blocks[quotient][i] = 'X';
      }
    }
  }

  toggleColor(event) {
     event.srcElement.style.backgroundColor = '#333';
  }
}

