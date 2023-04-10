const bmiForm = document.querySelector(`.BMI_wrapper`)
const unitForm = document.querySelector(`.Unit_wrapper`)

const checkBoxBMI = document.querySelector('#checkBoxBMI')
const checkBoxUnit = document.querySelector('#checkBoxUnit')

const generatorButton = document.querySelector('#GenButton')

generatorButton.addEventListener('click', click = () => {
        if(checkBoxBMI.checked==true){
            unitForm.innerHTML = ``
            bmiForm.innerHTML = `<form class="form_class">
            <p>Waga</p>
            <input><p>Wzrost</p><input><p>Wiek</p>
            <input><button>Prześlij</button>
            </form>
            <div class="form_results">BMI RESULTS</div>`
            }
         if (checkBoxUnit.checked==true) {
                bmiForm.innerHTML = ``
                unitForm.innerHTML = `<form class="form_class">
                <p>Kg</p>
                <input><p>Odległość</p><input><p>dystans</p>
                <input><button>Prześlij</button>
                </form>`}
})






// js_button.addEventListener('click', click = () => {
    // async function logJSONData() {
        //     const response = await fetch("https://restcountries.com/v3.1/all");
        //     const jsonData = await response.json();
        //     console.log(jsonData)
        // }
        
        // console.log(logJSONData());
        
        // })
        