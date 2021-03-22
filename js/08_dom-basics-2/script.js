(function () {
    // создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        appTitle.classList.add('text-center', 'mb-5');
        return appTitle;
    }

    // создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        // задаём стили форме
        form.classList.add('input-group', 'mb-4', 'mt-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';

        // ... кнопке добавить
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        button.setAttribute('disabled', true);

        // проверяем инпут на содержание и откючаем/включаем кнопку
        input.addEventListener('input', function () {
            button.removeAttribute('disabled');
            if (input.value === '') {
                button.setAttribute('disabled', true);
            }
        });

        // добавляем к форме кнопку и инпут
        buttonWrapper.append(button);

        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    // создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        list.id = 'list';
        return list;
    }

    // создаем и возвращаем элемент
    function createTodoItem(object_name) {
        let item = document.createElement('li');
        // кнопки помещаем в элемент, который покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // устанавливаем стили для элемента списка, а также для размещения кнопок в правой его части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        // берём текстовую часть задания из имени
        if (typeof object_name === "object") {
            item.textContent = object_name.name;
        } else {
            item.textContent = object_name;
        }

        // задаём стили кнопки
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        // вкладываем кнопки в отдельный элемент, чтобы они объединились в одни блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    // создаем страницу
    function createTodoApp(container, title = 'Список дел', todoObjects = null, session_array) {

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        // добавляем заголовок, форму и список
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // массив в котором объекты дел
        let session_object = [];
        // создаём объект с массивом дел
        let session = {
            session_array: session_object,
        };
        // берём объект дела из массива
        let object_task = localStorage.getItem(session_array);

        // проверяем наличие в localstorage
        if (localStorage.length > 0 && object_task != null) {
            // возвращаем в переменную ключи и значения из локал
            let entries = Object.entries(JSON.parse(object_task));
            // делаем перебор полученных ключа и значений
            for (let [key, value] of entries) {
                for (let el of value) {
                    // вносим название задания в наш массив, после перезагрузки задание будет находиться в начале списка
                    session_object.push(el);
                }
                if (session_object.length > 0) {
                    for (let element of session_object) {
                        let todoItem = createTodoItem(element);
                        todoList.append(todoItem.item);
                        if (element.done === true) {
                            todoItem.item.classList.toggle('list-group-item-success');
                        }

                        // добавляем обработчики на кнопки по клику
                        todoItem.doneButton.addEventListener('click', function () {
                            todoItem.item.classList.toggle('list-group-item-success');
                            element.done = !element.done;
                            localStorage.setItem(session_array, JSON.stringify(session));
                        });

                        todoItem.deleteButton.addEventListener('click', function () {
                            if (confirm('Вы уверены?')) {
                                todoItem.item.remove();
                                // по индексу из массива удаляем элемент и сохраняем в локал
                                let indexEl = session_object.indexOf(element);
                                session_object.splice(indexEl, 1);
                                localStorage.setItem(session_array, JSON.stringify(session));
                            }
                        });
                    }
                }
            }
        }
        // if (todoObjects != null) {
        //     for (let todoObject of todoObjects) {
        //         let todoItem = createTodoItem(todoObject);
        //         // создаем и добавляем в список новое дело с названием из поля для ввода
        //         todoList.append(todoItem.item);
        //         // обнуляем значение в поле, чтобы не пришлось стирать его вручную
        //         todoItemForm.input.value = '';
        //         todoItemForm.button.setAttribute('disabled', true);
        //         if (todoObject.done === true) {
        //             todoItem.item.classList.toggle('list-group-item-success');
        //         }
        //         // добавляем обработчики на кнопки
        //         todoItem.doneButton.addEventListener('click', function () {
        //             todoItem.item.classList.toggle('list-group-item-success');
        //         });
        //         todoItem.deleteButton.addEventListener('click', function () {
        //             if (confirm('Вы уверены?')) {
        //                 todoItem.item.remove();
        //             }
        //         });
        //     }
        // }

        // браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {
            // отменяем перезагрузки страницы при отправке
            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);

            // добавляем обработчики на кнопки
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
                let arrUl = Array.from(document.getElementsByTagName('li'));
                let parentEl = this.parentElement.parentElement;
                let indexEl = arrUl.indexOf(parentEl);
                session_object[indexEl].done = !session_object[indexEl].done;
                localStorage.setItem(session_array, JSON.stringify(session));
            });

            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                    let indexEl = session_object.indexOf(object_saved);
                    session_object.splice(indexEl, 1);
                    localStorage.setItem(session_array, JSON.stringify(session));
                }
            });

            // добавляем в предмет списка и локал значение инпута, done и страницы
            let strReplaced = todoItem.item.textContent.replace("ГотовоУдалить", "");
            let object_saved = {
                'name': strReplaced,
                'done': false,
            };
            session_object.unshift(object_saved);
            todoList.prepend(todoItem.item);

            // обнуляем значение в поле, кнопку и локал
            todoItemForm.input.value = '';
            todoItemForm.button.setAttribute('disabled', true);
            localStorage.setItem(session_array, JSON.stringify(session));
        });
    }
    window.createTodoApp = createTodoApp;
})();