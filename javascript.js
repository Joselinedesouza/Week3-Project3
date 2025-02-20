//Attende che tutto il doc HTML sia completamente caricato prima di
//eseguire il codice.
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("nuovo-esercizio");
  const Aggiungi = document.getElementById("Aggiungi");
  const taskList = document.getElementById("esercizio-nuovo");

  //trim: elimina gli spazi vuoti, iniziali e finali.

  Aggiungi.addEventListener("click", function () {
    const taskText = inputField.value.trim();

    if (taskText === "") {
      alert("fai attenzione, stronza");
      return;
    }

    // Crea un nuovo <li> che rappresenterà il task
    const taskItem = document.createElement("li");
    // gli assegna la classe css "task" per lo stile
    taskItem.classList.add("task");
    const taskLabel = document.createElement("span");
    // inserisce nel <li> il testo che ho aggiunto dopo aver cliccato aggiungi
    taskItem.textContent = taskText;

    // Aggiunge un evento al click
    taskItem.addEventListener("click", function () {
      // quando viene cliccato, alterna toggle() la classe "completed"(aggiunge se non c'è, rimuove se c'è)
      // aggiungere classe nel css per barrare e opacizzare
      taskItem.classList.toggle("completed");
    });

    // Creiamo un nuovo <button> (deleteButton)
    const deleteButton = document.createElement("button");
    // Impostiamo il testo "X" per indicare la cancellazione
    deleteButton.textContent = "X";
    //Gli assegnamo la classe CSS "DeleteButton" per lo stile
    deleteButton.classList.add("deleteButton");

    //Aggiungiamo un evento al click del pulsante X (deleteButton)
    deleteButton.addEventListener("click", function (e) {
      // e.stopPropagation(); -> Evita che cliccando su "X" il task venga anche segnato come completato
      e.stopPropagation();
      //remove() -> rimuove il task dalla lista
      taskItem.remove();
    });
    //Aggiungiamo il pulsate "X" all'elemento li
    taskItem.appendChild(deleteButton);
    //Stiamo aggiugedo il LI alla lista UL
    taskList.appendChild(taskItem);
    //Svuotiamo il campo Input, dopo aver aggiunto un task.
    inputField.value = "";
  });
});
