import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RubroService } from 'src/app/services/rubro.service';
import { SubrubroService } from 'src/app/services/subrubro.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Rubro } from 'src/app/models/rubro';
import { Subrubro } from 'src/app/models/subrubro';
import { Producto } from 'src/app/models/producto';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  providers: [RubroService, SubrubroService, ProductoService, DataServiceService]
})
export class AdministradorComponent implements OnInit {
  static module(arg0: string, arg1: never[]) {
    throw new Error('Method not implemented.');
  }

  formularioProducto!: FormGroup;
  listadoRubros: Rubro[] = [
    { id: 1, nombre: 'Almacenamiento' },
    { id: 2, nombre: 'Audio' },
    { id: 3, nombre: 'Audio Autos' },
    { id: 4, nombre: 'Calculadoras' },
    { id: 5, nombre: 'Celulares' },
    { id: 6, nombre: 'Componentes' },
    { id: 7, nombre: 'Computacion' },
    { id: 8, nombre: 'Conectividad' },
    { id: 9, nombre: 'Conectores y cables' },
    { id: 10, nombre: 'Contadoras' },
    { id: 11, nombre: 'Electro Hogar' },
    { id: 12, nombre: 'Energia' },
    { id: 13, nombre: 'Fotografia' },
    { id: 14, nombre: 'Fundas y Mochilas' },
    { id: 15, nombre: 'Iluminacion' },
    { id: 16, nombre: 'Imagen y Perifericos' },
    { id: 17, nombre: 'Impresion' },
    { id: 18, nombre: 'Accesorios de instrumentos' },
    { id: 19, nombre: 'Intrumentos de cuerda' },
    { id: 20, nombre: 'Instrumentos electricos' },
    { id: 21, nombre: 'Intrumentos de percusion' },
    { id: 22, nombre: 'Intrumentos de viento' },
    { id: 23, nombre: 'Movilidad' },
    { id: 24, nombre: 'Optica' },
    { id: 25, nombre: 'Papeles' },
    { id: 26, nombre: 'Pilas' },
    { id: 27, nombre: 'Seguridad' },
    { id: 28, nombre: 'Sonido PRO' },
    { id: 29, nombre: 'Videojuegos' },
    { id: 30, nombre: 'Wearables' },
  ];
  listadoSubrubros: Subrubro[] = [
    { id: 1, nombre: 'Discos rigidos externo', rubro: { id: 1 } },
    { id: 2, nombre: 'Lectores de tarjeta de memoria', rubro: { id: 1 } },
    { id: 3, nombre: 'Tarjetas de memoria', rubro: { id: 1 } },
    { id: 4, nombre: 'Pendrive', rubro: { id: 1 } },
  ];

  public selectedRubro: Rubro = { id: 0, nombre: '' };
  public rubros: Rubro[] = [];
  public subrubros: Subrubro[] = [];
  


  constructor(private fb: FormBuilder, 
              private productoService: ProductoService, 
              private rubroService: RubroService, 
              private subrubroService: SubrubroService, 
              private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.formularioProducto = this.fb.group({
      codigo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      urlImagen: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      rubro: new FormControl('', [Validators.required]),
      subrubro: new FormControl('', [Validators.required]),
    });

    this.rubros = this.dataService.getRubros();
    this.subrubros = this.dataService.getSubrubros();

  }


  guardar() {
    console.log(this.formularioProducto.value);
  }

  onSelect(id:number): void{
    this.subrubros = this.dataService.getSubrubros().filter(subrubro => subrubro.rubro.id == id);
  }

}
