function getAndupdate(){
    console.log("Updating list...")

        // Assigning IDs to taskTitle and taskDescription
        taskTitle = document.getElementById("taskTit").value;
        taskDescription = document.getElementById("taskDesc").value;

        // Adding task data in in the local storage.
        if(localStorage.getItem('itemsJson')==null){

          // creating Array to add values inside it
          itemJsonArray = []
          itemJsonArray.push([taskTitle,taskDescription])

          // Adding array value to the localstorage
          localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))

        }
        else{

          itemJsonArraystr = localStorage.getItem('itemsJson');
          itemJsonArray = JSON.parse(itemJsonArraystr)
          itemJsonArray.push([taskTitle,taskDescription])

          // Adding array value to the localstorage
          localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
        }
        update();
  }

    // A function that updates the list
      function update(){

        // Assigning IDs to taskTitle and taskDescription
        taskTitle = document.getElementById("taskTit").value;
        taskDescription = document.getElementById("taskDesc").value;

        // Adding task data in in the local storage.
        if(localStorage.getItem('itemsJson')==null){

          // creating Array to add values inside it
          itemJsonArray = []

          /** We removed the below given line because it was inserting blank values 
              into the task list & not letting task getting deleted properly
              itemJsonArray.push([taskTitle,taskDescription])
           **/

          // Adding array value to the localstorage
          localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))

        }

        // If the list is not empty parse it with some with itemsJson
        else{

          itemJsonArraystr = localStorage.getItem('itemsJson');
          itemJsonArray = JSON.parse(itemJsonArraystr)
        }
      
         // Populating table body
    tableBody = document.getElementById('tableBody')
    // creating a string  'str' and populating table data inside it.
    let str = ''
    // Using for each loop to populate all(each) element of the table in one loop
    itemJsonArray.forEach((element,index) => {
      str +=
      `
      <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary"  onclick="deleted(${index})">Delete</button></td>
          </tr>
      `
    });
    // Assigning str value to table
    tableBody.innerHTML = str;
    }

    // Adding event listener on add task button
    add = document.getElementById("add");
    add.addEventListener("click",getAndupdate)
    update();

    // function for delete button
    function deleted(itemIndex){
      console.log(itemIndex,"Item deleted")
      // Retrieveing the item and its type from string to array
      itemJsonArraystr = localStorage.getItem('itemsJson');
      itemJsonArray = JSON.parse(itemJsonArraystr);

      // deleting the index item using splice function
      itemJsonArray.splice(itemIndex,1);

      // Updating the local storage
      localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      update();
    }

      // Function to clear the whole list at once
      function clearStorage(){
        if (confirm("Do you really want to clear?")){
        console.log("clear list")
        localStorage.clear();
        update();
        }
      }