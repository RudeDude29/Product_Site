const pr = fetch("https://dummyjson.com/products");

pr.then((res)=>{
    const pr2 =res.json();
    pr2.then((data)=>{
        console.log(data)
        createUI(data)
    })
}).catch((err)=>{
    console.log(err);
})

const main = document.getElementById('root');


function createUI(data) {

    console.log(data);  
   const products = data.products;
    console.log(products)
   main.innerHTML=''
   for(let i =0 ;i<products.length;i++){
    const newCard = document.createElement('div');
    const title = document.createElement('h3');

    title.innerText = products[i].title;
    newCard.appendChild(title);

    const price =document.createElement('p');
    price.innerText=`$ ${products[i].price} /-`;
    newCard.appendChild(price);

    const rating = document.createElement('p');
    rating.innerText=`Rating: ${products[i].rating}`;
    newCard.appendChild(rating);    

    const img=document.createElement('img');
    img.setAttribute('src',products[i].thumbnail);
    newCard.appendChild(img);

    const des=document.createElement('div');
    des.innerText=products[i].description;
    newCard.appendChild(des)

    main.appendChild(newCard);
   }

}

function searchProducts(e){
    console.log(e.target.value)

    const searchText =e.target.value;

    const pr =fetch(`https://dummyjson.com/products/search?q=${searchText}`);

    pr.then((res)=>{
        const pr2 =res.json();
        pr2.then((data)=>{
            createUI(data);
        })
    })

}

