import { Component, OnInit } from '@angular/core';
import { NumberApiService } from '../service/number-api.service';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {
  randomNumbers: number[] = [];

  constructor(
    private numberApiService: NumberApiService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      this.randomNumbers.push(randomNumber)
    }
    console.log(this.randomNumbers)
  }

  clickNumber(number: number) {
    this.numberApiService.getNumberFact(number).subscribe({
      next: (fact: string) => {
        console.log(`Вы нажали на число: ${number}`);
        console.log(`Факт: ${fact}`);
        this.popupService.openPopupWithData(fact)
      },
      error: (error) => {
        console.error('Произошла ошибка:', error);
      }
    });
  }
}
