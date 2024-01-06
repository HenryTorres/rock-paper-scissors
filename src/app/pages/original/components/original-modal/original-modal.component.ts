import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'original-modal',
  standalone: true,
  imports: [],
  templateUrl: './original-modal.component.html',
  styleUrl: './original-modal.component.css'
})
export class OriginalModalComponent {

  @Output() onCloseModal = new EventEmitter<void>;

  closeModal() {
    this.onCloseModal.emit();
  }

}
