const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
tasks = document.querySelectorAll('.levels');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function() {
        draggedItem = item;
        console.log("inside dragstart");
        setTimeout(function() {
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', function() {
        console.log("inside dragged");
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);

        // getting the count of tasks on diff sets
        var tasksCount = [];
        for (let i = 0; i < tasks.length; i++) {
            console.log(tasks[i].childElementCount - 2);
            tasksCount.push(tasks[i].childElementCount - 2);
        }

        document.getElementById("todo-count").textContent = tasksCount[0];
        document.getElementById("inprogress-count").textContent = tasksCount[1];
        document.getElementById("codereview-count").textContent = tasksCount[2];
        document.getElementById("intesting-count").textContent = tasksCount[3];
        document.getElementById("done-count").textContent = tasksCount[4];
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function(e) {
            console.log("inside dragover");
            e.preventDefault();
        });

        list.addEventListener('dragenter', function(e) {
            console.log("inside dragcenter");
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        list.addEventListener('dragleave', function(e) {
            console.log("inside dragleave");
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('drop', function(e) {
            console.log("inside drop");
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        });
    }
}