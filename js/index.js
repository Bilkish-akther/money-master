function getInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
function getElementPlaceById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.innerText);
    return inputValue;
}

function getElementById(elementId,totalValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText = totalValue;
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const foodCost = getInputById('foodInput');
    const rent = getInputById('rentInput');
    const cloth = getInputById('clothInput');
    const incomeValue = getInputById('incomeInput');
    let totalExpenses;
    if(incomeValue > 0)
    {
        if(rent <= 0){
            alert('rent expense can not less than or equal 0');
        }
        else if(rent == null)
        {
            alert('give rent amount');
        }
        else if(foodCost <= 0)
        {
            alert('food Cost expense can not less than or equal 0');
        }
        else if(foodCost == null)
        {
            alert('give food Cost amount');
        }
        else if(cloth <= 0)
        {
            alert('cloth Cost expense can not less than or equal 0');
        }
        else if(cloth == null)
        {
            alert('give cloth Cost amount');
        }
        else if(incomeValue < foodCost){
            alert('you do not enough income to buy this expensive food');
        }
        else if(incomeValue < rent){
            alert('you do not enough income rent this expensive room');
        }
        else if(incomeValue < cloth){
            alert('you do not enough income to buy this expensive cloth');
        }
        else if(foodCost > 0 && rent > 0 && cloth > 0){
            totalExpenses = foodCost + rent + cloth;
            if(incomeValue < totalExpenses){
                alert('Expense can not greater than income buddy');
            }
            else{
                getElementById('totalExpense',totalExpenses);
                const balance = incomeValue - totalExpenses;
                getElementById('balance',balance);
            } 
        }
        else{
            alert('fill all the input field');
        }
    }
    else{
        alert('give Income amount');
    }
})

document.getElementById('save-btn').addEventListener('click',function(){
    const incomeAmount = getInputById('incomeInput');
    const savingPercent = getInputById('saveInput');
    if(savingPercent < 0)
    {
        alert('saving percentage can not less than 0');
    }
    else if(savingPercent > 0)
    {
        const balance = getElementPlaceById('balance');
        // const saving = getElementPlaceById('saving');
        if(balance == null){
            alert('balance zero then you can not save any money')
        }
        else if(incomeAmount > 0){
            const savingAmount = (incomeAmount * savingPercent)/100;
            if(savingAmount <= balance){
                getElementById('saving',savingAmount);
                const remainingBalance = balance - savingAmount;
                getElementById('remainBalance',remainingBalance);
            }
            else{
                alert('saving money can not greater than balance');
            }
        }
        else{
            alert('income input fill up please');
        }
    }
    else{
        alert('Percentage never be empty');
    }
})