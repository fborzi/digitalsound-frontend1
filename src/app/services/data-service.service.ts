import { Injectable } from '@angular/core';
import { Rubro } from '../models/rubro';
import { Subrubro } from '../models/subrubro';

@Injectable()
export class DataServiceService {

  private rubros: Rubro[] = [
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

  private subrubros: Subrubro[] = [
    { id: 1, nombre: 'Discos rigidos externo', rubro: { id: 1 } },
    { id: 2, nombre: 'Lectores de tarjeta de memoria', rubro: { id: 1 } },
    { id: 3, nombre: 'Tarjetas de memoria', rubro: { id: 1 } },
    { id: 4, nombre: 'Pendrive', rubro: { id: 1 } },
    { id: 5, nombre: 'Amplificadores de bajo', rubro: { id: 2 } },
    { id: 6, nombre: 'Amplificadores de guitarra', rubro: { id: 2 } },
    { id: 7, nombre: 'Auriculares In Ear', rubro: { id: 2 } },
    { id: 8, nombre: 'Auriculares In Ear inalámbricos', rubro: { id: 2 } },
    { id: 9, nombre: 'Auriculares On Ear', rubro: { id: 2 } },
    { id: 10, nombre: 'Auriculares On Ear inalámbricos', rubro: { id: 2 } },
    { id: 11, nombre: 'Auriculares Over Ear', rubro: { id: 2 } },
    { id: 12, nombre: 'Auriculares PC', rubro: { id: 2 } },
    { id: 13, nombre: 'Auriculares Sport', rubro: { id: 2 } },
    { id: 14, nombre: 'Auriculares Sport inalámbricos', rubro: { id: 2 } },
    { id: 15, nombre: 'Bandejas giradiscos', rubro: { id: 2 } },
    { id: 16, nombre: 'Barras de sonido', rubro: { id: 2 } },
    { id: 17, nombre: 'Home Theaters', rubro: { id: 2 } },
    { id: 18, nombre: 'Micrófonos de PC', rubro: { id: 2 } },
    { id: 19, nombre: 'Minicomponentes', rubro: { id: 2 } },
    { id: 20, nombre: 'Parlantes Bluetooth', rubro: { id: 2 } },
    { id: 21, nombre: 'Parlantes PC 2.0 - 2.1', rubro: { id: 2 } },
    { id: 22, nombre: 'Parlantes PC chicos', rubro: { id: 2 } },
    { id: 23, nombre: 'Radio AM/FM', rubro: { id: 2 } },
    { id: 24, nombre: 'Radio despertador', rubro: { id: 2 } },
    { id: 25, nombre: 'Radio Pocket AM/FM', rubro: { id: 2 } },
    { id: 26, nombre: 'Receptores Bluetooth', rubro: { id: 2 } },
    { id: 27, nombre: 'Reproductores MP3', rubro: { id: 2 } }
  ];                       

  constructor() { }

  getRubros(): Rubro[] {
    return this.rubros;
  }

  getSubrubros(): Subrubro[] {
    return this.subrubros;
  }


}
