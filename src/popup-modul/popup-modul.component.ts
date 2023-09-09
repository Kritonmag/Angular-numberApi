import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-modul',
  templateUrl: './popup-modul.component.html',
  styleUrls: ['./popup-modul.component.scss']
})
export class PopupModulComponent {

  @Input() fact!: string
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }

}
