let product = document.querySelectorAll('#productSneaker');
const addToBucketBtn = document.querySelectorAll('.addToBucketBtn');
let bucketProducts = document.querySelector('.productsToBuy');
const clearBtn = document.querySelector('.clearBtn');

let productStore = [
    { 
    id: 1,
    name: 'ozelia', 
    price: 100 
    },
    { 
        id: 2, 
        name: 'ozweego', 
        price: 110 
    },
    { 
    id: 3, 
    name: 'Hoka',
    price: 150 
    }
];

//adding elements to the bucket
let addToBucketfunc = (index) => {
  let product = productStore[index];
  let productElement = document.createElement('p');
  productElement.innerHTML = `${product.name} - $${product.price}`;
  bucketProducts.appendChild(productElement);
}

addToBucketBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    addToBucketfunc(index);
  });
});

//clearing bucket
const clearBucket = () => {
  bucketProducts.innerHTML = '';
}

clearBtn.addEventListener('click', clearBucket);

