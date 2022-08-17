import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

/*Para inyectar un servicio en cualquier componente,
  es como una clase/componente padre que lo podes llamar de cualquier lado */

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  /*URL base de servicio a llamar - Direccion de API REST*/
  productURL = environment.productURL; 
 
  /*Angular tiene un marco de inyección de dependencia, HttpClient es el inyectable */
  constructor(private httpClient: HttpClient) { }

  /*Método para obtener todos los productos*/

  public lista(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productURL); //Chequear URL
  }

  /*Método para obtener un producto por id*/

  public detail(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productURL + `details/${id}`); //Chequear URL
  }

  /*Método para obtener un producto por nombre*/
  
  public detailName(name: string): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productURL + `details-name/${name}`); //Chequear URL
  }

  /*Método para crear un producto*/

  public save(product: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(this.productURL + '/create', product); //Chequear URL
  }

  /*Método para actualizar un producto*/

  public update(id: number, product: Producto): Observable<Producto>{
    return this.httpClient.put<Producto>(this.productURL + `/update/${id}`, product); //Chequear URL
  }

  /*Método para eliminar un producto*/

  public delete(id: number): Observable<Producto>{ 
    return this.httpClient.delete<Producto>(this.productURL + `/delete/${id}`); //Chequear URL
  }

  private productos: Producto[] = [
    {
      id: 100,
      code: 1000,
      category: { id: 1 },
      subcategory: { id: 1 },
      name: 'PENDRIVE KINGSTON EXODIA 128GB',
      description: 'Una descripcion',
      image: 'https://media.kingston.com/kingston/product/ktc-product-usb-dtx-128gb-1-lg.jpg',
      price: 1350
    },
    {
      id: 100,
      code: 1000,
      category: { id: 1 },
      subcategory: { id: 1 },
      name: 'PENDRIVE KINGSTON EXODIA 256GB',
      description: 'Una descripcion',
      image: 'https://media.kingston.com/kingston/product/ktc-product-usb-dtx-128gb-1-lg.jpg',
      price: 1350
    },
    {
      id: 102,
      code: 1002,
      category: { id: 1 },
      subcategory: { id: 1 },
      name: 'PENDRIVE KINGSTON EXODIA 64GB',
      description: 'Una descripcion',
      image: 'https://media.kingston.com/kingston/product/ktc-product-usb-dtx-128gb-1-lg.jpg',
      price: 1350
    },
    {
      id: 103,
      code: 1003,
      category: { id: 1 },
      subcategory: { id: 1 },
      name: 'PENDRIVE KINGSTON EXODIA 32GB',
      description: 'Una descripcion',
      image: 'https://media.kingston.com/kingston/product/ktc-product-usb-dtx-128gb-1-lg.jpg',
      price: 1350
    }
  ]



  getProductos(): Producto[] {
    return this.productos;
  }

}
