import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      h3 {
        margin-top: 0.25rem;
      }

      li {
        cursor: pointer;
      }

      ul {
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        z-index: 1000;
      }
    `,
  ],
})
export class PorPaisComponent {
  public termino: string = '';
  public hayError: boolean = false;
  public mostrarSugerencias = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) {}

  public buscar(termino: string): void {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => (this.paises = paises),
      error: () => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }

  public sugerencias(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      error: () => (this.paisesSugeridos = []),
    });
  }
}
