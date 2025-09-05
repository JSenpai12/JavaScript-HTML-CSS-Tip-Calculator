let buttons = document.querySelectorAll('.tip-percent-btns button');
let billAmount = document.querySelector('.bill-amount__input');
let customTip = document.querySelector('.custom-tip__input');
let splitInput = document.querySelector('.number-people__input');
let increasedBtn = document.querySelector('.npw-increase__btn');
let decreasedBtn = document.querySelector('.npw-decrease__btn');
let tipPercent = 0;
splitInput.value = 1;

increasedBtn.addEventListener('click', ()=> {
    splitInput.value = parseInt(Number(splitInput.value)) + 1; 
});

decreasedBtn.addEventListener('click', ()=> {
    if (splitInput.value > 0) {
        splitInput.value = parseInt(Number(splitInput.value)) - 1;
    }
    splitInput.value = 1;
});


customTip.addEventListener('input', ()=> {
    tipPercent = Number(customTip.value);
    buttons.forEach(button => {
        button.classList.remove('active');
    });
});

splitInput.addEventListener('input', ()=> {
    split = Number(splitInput.value);
    console.log(split);
});


// One active button only
buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        customTip.value = '';
    });
    
});

document.querySelector('.tip-percent-btns').addEventListener('click', (e)=> {
    if (e.target.classList.contains('tip-btn-15')) {
        tipPercent = 15;
        console.log(tipPercent)
    }
    if (e.target.classList.contains('tip-btn-18')) {
        tipPercent = 18;
        console.log(tipPercent);
    }
    if (e.target.classList.contains('tip-btn-20')) {
        tipPercent = 20
        console.log(tipPercent);
    }
    if (e.target.classList.contains('tip-btn-25')) {
        tipPercent = 25
        console.log(tipPercent);
    }
});



function Calculation() {
    let tipAmount = Number(billAmount.value) * (tipPercent / 100);
    let totalAmount = tipAmount + Number(billAmount.value);
    let perPerson = (totalAmount / splitInput.value) || 0;

    console.log(`Total Bill: ${billAmount.value}`);
    console.log(`Tip amount: ${Math.round(tipAmount)}`);
    console.log(`Total Amount: ${Math.round(totalAmount)}`);
    console.log(`Split into: ${splitInput.value} Per Person: ${Math.round(perPerson)}`);

    document.querySelector('.span-2').innerText = `$${Math.round(tipAmount).toLocaleString()}`;
    document.querySelector('.span-4').innerText = `$${Math.round(totalAmount).toLocaleString()}`;
    document.querySelector('.span-6').innerText = `$${Math.round(perPerson).toLocaleString()}`;
    document.querySelector('.summary-span').innerText = `${tipPercent.toLocaleString()}%`;
    document.querySelector('.summary-split').innerText = `${splitInput.value || 1}`;
    document.querySelector('.summary-amount').innerText = `$${totalAmount.toLocaleString()}`;
};

setInterval(()=> {
    console.clear();
    Calculation();
});
