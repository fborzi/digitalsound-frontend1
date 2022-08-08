export class Producto{
    id: number = 0;
    code: number = 0;
    category!: { id: number; }; // RUBRO
    subcategory!: { id: number; }; // SUBRUBRO
    name: string = '';
    description: string = '';
    image: string = '';
    price: number = 0;
    //subrubro!: { id: number; };

    constructor(
        id: number,
        code: number,
        category: { id: number; },
        subcategory: { id: number; },
        name: string,
        description: string,
        image: string,
        price: number,
        //subrubro: { id: number; },
    ){
        this.id = id;
        this.code = code;
        this.category = category;
        this.subcategory = subcategory;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        //this.subrubro = subrubro;
    }
    
}