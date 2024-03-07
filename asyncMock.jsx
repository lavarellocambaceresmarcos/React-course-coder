const products = [
    {
        id:'1',
        name:'Curso de Personal Trainer',
        price:250,
        category:'Salud fisica',
        img:'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600',
        stock:10,
        descp:'Agrega este curso a tu inventario, y suma bienestar a tu entorno'

    },
    {
        id:'2',
        name:'Curso de yoga',
        price:350,
        category:'Recreativos',
        img:'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600',
        stock:20,
        descp:'Agrega este curso a tu inventario, y suma bienestar a tu entorno'

    },
    {
        id:'3',
        name:'Curso de Asistente terapeutico',
        price:450,
        category:'Asistencia',
        img:'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600',
        stock:30,
        descp:'Agrega este curso a tu inventario, y suma bienestar a tu entorno'

    },
  
]

export const getProdcuts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}
export const getProductsByCategory= (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === productCategory))
        }, 500);
    })
}