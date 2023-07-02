  const appContainer = document.getElementById('app');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    appContainer.appendChild(containerDiv);

    const h1 = document.createElement('h1');
    h1.classList.add('mt-5');
    h1.textContent = 'Currency Exchange';
    containerDiv.appendChild(h1);

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.classList.add('mt-4');
    containerDiv.appendChild(rowDiv);

    const col1Div = document.createElement('div');
    col1Div.classList.add('col-md-6');
    rowDiv.appendChild(col1Div);

    const card1Div = document.createElement('div');
    card1Div.classList.add('card');
    col1Div.appendChild(card1Div);

    const cardBody1Div = document.createElement('div');
    cardBody1Div.classList.add('card-body');
    card1Div.appendChild(cardBody1Div);

    const card1Title = document.createElement('h5');
    card1Title.classList.add('card-title');
    card1Title.textContent = 'Sell';
    cardBody1Div.appendChild(card1Title);

    const form1 = document.createElement('form');
    cardBody1Div.appendChild(form1);

    const formGroup1 = document.createElement('div');
    formGroup1.classList.add('form-group');
    form1.appendChild(formGroup1);

    const fromCurrencyLabel = document.createElement('label');
    fromCurrencyLabel.setAttribute('for', 'fromCurrency');
    fromCurrencyLabel.textContent = 'From Currency';
    formGroup1.appendChild(fromCurrencyLabel);

    const fromCurrencySelect = document.createElement('select');
    fromCurrencySelect.classList.add('form-control');
    fromCurrencySelect.setAttribute('id', 'fromCurrency');
    formGroup1.appendChild(fromCurrencySelect);

    const fromCurrencyOption1 = document.createElement('option');
    fromCurrencyOption1.setAttribute('value', 'USD');
    fromCurrencyOption1.textContent = 'USD';
    fromCurrencySelect.appendChild(fromCurrencyOption1);

    const fromCurrencyOption2 = document.createElement('option');
    fromCurrencyOption2.setAttribute('value', 'EUR');
    fromCurrencyOption2.textContent = 'EUR';
    fromCurrencySelect.appendChild(fromCurrencyOption2);

    const fromCurrencyOption3 = document.createElement('option');
    fromCurrencyOption3.setAttribute('value', 'UAH');
    fromCurrencyOption3.textContent = 'UAH';
    fromCurrencySelect.appendChild(fromCurrencyOption3);

    const formGroup2 = document.createElement('div');
    formGroup2.classList.add('form-group');
    form1.appendChild(formGroup2);

    const fromAmountLabel = document.createElement('label');
    fromAmountLabel.setAttribute('for', 'fromAmount');
    fromAmountLabel.textContent = 'Amount';
    formGroup2.appendChild(fromAmountLabel);

    const fromAmountInput = document.createElement('input');
    fromAmountInput.setAttribute('type', 'number');
    fromAmountInput.classList.add('form-control');
    fromAmountInput.setAttribute('id', 'fromAmount');
    fromAmountInput.value = "0";
    formGroup2.appendChild(fromAmountInput);

    const col2Div = document.createElement('div');
    col2Div.classList.add('col-md-6');
    rowDiv.appendChild(col2Div);

    const card2Div = document.createElement('div');
    card2Div.classList.add('card');
    col2Div.appendChild(card2Div);

    const cardBody2Div = document.createElement('div');
    cardBody2Div.classList.add('card-body');
    card2Div.appendChild(cardBody2Div);

    const card2Title = document.createElement('h5');
    card2Title.classList.add('card-title');
    card2Title.textContent = 'Buy';
    cardBody2Div.appendChild(card2Title);

    const form2 = document.createElement('form');
    cardBody2Div.appendChild(form2);

    const formGroup3 = document.createElement('div');
    formGroup3.classList.add('form-group');
    form2.appendChild(formGroup3);

    const toCurrencyLabel = document.createElement('label');
    toCurrencyLabel.setAttribute('for', 'toCurrency');
    toCurrencyLabel.textContent = 'To Currency';
    formGroup3.appendChild(toCurrencyLabel);

    const toCurrencySelect = document.createElement('select');
    toCurrencySelect.classList.add('form-control');
    toCurrencySelect.setAttribute('id', 'toCurrency');
    formGroup3.appendChild(toCurrencySelect);

    const toCurrencyOption1 = document.createElement('option');
    toCurrencyOption1.setAttribute('value', 'USD');
    toCurrencyOption1.textContent = 'USD';
    toCurrencySelect.appendChild(toCurrencyOption1);

    const toCurrencyOption2 = document.createElement('option');
    toCurrencyOption2.setAttribute('value', 'EUR');
    toCurrencyOption2.textContent = 'EUR';
    toCurrencySelect.appendChild(toCurrencyOption2);

    const toCurrencyOption3 = document.createElement('option');
    toCurrencyOption3.setAttribute('value', 'UAH');
    toCurrencyOption3.textContent = 'UAH';
    toCurrencySelect.appendChild(toCurrencyOption3);

    const formGroup4 = document.createElement('div');
    formGroup4.classList.add('form-group');
    form2.appendChild(formGroup4);

    const toAmountLabel = document.createElement('label');
    toAmountLabel.setAttribute('for', 'toAmount');
    toAmountLabel.textContent = 'Amount';
    formGroup4.appendChild(toAmountLabel);

    const toAmountInput = document.createElement('input');
    toAmountInput.setAttribute('type', 'number');
    toAmountInput.classList.add('form-control');
    toAmountInput.setAttribute('id', 'toAmount');
    toAmountInput.setAttribute('readonly', true);
    formGroup4.appendChild(toAmountInput);

    const exchangeButton = document.createElement('button');
    exchangeButton.classList.add('btn');
    exchangeButton.classList.add('btn-primary');
    exchangeButton.setAttribute("class","btn btn-primary mt-4")
    exchangeButton.textContent = 'Exchange';
    containerDiv.appendChild(exchangeButton);

    //----------------------------------------------------------------------
    const URL = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11";

  let Curdata = [];


  let curList = [];
  let storrage = localStorage.getItem("currencies");


