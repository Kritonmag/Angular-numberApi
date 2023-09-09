import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModulComponent } from '../popup-modul/popup-modul.component';

@Injectable({
  providedIn: 'root',
})

export class PopupService {
  constructor(public dialog: MatDialog) { }

  openPopupWithData(data: string): void {
    const dialogRef = this.dialog.open(PopupModulComponent, {
      data: { fact: data }
    })
  }
}
