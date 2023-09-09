import { Component, OnInit } from '@angular/core';
import { MathApiService } from 'src/service/math-api.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})

export class MathComponent implements OnInit {
  randomNumbers: number[] = [];
  factToShow: string = '';
  inputNumber: number | null = null;

  constructor(
    private mathApiService: MathApiService,
  ) { }

  closePopup() {
    this.factToShow = '';
  }

  onGetButtonClick() {
    if (this.inputNumber !== null) {
      this.clickMath(this.inputNumber);
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      const randomNumber = Math.floor(Math.random() * 120) + 1;
      this.randomNumbers.push(randomNumber)
    }
    console.log(this.randomNumbers)
  }

  clickMath(number: number) {
    this.mathApiService.getMathFact(number).subscribe({
      next: (fact: string) => {
        console.log(`Вы нажали на число: ${number}`);
        console.log(`Факт: ${fact}`);
        this.factToShow = fact
      },
      error: (error) => {
        console.error('Произошла ошибка:', error);
      }
    });
  }
}
