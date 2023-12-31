import { Component, OnInit } from '@angular/core';
import { NumberApiService } from '../service/number-api.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {
  randomNumbers: number[] = [];
  factToShow: string = '';
  inputNumber: number | null = null;

  constructor(
    private numberApiService: NumberApiService,
  ) { }

  closePopup() {
    this.factToShow = '';
  }

  onGetButtonClick() {
    if (this.inputNumber !== null) {
      this.clickNumber(this.inputNumber);
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      const randomNumber = Math.floor(Math.random() * 120) + 1;
      this.randomNumbers.push(randomNumber)
    }
    console.log(this.randomNumbers)
  }

  clickNumber(number: number) {
    this.numberApiService.getNumberFact(number).subscribe({
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
