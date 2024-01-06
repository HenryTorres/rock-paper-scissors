import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { OriginalPicked, Result } from '../interfaces/enum';

@Injectable({
  providedIn: 'root'
})
export class OriginalService {

  constructor() { }

  generate_piece_cpu(): Observable<String> {
    let pieces: String[] = [OriginalPicked.rock, OriginalPicked.paper, OriginalPicked.scissors];
    const choose: number = Math.floor(Math.random() * 3);
    return of(pieces[choose]).pipe(delay(1500));
  }

  resultGame(picked_you: String, picked_cpu: String): Observable<number> {

    if (picked_you === picked_cpu) {
      return of(Result.draw);
    }

    if (picked_you === OriginalPicked.rock) {
      if (picked_cpu === OriginalPicked.scissors) {
        return of(Result.you_win);
      } else {
        return of(Result.you_lose);
      }
    }

    if (picked_you === OriginalPicked.paper) {
      if (picked_cpu === OriginalPicked.rock) {
        return of(Result.you_win);
      } else {
        return of(Result.you_lose);
      }
    }

    if (picked_you === OriginalPicked.scissors) {
      if (picked_cpu === OriginalPicked.paper) {
        return of(Result.you_win);
      } else {
        return of(Result.you_lose);
      }
    }

    return of(-1);
  }

  scoreChange(result: number): number {
    const scoreTemp = localStorage.getItem('score');
    let score: number = 0;

    if (scoreTemp) {
      score = Number.parseInt(scoreTemp);

      if (result == Result.you_win) {
        score++;
      }

      if (result == Result.you_lose) {
        score = 0;
      }
      localStorage.setItem('score', score.toString());
    }

    return score;
  }


}
