import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Pokemon } from '../../modelos/pokemon.model';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.html',
  styleUrls: ['./tarjeta-pokemon.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule]
})
export class TarjetaPokemonComponent {
  // Recibe los datos del Pokémon desde el componente padre
  @Input() pokemon!: Pokemon;

  // Devuelve el color apropiado para cada tipo de Pokémon
  obtenerColorTipo(tipo: string): string {
    const colores: { [key: string]: string } = {
      'Normal': 'gray',
      'Fire': 'red',
      'Water': 'blue',
      'Electric': 'gold',
      'Grass': 'green',
      'Ice': 'lightblue',
      'Fighting': 'darkred',
      'Poison': 'purple',
      'Ground': 'brown',
      'Flying': 'skyblue',
      'Psychic': 'pink',
      'Bug': 'limegreen',
      'Rock': 'tan',
      'Ghost': 'indigo',
      'Dragon': 'navy',
      'Dark': 'black',
      'Steel': 'silver',
      'Fairy': 'hotpink'
    };
    return colores[tipo] || 'gray';
  }

  // Convierte el valor de estadística a porcentaje para la barra
  obtenerPorcentajeEstadistica(valor: number): number {
    // El máximo en Pokémon es 255, lo convertimos a porcentaje
    return Math.min((valor / 255) * 100, 100);
  }

  // Devuelve un color basado en qué tan buena es la estadística
  obtenerColorEstadistica(valor: number): string {
    if (valor >= 100) return 'green';    // Excelente
    if (valor >= 70) return 'orange';    // Buena
    if (valor >= 40) return 'yellow';    // Regular
    return 'red';                        // Baja
  }
}