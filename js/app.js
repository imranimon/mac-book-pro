//get by id
function getById(id){
    return document.getElementById(id)
}


//Toggling Button
function toggleButton(id) {
    const header = getById(id);
    let buttons = header.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        })
    })
}
toggleButton('memory')
toggleButton('storage')
toggleButton('delivery')

//update total
function updateTotal(){
    const bestPrice = parseFloat(getById('best-price').innerText);
    const memoryPrice = parseInt(getById('memory-price').innerText);
    const storagePrice = parseInt(getById('storage-price').innerText);
    const deliveryPrice = parseInt(getById('delivery-price').innerText);
    //update total
    getById('total-price').innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    getById('total').innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    getById('apply-code').disabled = false;
}


//On change memory
document.getElementById('memory').addEventListener('click'
,function(event){
    const clickedButton = event.target.innerText
    const memoryPrice = getById('memory-price')
    if (clickedButton == '8GB unified memory'){
        memoryPrice.innerText = 0
    } else {
        memoryPrice.innerText = 180
    }

    updateTotal()
})

//On change storage
document.getElementById('storage').addEventListener('click'
,function(event){
    
    const clickedButton = event.target.innerText
    const storagePrice = getById('storage-price')
    if (clickedButton == '256GB SSD storage'){
        storagePrice.innerText = 0
    } else if(clickedButton == '512GB SSD storage') {
        storagePrice.innerText = 100
    } else{
        storagePrice.innerText = 180
    }
    updateTotal()
})


//On change delivery option
document.getElementById('delivery').addEventListener('click'
,function(event){
    
    const clickedButton = event.target.innerText
    const deliveryPrice = getById('delivery-price')
    if (clickedButton == 'Wednesday, Aug 25 Free Prime Delivery'){
        deliveryPrice.innerText = 0
    } else {
        deliveryPrice.innerText = 20
    }
    updateTotal()
})


//On apply promo code
function applyPromo(){
    const total = getById('total');
    const discount = parseInt(total.innerText)*.2;
    const pormoCode = getById('promo-input')
    const fail = getById('notify-fail');           
    if (pormoCode.value == 'stevekaku'){
        total.innerText = parseInt(total.innerText) - discount;
        pormoCode.value = '';
        fail.style.display = 'none'
        getById('apply-code').disabled = true;
    } else {
        fail.style.display = 'block';
    }
}