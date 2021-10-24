window.onload = function(){
    
//adicionar
    const listaProdutos = document.querySelector("#listaProdutos");
    const cesta = document.querySelector("#cestaDoCliente");
    const total = document.querySelector("#mostraTotalCompra");
    let totalzinho = 0

        listaProdutos.addEventListener('click', function (elemento){
            let itemNaCesta = false
            for(let i=0; i < cesta.childNodes.length; i++){
                if(elemento.target.dataset.codigo == cesta.childNodes[i].dataset.codigo){
                //console.log(cesta.childNodes[i].dataset.codigo)
                    alert("Este item" + elemento.target.innerHTML + "já está na sua cesta")
                    //console.log("Item já na cesta")
                    itemNaCesta = true
                } else {
                    //console.log("Não tem este item na cesta")
                    itemNaCesta = false
                }
            }
            console.log(itemNaCesta)

            if(itemNaCesta==false){
                let li = document.createElement('li');
                cesta.appendChild(li).textContent = elemento.target.innerHTML;
                cesta.appendChild(li).setAttribute('data-preco', elemento.target.dataset.preco);
                cesta.appendChild(li).setAttribute('data-codigo', elemento.target.dataset.codigo);
//somar
                totalzinho = totalzinho + Number(elemento.target.dataset.preco);
                total.setAttribute('value', totalzinho.toFixed(2))
            }
        })
  
//remover        
        cesta.addEventListener('click', function(elemento){
//            let li = elemento.target
//            li.remove()
//            cesta.removeChild(elemento.target)
            elemento.target.remove()

//subtrair
            totalzinho = totalzinho - Number(elemento.target.dataset.preco);
            total.setAttribute('value', totalzinho.toFixed(2))
        })
} 
