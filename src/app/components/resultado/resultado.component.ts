import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  imc: number;
  resultado: string;
  interpretacion

  constructor(private route: ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = '';
    this.imc = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.imc >= 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intenta hacer más ejercicio'  
    } else if(this.imc >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. Buen Trabajo!';
    } else {
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal por debajo de lo normal. Procura comer más'
    }
  }

}
