!function(){var e=document.querySelector(".BMI_wrapper"),n=document.querySelector(".Unit_wrapper"),t=document.querySelector("#checkBoxBMI"),r=document.querySelector("#checkBoxUnit");document.querySelector("#GenButton").addEventListener("click",click=function(){1==t.checked&&(n.innerHTML="",n.classList.add("hidden"),e.classList.remove("hidden"),e.innerHTML='<form class="form_class">\n            <p>Waga</p>\n            <input><p>Wzrost</p><input><p>Wiek</p>\n            <input><button>Prześlij</button>\n            </form>\n            <div class="form_results">BMI RESULTS</div>'),1==r.checked&&(e.innerHTML="",e.classList.add("hidden"),n.classList.remove("hidden"),n.innerHTML='<form class="form_class">\n                <p>Kg</p>\n                <input><p>Odległość</p><input><p>dystans</p>\n                <input><button>Prześlij</button>\n                </form>\n                <div class="form_results">Unit Results</div>')})}();
//# sourceMappingURL=index.a0bf9a09.js.map
