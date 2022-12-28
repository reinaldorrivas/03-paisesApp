import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  public buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => (this.paises = paises),
      error: (error) => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }

  public sugerencias(termino: string): void {
    this.hayError = false;
  }
}
