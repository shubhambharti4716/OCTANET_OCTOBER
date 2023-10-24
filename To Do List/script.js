let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnSort = $("#btnSort");
let btnCleanup = $("#btnCleanup");
let ulTasks = $("#ulTasks");

function addItem() {

    let listItem = $('<li>', {'class': 'list-group-item', text: inpNewTask.val()})

    //setting the class of list item to disabled (on click)
    listItem.click(() => {
        listItem.toggleClass('done')
    })

    //appending the task to the list
    ulTasks.append(listItem)

    //resetting the input box to empty string
    inpNewTask.val('')

    //for btnSort and btnCleanup
    toggleInputButtons()
}

function clearDone() {
    $('#ulTasks .done').remove()

    //for btnSort and btnCleanup
    toggleInputButtons()
}

function sortTask() {
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

//Handling "enter" keypress
inpNewTask.keypress((key) => {
    if (key.which == 13) addItem()
})

inpNewTask.on('input', toggleInputButtons)

btnAdd.click(() => addItem());

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})

btnCleanup.click(() => clearDone())

btnSort.click(() => sortTask())