// Init Tasks module
const tasks = Tasks.getInstance();

// Init UI module
const ui = UI;

// Init Locastorage module
const localstorage = Localstorage;

// Init Notification module
const notification = Notification;

// Init Ovservers
const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTasksObserver = new EventObserver();

// Init elements
const form = document.forms["addTodoItem"];
const inputText = form.elements["todoText"];
const ul = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-btn");

// Subscribe on add task event
addTaskObserver.subscribe(localstorage.update);
addTaskObserver.subscribe(notification.show);
addTaskObserver.subscribe(ui.checkList);

removeTaskObserver.subscribe(localstorage.update);
removeTaskObserver.subscribe(notification.show);
removeTaskObserver.subscribe(ui.checkList);

removeAllTasksObserver.subscribe(localstorage.update);
removeAllTasksObserver.subscribe(notification.show);
removeAllTasksObserver.subscribe(ui.checkList);

window.addEventListener("load", function (e) {
  let ls = localstorage.getTasks();
  if (ls.length) {
    ls.forEach((task) => {
      tasks.addTask(task).then((oneTask) => ui.addTask(oneTask));
    });
  } else {
    ui.checkList();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!inputText.value.trim()) {
    // show error, is-invalid
  } else {
    tasks
      .addTask({ text: inputText.value })
      .then((task) => ui.addTask(task))
      .then(() =>
        addTaskObserver.fire({
          text: "Новая задача добавлена успешно!",
          class: "alert alert-success",
        })
      );
    form.reset().focus();
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-item")) {
    let id = e.target.closest("li").getAttribute("data-id");
    tasks
      .removeTask(id)
      .then(() => ui.deleteTask(id))
      .then(() =>
        removeTaskObserver.fire({
          text: "Задача удалена успешно!",
          class: "alert alert-danger",
        })
      );
  } else if (e.target.classList.contains("edit-item")) {
    e.target.classList.toggle("fa-save");
    let id = e.target.closest("li").dataset.id;
    let span = e.target.closest("li").querySelector("span");

    if (e.target.classList.contains("fa-save")) {
      span.setAttribute("contenteditable", true);
      span.focus();
    } else {
      span.setAttribute("contenteditable", false);
      span.blur();
      editListItem(id, span.textContent);
    }
  }
});

clearBtn.addEventListener("click", function (e) {
  tasks
    .removeAll()
    .then(() => ui.deleteAll())
    .then(() =>
      removeAllTasksObserver.fire({
        text: "Все задачи были успешно удалены!",
        class: "alert alert-warning",
      })
    );
});
