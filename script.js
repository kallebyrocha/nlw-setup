const form = document.querySelector("form")
const nlwSetup = new NLWSetup (form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add (){
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já incluso")
        return
    }
    alert('Adicionado com sucesso')
    nlwSetup.addDay(today)
}

function save (){
    localStorage.setItem('NLWSetup@Habits', JSON.stringify(nlwSetup.data))
}

//const data = {
//   run: ["01-01","01-02","01-06"],
//   takePills: ["01-03","01-04"],
//   journal: ["01-04"],
//   play: ["01-05","01-07","01-08","01-09"],
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits"))

nlwSetup.setData(data)
nlwSetup.load()