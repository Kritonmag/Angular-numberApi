import { Component, OnInit } from '@angular/core';
import { DateApiService } from 'src/service/date-api.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  randomDates: Date[] = [];
  factToShow: string = '';
  inputDate: string | null = null;

  constructor(
    private dateApiService: DateApiService
  ) { }

  closePopup() {
    this.factToShow = '';
  }

  onGetButtonClick() {
    if (this.inputDate !== null) {
      const dateParts = this.inputDate.split('-');
      const month = parseInt(dateParts[1], 10);
      const day = parseInt(dateParts[2], 10);

      this.dateApiService.getDateFact(month, day).subscribe({
        next: (fact: string) => {
          console.log(`Вы нажали на число: ${month} ${day}`);
          console.log(`Факт: ${fact}`);
          this.factToShow = fact
        },
        error: (error) => {
          console.error('Произошла ошибка:', error);
        }
      });
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      const month = Math.floor(Math.random() * 12) + 1;
      const day = Math.floor(Math.random() * 31) + 1;
      const date = new Date(0, month - 1, day);
      this.randomDates.push(date);
    }
  }

  clickDate(date: Date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    this.dateApiService.getDateFact(month, day).subscribe({
      next: (fact: string) => {
        console.log(`Вы нажали на число: ${month} ${day}`);
        console.log(`Факт: ${fact}`);
        this.factToShow = fact
      },
      error: (error) => {
        console.error('Произошла ошибка:', error);
      }
    });
  }
}
