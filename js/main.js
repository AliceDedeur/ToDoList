const inputName = document.getElementById('input_name');
const selectDev = document.getElementById('select_dev');
const inputDate = document.getElementById('input_date');
const inputImportant = document.getElementById('input_important');
const btnAdd = document.getElementById('btn_add');
const tbodyTable = document.getElementById('liste_taches');

const tasks = [];
const btnSortAsc = document.getElementById('btn_sort_asc');
const btnSortDesc = document.getElementById('btn_sort_desc');

btnAdd.onclick = () => {
    const task = {
        name: inputName.value,
        dev: selectDev.value,
        date: inputDate.valueAsDate,
        important: inputImportant.checked
    };

    tasks.push(task);

    const row = createRow(task);
    
    tbodyTable.append(row);

    inputName.value = null;
    inputDate.value = null;
    selectDev.value = null;
    inputImportant.checked = false;
}   

btnSortAsc.onclick = () => {

    tasks.sort((t1, t2) => t1.date - t2.date); 
    tbodyTable.innerHTML = '';
    for (const t of tasks) {
        tbodyTable.append(createRow(t))
    }
}

btnSortDesc.onclick = () => {
    
    tasks.sort((t1, t2) => t2.date - t1.date);
    tbodyTable.innerHTML = '';
    for (const t of tasks) {
        tbodyTable.append(createRow(t))
    }
}

function createRow(task){
    const row = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdDev = document.createElement('td');
    const tdDate = document.createElement('td');
    const tdAction = document.createElement('td');

    const deleteBtn = document.createElement('button');
    const trashIcon = document.createElement('i');

    if(task.important) 
        row.classList.add('important');
    
    tdName.innerText = task.name;
    tdDev.innerText = task.dev;
    tdDate.innerText = task.date.toLocaleDateString();

    deleteBtn.classList.add('btn_supprimer');
    trashIcon.classList.add('fa', 'fa-trash');
    deleteBtn.onclick = () => {

        row.remove();

        tasks.splice(tasks.indexOf(task), 1);
    }

    deleteBtn.append(trashIcon);
    tdAction.append(deleteBtn);
    row.append(tdName, tdDev, tdDate, tdAction);

    return row
}









