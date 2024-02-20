//Data 
const inventory = [
  {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 2,
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    price: 45.75,
    reviews: [{userID: 15, content:'good way to learn JQuery'}],
    inventory: 2,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 36.00,
    reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
    inventory: 8,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 4,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 25.50,
    reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
    inventory: 0,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
  },
  {
    id: 5,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 6.00,
    reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
    inventory: 7,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
    id: 6,
    title: 'Learn Enough JavaScript to Be Dangerous',
    author: 'Michael Hartl',
    price: 24.00,
    reviews: [{userID: 50, content:'pretty good'}],
    inventory: 5,
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'
  },
  {
    id: 7,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 49.95,
    reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
    inventory: 20,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
  }
]

//✅ Review variables (let, const)
//✅ Review strings
//✅ Review math
//✅ Review if/else
//✅ Review arrays?
//✅ Review objects?

//✅ 1. Create hello world using REGULAR functions
function helloWorld(name){
  return "Hello World"
}
//✅ 2. For Easley's bookstore, create formatPrice(price)
function formatPrice(price){
  price.toFixed(2)
  return "$"+ price.toFixed(2)
}

//✅ 3. Make an arrow function version of formatPrice
const formatPriceArrow = (price) => {
  return `$${price.toFixed(2)}`
}

//✅ 4. WE DO: create a blurb() function that accepts a book as an argument and logs a message in the following format:
//'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'

const blurb = (book) => {
  return (
    `Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for ${formatPrice(book.price)} `
  )
}


//✅ 5. Call formatPrice on an array of prices
 

//✅ 5a. Create an array
const prices =[1,3,66,84,45,56]

//✅ 5b. Use a for loop to iterate over prices
for( let  i = 0;  i<prices.length; i++){
  console.log(` i is ${i} , price is ${prices}`)
 }
//✅ 5c. Use .forEach to iterate over prices
let forEachReturn = prices.forEach((el,i) =>{
  console.log( `i is ${i} the actual element, or prices[i] is ${el}`)
})

//✅ 5d. Use .map to iterate over prices
//

let mapList = prices.map( (el,i)=>{
  return `i is ${i} and prices[i] is ${el}`
})

//✅ 5e. using .map, for each book in inventory, return blurb(book)
//output: ['Eloquent JavaScript: A Modern Introduction to Programming is on sale for $10.00', ...]

let listOfStrings = inventory.map((el)=>{
  return blurb(el)
})


//✅ 6. Create a version of myMap that uses a for loop to mimic .map
//input: array, callback function
//output: a new array

function myMap(list){
  
  let newMap=[]
  for(let i=0 ; i<list.length(); i++){
    newMap.push( newMap.push(list[i]) )
  }

  return newMap
}