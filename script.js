const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp =  tempSelected[tempSelected.selectedIndex].value;
    
    const celTofah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahTocel = (fah) => {
        let celsius = Math.round((fah - 32 ) * 5/9);
        return celsius;
    }

    let result;

    if (valueTemp == 'cel'){
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`
    }
    
    else if (valueTemp == 'fah'){
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`
    }
}