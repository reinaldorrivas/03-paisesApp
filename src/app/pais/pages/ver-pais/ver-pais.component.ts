import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
      img {
        width: 150px;
      }

      h3 {
        margin-top: 0.25rem;
      }
    `,
  ],
})
export class VerPaisComponent implements OnInit {
  public pais: Country[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarCodigo(id)),
        tap(console.log)
      )
      .subscribe((resp) => (this.pais = resp));
  }
}
