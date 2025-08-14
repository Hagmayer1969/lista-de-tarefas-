

// estado inicial da aplicação
const tarefas = ["Estudar React", "Estudar Java", "Estudar CSS"];

function add(){
  const input=document.querySelector("input");
  const tarefa = input.value;
  tarefas.push(tarefa);
  input.value="";
  render ();
 }
 function render () {
  const ul=document.querySelector("ul");
  ul.innerHTML = "";
tarefas.forEach(function (tarefa) {
  const li=document.createElement("li");
  li.innerText=tarefa;
  ul.appendChild (li)
});
 }
 render ()
