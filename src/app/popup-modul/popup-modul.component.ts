import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-modul',
  templateUrl: './popup-modul.component.html',
  styleUrls: ['./popup-modul.component.scss']
})
export class PopupModulComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { fact: string }) { }

}
