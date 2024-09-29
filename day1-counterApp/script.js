function Counter() {
    const minusBtn = document.getElementById('decrement');
    const plusBtn = document.getElementById('increment');
    const count = document.querySelector('.count');
    const inputField = document.querySelector('.ct');
    const resetBtn=document.querySelector('.resetBtn');

    plusBtn.addEventListener('click', (e) => {
        const accordingToInput = parseInt(inputField.value) || 0; // Default to 0 if input is NaN
        const ct = parseInt(count.innerText);
        count.innerText = ct + accordingToInput;
    });

    minusBtn.addEventListener('click', (e) => {
        const accordingToInput = parseInt(inputField.value) || 0; // Default to 0 if input is NaN
        const ct = parseInt(count.innerText);
        count.innerText = ct - accordingToInput;
    });
    resetBtn.addEventListener('click',()=>{
        count.innerText=0;
    })
}

Counter();
