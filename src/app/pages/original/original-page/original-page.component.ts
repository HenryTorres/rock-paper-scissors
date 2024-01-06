import { Component } from '@angular/core';
import { GameBoardOriginalComponent } from './../components/game-board-original/game-board-original.component';
import { ScoreBoardComponent } from './../../../shared/components/score-board/score-board.component';
import { OriginalModalComponent } from './../../original/components/original-modal/original-modal.component';
import { ResultBoardComponent } from '../components/result-board/result-board.component';
import { OriginalPicked } from '../interfaces/enum';

@Component({
  selector: 'original-page',
  standalone: true,
  imports: [ScoreBoardComponent, GameBoardOriginalComponent, OriginalModalComponent, ResultBoardComponent],
  templateUrl: './original-page.component.html',
  styleUrl: './original-page.component.css'
})
export class OriginalPageComponent {
  isModalOpen = false;
  computerTurn: boolean = false;
  orignalPicked: String = OriginalPicked.none;
  score: number = 0;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onComputerTurn(picked: String) {
    if (picked != OriginalPicked.none) {
      this.orignalPicked = picked;
      this.computerTurn = true;
    }
  }

  againPlay() {
    this.computerTurn = false;
  }

  scoreChange(score: number) {
    this.score = score;
  }
}
