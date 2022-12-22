/*import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rubro } from '../models/category';
import { Subrubro } from '../models/subcategory';
import { RubroService } from './category.service';
import { SubrubroService } from './subcategory.service';

@Injectable()
export class DataServiceService {

  private rubros2: Rubro[] = [
    { id: 1, name: 'Almacenamiento' },
    { id: 2, name: 'Audio' },
    { id: 3, name: 'Audio Autos' },
    { id: 4, name: 'Calculadoras' },
    { id: 5, name: 'Celulares' },
    { id: 6, name: 'Componentes' },
    { id: 7, name: 'Computacion' },
    { id: 8, name: 'Conectividad' },
    { id: 9, name: 'Conectores y cables' },
    { id: 10, name: 'Contadoras' },
    { id: 11, name: 'Electro Hogar' },
    { id: 12, name: 'Energia' },
    { id: 13, name: 'Fotografia' },
    { id: 14, name: 'Fundas y Mochilas' },
    { id: 15, name: 'Iluminacion' },
    { id: 16, name: 'Imagen y Perifericos' },
    { id: 17, name: 'Impresion' },
    { id: 18, name: 'Accesorios de instrumentos' },
    { id: 19, name: 'Intrumentos de cuerda' },
    { id: 20, name: 'Instrumentos electricos' },
    { id: 21, name: 'Intrumentos de percusion' },
    { id: 22, name: 'Intrumentos de viento' },
    { id: 23, name: 'Movilidad' },
    { id: 24, name: 'Optica' },
    { id: 25, name: 'Papeles' },
    { id: 26, name: 'Pilas' },
    { id: 27, name: 'Seguridad' },
    { id: 28, name: 'Sonido PRO' },
    { id: 29, name: 'Videojuegos' },
    { id: 30, name: 'Wearables' },
  ];

  private subrubros2: Subrubro[] = [
    { id: 1, name: 'Discos rigidos externo', category: { id: 1, name: 'Almacenamiento'} },
    { id: 2, name: 'Lectores de tarjeta de memoria', category: { id: 1, name: 'Almacenamiento'} },
    { id: 3, name: 'Tarjetas de memoria', category: { id: 1, name: 'Almacenamiento'} },
    { id: 4, name: 'Pendrive', category: { id: 1, name: 'Almacenamiento'} },
    { id: 5, name: 'Amplificadores de bajo', category: { id: 2 , name: 'Audio' } },
    { id: 6, name: 'Amplificadores de guitarra', category: { id: 2 , name: 'Audio' } },
    { id: 7, name: 'Auriculares In Ear', category: { id: 2 , name: 'Audio' } },
    { id: 8, name: 'Auriculares In Ear inalámbricos', category: { id: 2 , name: 'Audio' } },
    { id: 9, name: 'Auriculares On Ear', category: { id: 2 , name: 'Audio' } },
    { id: 10, name: 'Auriculares On Ear inalámbricos', category: { id: 2 , name: 'Audio' } },
    { id: 11, name: 'Auriculares Over Ear', category: { id: 2 , name: 'Audio' } },
    { id: 12, name: 'Auriculares PC', category: { id: 2 , name: 'Audio' } },
    { id: 13, name: 'Auriculares Sport', category: { id: 2 , name: 'Audio' } },
    { id: 14, name: 'Auriculares Sport inalámbricos', category: { id: 2 , name: 'Audio' } },
    { id: 15, name: 'Bandejas giradiscos', category: { id: 2 , name: 'Audio' } },
    { id: 16, name: 'Barras de sonido', category: { id: 2 , name: 'Audio' } },
    { id: 17, name: 'Home Theaters', category: { id: 2 , name: 'Audio' } },
    { id: 18, name: 'Micrófonos de PC', category: { id: 2 , name: 'Audio' } },
    { id: 19, name: 'Minicomponentes', category: { id: 2 , name: 'Audio' } },
    { id: 20, name: 'Parlantes Bluetooth', category: { id: 2 , name: 'Audio' } },
    { id: 21, name: 'Parlantes PC 2.0 - 2.1', category: { id: 2 , name: 'Audio' } },
    { id: 22, name: 'Parlantes PC chicos', category: { id: 2 , name: 'Audio' } },
    { id: 23, name: 'Radio AM/FM', category: { id: 2 , name: 'Audio' } },
    { id: 24, name: 'Radio despertador', category: { id: 2 , name: 'Audio' } },
    { id: 25, name: 'Radio Pocket AM/FM', category: { id: 2 , name: 'Audio' } },
    { id: 26, name: 'Receptores Bluetooth', category: { id: 2 , name: 'Audio' } },
    { id: 27, name: 'Reproductores MP3', category: { id: 2 , name: 'Audio' } }
  ];

  constructor(//private httpClient: HttpClient,
              private rubroService: RubroService,
              private subrubroService: SubrubroService) { }
  
  /*public obtenerRubros(): Rubro[]{
    this.rubroService.getRubros().subscribe(
      (res) => {this.rubros = res;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
    return this.rubros;
  }

  public obtenerSubrubros(){
    this.subrubroService.getSubrubros().subscribe(
      (res) => {this.subrubros = res;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )

    return this.subrubros;
  }
  
  public getRubros2(){
    return this.rubros;
  }

  public getSubrubros2(){
    return this.subrubros;
  }

  getRubros(): Rubro[] {
    return this.rubros2;
  }

  getSubrubros(): Subrubro[] {
    return this.subrubros2;
  }


}
*/