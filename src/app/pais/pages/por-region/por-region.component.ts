import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  public regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public regionActiva: string = '';
  public paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  public activarRegion(region: string): void {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionActiva).subscribe({
      next: (paises) => (this.paises = paises),
      error: (error) => {
        this.paises = [];
      },
    });
  }
}
