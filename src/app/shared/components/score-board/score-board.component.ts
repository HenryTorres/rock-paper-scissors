import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'score-board',
  standalone: true,
  imports: [],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.css'
})
export class ScoreBoardComponent implements OnInit {

  @Input() score: number = 0;

  ngOnInit(): void {
    const scoreTemp = localStorage.getItem('score');
    if (scoreTemp) {
      this.score = Number.parseInt(scoreTemp);
    }
  }


}
