// Creating a blank string
let string = "";

// Creating one variable to take all the button inputs
let buttons = document.querySelectorAll('button');

// creating an Array from buttons for each buttonPress
Array.from(buttons).forEach((buttonPress)=>{

    // adding event listener for every button pressed
    // (retirieved with the help of for each loop)
    // Param -> 'click' -> Event type, 
    // (e) -> Event itself(Like the button which was pressed)
    buttonPress.addEventListener('click',(e)=>{

        // If user has pressed '=' then evaluate the expression
        // using inbuilt eval() function and update input field value
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }

        // If users press 'C' to clear the field
        else if(e.target.innerHTML == 'C'){
            // Make string blank & print it on input field
            string = "";
            document.querySelector('input').value=string;
        }
        
        // For moving button pressed value into input field
        else{
        // 'e' stores the particular event that occured
        // The button which was pressed
        console.log(e.target);

        // Adding the target value to empty string
        // And then adding that string value to the input field
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string
        }
    })
})