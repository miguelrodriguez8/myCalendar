
function fetchTasks(){
    // create a GET AJAX request to /api/tasks *VERY IMPORTANT TO MEMORIZE*
    $.ajax({
        url:'/api/tasks',
        type:'GET',
        success: res => {
            console.log(res);
            for(let i=0; i< res.length; i++) {
                displayTask(res[i]);

            }
        },
        error: details => {
            console.log("Error", details);
        }
    //console log the response of the server

    });

}    

function displayTask(task){
    var container =$("#tasks");

    var syntax = `
        <div class='task'>
            <i class="far fa-circle check"></i> 
            <div class='task-content'>
                <h5 class='task-title'>${task.title}</h5>
                <label class='task-notes'>${task.notes}</label>
            </div>
            <i class='fas fa-star important'></i>
        </div>
    `;

    container.append(syntax);
}

function register() {
    //get values from the form
    let title = $("#txtTitle").val();
    let notes = $("#txtNotes").val();
    let imp = $("#chkImportant").is(":checked");

    //validation

    if(title.length < 5) {
        alert("Please verify the Title");
        return;
    }


    // create an object

    let task = { 
        title: title,
        notes: notes,
        important: imp
    };
    console.log(task);

    // send the object to BackEnd
    $.ajax({
        type:'POST',
        url:'/api/createTask',
        data: JSON.stringify(task),
        contentType: 'application/json',
        success: res => {
            console.log("Server says", res);
            displayTask(res);

            // opc 1 = get all the tasks and render them again
        },
        error: details => {
            console.log("Error", details);
        }
    });
    // clear form
}

function init() {
    console.log("MyCalendar page");

    //setup events
    $("#btnSave").click(register);

    fetchTasks();
}


window.onload = init;