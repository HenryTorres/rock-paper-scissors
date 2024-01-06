import { Component, EventEmitter, Output } from '@angular/core';
import { OriginalPicked } from '../../interfaces/enum';

@Component({
  selector: 'game-board-original',
  standalone: true,
  imports: [],
  templateUrl: './game-board-original.component.html',
  styleUrl: './game-board-original.component.css'
})
export class GameBoardOriginalComponent {

  @Output() onComputerTurn = new EventEmitter<String>;

  rockSelected() {
    this.onComputerTurn.emit(OriginalPicked.rock);
  }

  paperSelected() {
    this.onComputerTurn.emit(OriginalPicked.paper);
  }

  scissorsSelected() {
    this.onComputerTurn.emit(OriginalPicked.scissors);
  }

}
