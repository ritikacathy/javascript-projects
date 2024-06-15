function UserInput(){
    event.preventDefault() // prevent from submitting the refreshing the page
    const task = document.getElementById('TextInput').value; // get user input
    const createEle = document.createElement('li') // create list element
    const Text_node = document.createTextNode(task); // create node to read input as plain text and not html
    createEle.appendChild(Text_node); // append the node to list element
    document.getElementById('Listed').appendChild(createEle); // append the list element to html list
    document.getElementById('TextInput').value = ''; // after adding input, leave the text box empty
}

// This prevents any potential HTML or script injection, which is a common security vulnerability.

document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('AddToList').addEventListener('click', UserInput);
});