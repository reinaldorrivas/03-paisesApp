import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  public termino: string = '';
  public debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor): void => {
      this.onDebounce.emit(valor);
    });
  }

  public buscar(): void {
    this.onEnter.emit(this.termino);
  }

  public teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
