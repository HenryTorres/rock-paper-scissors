import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OriginalPicked, Result } from '../../interfaces/enum';
import { OriginalService } from '../../services/original.service';

@Component({
  selector: 'result-board',
  standalone: true,
  imports: [],
  templateUrl: './result-board.component.html',
  styleUrl: './result-board.component.css'
})
export class ResultBoardComponent implements OnInit {
  result_done: boolean = false;
  picked_cpu_done: boolean = false;

  @Input() picked: String = OriginalPicked.none;
  picked_cpu: String = OriginalPicked.none;

  resultGame: String = '';
  score: number = 0;

  @Output() onAgainPlay = new EventEmitter<void>();
  @Output() onScoreChange = new EventEmitter<number>();

  constructor(private readonly service: OriginalService) { }

  ngOnInit(): void {
    this.service.generate_piece_cpu().subscribe(
      (picked_cpu) => {
        this.picked_cpu = picked_cpu;
        this.picked_cpu_done = true;

        setTimeout(() => {
          this.service.resultGame(this.picked, this.picked_cpu).subscribe(
            result => {
              this.result_done = true;
              if (result == Result.you_win) {
                this.resultGame = 'YOU WIN';
                this.score = this.service.scoreChange(Result.you_win);
                this.onScoreChange.emit(this.score);
              } else if (result == Result.you_lose) {
                this.resultGame = 'YOU LOSE';
                this.score = this.service.scoreChange(Result.you_lose);
                this.onScoreChange.emit(this.score);
              } else {
                this.resultGame = 'DRAW';
              }
            }
          )
        }, 1000);
      }
    )
  }

  againPlay() {
    this.onAgainPlay.emit();
  }

}
