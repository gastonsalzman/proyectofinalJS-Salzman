const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
document.getElementsByClassName('pagar')[0].addEventListener('click', pagarClicked)

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

// Lista de los contenedores de productos
const productsList = document.querySelectorAll('.tarjeta')



//variable de arreglos de Productos
let allproducts = []

const ValorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos')

const cartTotal = document.querySelector('.cart-total');
const cartEmpty = document.querySelector('.cart-empty');

//Funcion para mostrar HTML


const showHTML = () =>  {       

    if (!allproducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}


    
    //Limpiar div html
    rowProduct.innerHTML = "";
    
    let total = 0;
    let totalOfProducts = 0;

    allproducts.forEach(product  => {
        const containerProduct = document.createElement("div")
        containerProduct.classList.add("cart-product")

        containerProduct.innerHTML = `

            <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.cantidad}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
                </div>
                <i class="fa-solid fa-x icon-close"></i>
           

        `;
        rowProduct.append(containerProduct)

        total = total + parseInt(product.cantidad * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.cantidad;

    });

    ValorTotal.innerText = `$${total}`
    countProducts.innerText = totalOfProducts;
    console.log(total)

   
};



function cargarCarritoDesdeLocalStorage (){
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        allproducts = JSON.parse(carritoGuardado);
        showHTML();
    }
}

cargarCarritoDesdeLocalStorage();

productsList.forEach((productsList) => {
productsList.addEventListener ('click', (e) => {

    if (e.target.classList.contains('btn-add-cart')){
        const product = (e.target.parentElement)
        
        const infoproduct ={
            cantidad: 1,
            title: product.querySelector('h3').textContent,
            info: product.querySelector('p').textContent,
            price: product.querySelector('p.price').textContent,

        }
    
        const exits = allproducts.some(product => product.title === infoproduct.title);

        if (exits){
            const products = allproducts.map(product => {
                if (product.title === infoproduct.title){
                    product.cantidad++;
                    return product
                }else{
                    return product
                }
                
            });

            allproducts = [...products];

        }else{

            allproducts = [...allproducts, infoproduct];
        }

        localStorage.setItem('carrito', JSON.stringify(allproducts));


        showHTML();
       
    }
});
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allproducts = allproducts.filter(
			product => product.title !== title
		);

        localStorage.setItem('carrito', JSON.stringify(allproducts));

		console.log(allproducts);

		showHTML();
	}
});

function pagarClicked(event){
    Swal.fire(
        'Muchas Gracias!',
        'Compra realizada con exito!',
        'success0'
      );
    allproducts = [];
    localStorage.removeItem('carrito');
    showHTML();
}
      

      





