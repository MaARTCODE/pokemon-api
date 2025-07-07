import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonService } from '../../servicios/pokemon.service';
import { Pokemon } from '../../modelos/pokemon.model';
import { TarjetaPokemonComponent } from '../tarjeta-pokemon/tarjeta-pokemon';

@Component({
  selector: 'app-busqueda-pokemon',
  templateUrl: './busqueda-pokemon.html',
  styleUrls: ['./busqueda-pokemon.css'],
  standalone: true,
  imports: [
    CommonModule,           // Para usar *ngFor *ngIf etc
    FormsModule,           // Para usar ngModel en el input
    MatInputModule,        // Campos de texto bonitos de Material
    MatButtonModule,       // Botones bonitos de Material
    MatIconModule,         // Iconos de Material como la lupa
    MatFormFieldModule,    // Contenedores de campos de Material
    MatProgressSpinnerModule, // Spinner de carga giratorio
    TarjetaPokemonComponent   // Nuestro propio componente de tarjeta
  ]
})
export class BusquedaPokemonComponent implements OnInit {
  // Variables que controlan el estado de la aplicacion
  nombrePokemon: string = '';        // Lo que escribe el usuario en el input
  pokemon: Pokemon | null = null;    // Datos del pokemon encontrado o null si no hay
  cargando: boolean = false;         // Si esta buscando actualmente
  error: string = '';               // Mensaje de error si algo sale mal
  busquedasRecientes: string[] = []; // Array con el historial de busqeudas

  // Inyeccion del servicio para hacer peticiones HTTP
  // Angular se encarga de crear la instancia automaticamente
  constructor(private pokemonService: PokemonService) {}

  // Se ejecuta cuando el componente se inicializa
  // Es como el "onload" de la pagina pero para componentes
  ngOnInit(): void {
    // Cargamos las busqeudas recientes que estan guardadas
    this.cargarBusquedasRecientes();
  }

  // Funcion principal que busca el pokemon
  // Se ejecuta cuando el usuario hace click en buscar o presiona Enter
  buscarPokemon(): void {
    // Primero validamos que haya texto y no solo espacios
    if (!this.nombrePokemon.trim()) {
      this.error = 'Por favor, ingresa el nombre de un Pokemon';
      return; // Salimos de la funcion si no hay texto
    }

    // Activamos el estado de carga para mostrar el spinner
    this.cargando = true;
    // Limpiamos errores anteriores
    this.error = '';
    // Limpiamos el pokemon anterior
    this.pokemon = null;

    // Hacemos la peticion HTTP usando el servicio
    // subscribe nos permite "escuchar" la respuesta
    this.pokemonService.obtenerPokemon(this.nombrePokemon).subscribe({
      next: (pokemon: Pokemon) => {
        // Si todo sale bien llegamos aqui
        this.pokemon = pokemon; // Guardamos los datos del pokemon
        // Guardamos esta busqeuda en el historial
        this.pokemonService.guardarBusquedaReciente(this.nombrePokemon);
        // Actualizamos la lista de busqeudas recientes
        this.cargarBusquedasRecientes();
        // Desactivamos el estado de carga
        this.cargando = false;
      },
      error: (error: string) => {
        // Si hay algun error llegamos aqui
        this.error = error; // Mostramos el mensaje de error
        this.cargando = false; // Desactivamos el estado de carga
      }
    });
  }

  // Buscar un pokemon del historial de busqeudas recientes
  // Se ejecuta cuando el usuario hace click en una de las "pastillas"
  buscarPokemonReciente(nombre: string): void {
    // Ponemos el nombre en el input
    this.nombrePokemon = nombre;
    // Ejecutamos la busqeuda como si hubiera hecho click en buscar
    this.buscarPokemon();
  }

  // Cargar busqeudas guardadas en localStorage
  // Esto es privado porque solo lo usamos internamente
  private cargarBusquedasRecientes(): void {
    // Obtenemos las busqeudas del servicio y las asignamos a la variable
    this.busquedasRecientes = this.pokemonService.obtenerBusquedasRecientes();
  }

  // Limpiar el formulario y volver al estado inicial
  // Se ejecuta cuando el usuario hace click en "Nuevo"
  limpiarBusqueda(): void {
    this.nombrePokemon = '';  // Vaciamos el input
    this.pokemon = null;      // Quitamos el pokemon mostrado
    this.error = '';         // Quitamos mensajes de error
  }
}