//   function CreateStorage(email, Password){
    //     const newCurremcy = {
        //       username: email,
        //       password: Password,
        //     };
        //     curList.push(newCurremcy);
        //     curList = JSON.stringify(curList);
        //     localStorage.setItem("currencies", curList);
        //   }
        
        //   function AddToStorage(email, Password){
            //     let curList = localStorage.getItem("currencies");
            //     curList = JSON.parse(curList);
            //     let isTaken = false
            //     const newCurremcy = {
                //       username: email,
                //       password: Password,
                //     };
                //     if(isTaken === false){
                    //       curList.push(newCurremcy);
                    //       curList = JSON.stringify(curList);
                    //       localStorage.setItem("currencies", curList);
                    //     }
                    //   }
                    
                    
                    let mapCcy = new Map();
                    
    window.addEventListener("load", () => {
        const currancy = Request(URL);
        currancy
          .then((data) => {
            PrintCurrancy(data);
            Curdata = data;
            data.forEach(currancy => {
                mapCcy.set(currancy.ccy, currancy);
            });
          })
          .catch((error) => console.log(error));
    });

    function Request(URL) {
        const data = fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                return error;
            });
        return data;
    }

    function PrintCurrancy(currancy) {
        console.log(currancy);
    }

    function Exchange(from, amount = 0, to) {
        if(from === to){return amount;}
        if(to==="UAH"){return amount * mapCcy.get(from).sale;}
        if(to != "UAH" && from != "UAH"){
            return (amount*mapCcy.get(from).sale)/mapCcy.get(to).buy
        }
        return amount / mapCcy.get(to).buy;
    }
    fromAmountInput.addEventListener("input", () => {
        const fromAm = document.querySelector("#fromAmount");
        const toAmountInput = document.querySelector('#toAmount');
        
        const selectElementSell = document.querySelector('#fromCurrency');
        const selectElementBuy = document.querySelector('#toCurrency');
        const selectedOptionSell = selectElementSell.options[selectElementSell.selectedIndex];
        const selectedOptionBuy = selectElementBuy.options[selectElementBuy.selectedIndex];
        // toAmountInput.value = parseFloat(Exchange(selectedOptionSell.value, fromAmountInput.value, selectedOptionBuy.value).toFixed(2));
        toAmountInput.value = Exchange(selectedOptionSell.value, fromAmountInput.value, selectedOptionBuy.value);
    });
    
    const conv = document.querySelector(".btn")
    conv.addEventListener("click", (event) => {
        event.preventDefault();
        
        const fromAm = document.querySelector("#fromAmount");
        const toAmountInput = document.querySelector('#toAmount');
        
        const selectElementSell = document.querySelector('#fromCurrency');
        const selectElementBuy = document.querySelector('#toCurrency');
        
        const selectedOptionSell = selectElementSell.options[selectElementSell.selectedIndex];
        const selectedOptionBuy = selectElementBuy.options[selectElementBuy.selectedIndex];
        
        toAmountInput.value = Exchange(selectedOptionSell.value, fromAmountInput.value, selectedOptionBuy.value);
        // toAmountInput.value = parseFloat(Exchange(selectedOptionSell.value ,fromAm.value, selectedOptionBuy.value).toFixed(2));
        
    })

    