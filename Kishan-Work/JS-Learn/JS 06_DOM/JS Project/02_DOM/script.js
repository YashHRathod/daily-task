const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height <= 0 || height === undefined || isNaN(height))
    {
        result.textContent = 'Enter Valid height';
    }
    else if(weight <= 0 || weight === undefined || isNaN(weight))
    {
        result.textContent = "Enter Valid Weight";
    }
    else 
    {
        const bmi = ((weight/((height*height)/10000)).toFixed(2));
        console.log(`BMI : ${bmi}`);
        result.outerHTML = `<p>BMI : ${bmi} <br> ${bmi < 18.6 ? 'Under Weight' : bmi > 24.9 ? 'Over Weight' : 'Normal Range'}</p>`
    }
});