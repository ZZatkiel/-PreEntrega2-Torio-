const products = 
[{ 
    id: '1', 
    name: 'iphone 12', 
    price: 1000, 
    category: 'celular', 
    img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
    stock: 25, 
    description:'Descripcion de Iphone 12'

},
{
    id: '2', 
    name: 'iphone 13', 
    price: 2000, 
    category: 'celular', 
    img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
    stock: 35, 
    description:'Descripcion de Iphone 13'
},
{
    id: '3', 
    name: 'iphone 14', 
    price: 3000, 
    category: 'celular', 
    img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
    stock: 45, 
    description:'Descripcion de Iphone 14'
},
{ 
    id: '1', 
    name: 'Tablet velocity', 
    price: 152820, 
    category: 'tablet', 
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbZ2yRc1EUuqbd748Z3H7Fg94GVjPW0W76uxG9VbTdYA2rjig0Q_5n0xAXS0pCzzXWKQ&usqp=CAU', 
    stock: 15, 
    description:'Descripcion de Iphone 12'

},
{
    id: '2', 
    name: 'Tablet Furius', 
    price: 122573, 
    category: 'tablet', 
    img:'https://f.fcdn.app/imgs/4bc5ba/www.zonatecno.com.uy/zoteuy/9b7f/original/catalogo/100662_100662_1/2000-2000/tablet-samsung-galaxy-tab-a7-lite-t225-32gb-3gb-silver-lte-tablet-samsung-galaxy-tab-a7-lite-t225-32gb-3gb-silver-lte.jpg', 
    stock: 7, 
    description:'Descripcion de Iphone 13'
},
{
    id: '3', 
    name: 'Tablet HD', 
    price: 312500, 
    category: 'tablet', 
    img:'https://http2.mlstatic.com/D_NQ_NP_949825-MLU72561171367_102023-O.webp', 
    stock: 2, 
    description:'Descripcion de Iphone 14'
},
{ 
    id: '1', 
    name: 'Asmodeus NoteBook', 
    price: 651000, 
    category: 'notebook', 
    img:'https://images.start.com.ar/FA506ICB-HN118.jpg', 
    stock: 5, 
    description:'Descripcion de Iphone 12'

},
{
    id: '2', 
    name: 'NoteBook Dragon', 
    price: 842000, 
    category: 'notebook', 
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cHF890uub9ZsQBagM5WmBmJqANqA1mnarACfmW_v_WA8x7qx0waHFAeaviM56bVaIcc&usqp=CAU', 
    stock: 3, 
    description:'Descripcion de Iphone 13'
},
{
    id: '2', 
    name: 'NoteBook Wordspike', 
    price: 352000, 
    category: 'notebook', 
    img:'https://images.fravega.com/f1000/a2c6844f10258a673a1cee833302f321.jpg', 
    stock: 3, 
    description:'Descripcion de Iphone 13'
}]


export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 1000)
    })
}


export const getProductsById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === productId);
            if (product) {
                resolve([product]);
            } else {
                reject(new Error('Producto no encontrado'));
            }
        }, 1000);
    });
}


export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = products.filter(prod => prod.category === productCategory);
            resolve(productsFiltered);
        }, 1000);
    });
}
