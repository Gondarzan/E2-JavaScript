
const numberImput = document.getElementById('numeroPizza')
const formList = document.getElementById('form')
const formBtn = document.getElementById('ingresarButton')
const pizzaContainer = document.getElementById('cardPizza')

const isEmpty = value => value === '';

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const errorContainer = formField.querySelector('small');
    errorContainer.textContent = message  
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const errorContainer = formField.querySelector('small');
    errorContainer.textContent = ''  
}
  


const pizzas = [
    {
      name: "Pizza Napolitana",
      id: 1,
      price: "$500"
    },
    {
      name: "Pizza Fugazzeta",
      id:2,
      price: "$300"
    },
    {
      name: "Pizza Cuatro Quesos",
      id:3,
      price: "$1100"
    },
    {
      name: "Pizza Calabresa",
      id: 4,
      price: "$750",
    },
    {
      name: "Pizza Hawaiana",
      id: 5,
      price: "$750",
    },
    {
      name: "Pizza de Champiñones",
      id: 6,
      price: "$990",
    }
]


const renderPizza = (pizzas) => {
    let valid = false;
    const min = 1;
    const max = 6; 
    const numeroPizza = numberImput.value.trim();

    if(isEmpty (numeroPizza)){
        showError(numberImput, 'Escribe un número.')

    } else if (numeroPizza > 6){ 
        showError(numberImput, `El numero debe ser entre ${min} y ${max} `)

    }else {
        showSuccess (numberImput)
        pizzaContainer.innerHTML = `
        <div>
            <h2>${pizzas.name}</h2>
            <h3>${pizzas.price}</h3>
        </div>
        `
        valid = true;
    }    
}

const searchPizza = (value) => pizzas.find((pizzas) => pizzas.id === value)

const sendForm = (e) => {
    e.preventDefault()
    const inputSearch = numberImput.value
    const resultPizza = searchPizza(Number(inputSearch))
    renderPizza(resultPizza)
}

const init = () => {
    formList.addEventListener('submit', sendForm)
}
init()




  

  





































