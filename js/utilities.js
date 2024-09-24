// Input function
function getInputFieldValueById(id){
    const addInput = document.getElementById(id).value;
    const addAmount = parseFloat(addInput);
    return addAmount;
}

// Text Field function
function getTextFieldValueById(id){
    const accountBalance = document.getElementById(id).innerText;
    const balance = parseFloat(accountBalance);
    return balance;
}

// Show the section function
function showSectionById(id){
    // hide the section
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');

    // show the section
    document.getElementById(id).classList.remove('hidden');
}

// History show function
function createTransactionDiv(place, amount) {
    // Create div element
    const div = document.createElement('div');
    div.classList.add('text-left', 'w-[50%]', 'p-3', 'mx-auto', 'h-[80px]', 'border', 'border-5', 'border-gray-300', 'rounded-lg');
  
    // Get the current date and time
    const currentDate = new Date();
  
    // Format the inner HTML with the donation message and the date
    div.innerHTML = `
      <p class="font-bold">${amount} Taka is Donated for ${place}, Bangladesh</p>
      <p>Date: ${currentDate}</p>
    `;
  
    // Append the div
    document.getElementById('history-container').appendChild(div);
  }
