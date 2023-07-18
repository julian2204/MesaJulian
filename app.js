class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 0
    }

    addProduct(product){
        if(!this.isProductValid(product)){
            console.log('Error: El producto no es valido')
            return
        }
        if(this.isCodeDuplicate(product.code)){
            console.log("Error: el código del producto ya existe")
        }
        product.id = this.nextId++
        this.products.push(product)

    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find((p)=> p.id === id)
        if(product){
            return product
        }else{
            console.log("Error: Not Found")
        }
    }
    
    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }


    isCodeDuplicate(code){
        return this.products.some((p) => p.code === code)
    }
}



/*class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascotaNueva){
        this.mascotas.push(mascotaNueva)        
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        let nuevoLibro = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(nuevoLibro)

    }
    getBooks(){
        let books = []
        this.libros.forEach(({nombre}) => {
            books.push(nombre)  
        })
        return books
    } 
}
let usuario1 = new Usuario('Julian','Mesa', [], [])
console.log(usuario1.getFullName())
console.log(usuario1.getBooks())
console.log(usuario1.countMascotas())
usuario1.addMascota('perro')
console.log(usuario1.countMascotas())
console.log(usuario1.mascotas)
usuario1.addMascota('gato')
console.log(usuario1.countMascotas())
console.log(usuario1.mascotas)
usuario1.addBook('El señor de las moscas','Willian')
console.log(usuario1.getBooks())
usuario1.addBook('Fundacion','Isaac')
console.log(usuario1.getBooks())
console.log(usuario1.libros)
*/