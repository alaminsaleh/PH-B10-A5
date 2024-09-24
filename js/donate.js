// Noakhali JS
document.getElementById('donate-noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = getInputFieldValueById('input-noakhali-amount');

    if (isNaN(addAmount) || addAmount <= 0) {
        alert('Wrong input! Please try again.');
        return;
    }

    const balance = getTextFieldValueById('my-balance');
    if (balance >= addAmount) {
        const noakhaliBalance = getTextFieldValueById('noakhali-balance');
        console.log('Noa', noakhaliBalance);
        const myNewBalance = balance - addAmount;
        const noakhaliNewBalance = addAmount + noakhaliBalance;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

        console.log('Noakhali Bal', noakhaliBalance);
        // modal
        document.getElementById('success-modal').classList.add('modal-open');

       // noakhali call
       createTransactionDiv(noakhaliNewBalance, 'Noakhali-2024');
    }
    else {
        alert('You have no sufficient balance');
    }
});

// Feni JS
document.getElementById('donate-feni-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = getInputFieldValueById('input-feni-amount');

    if (isNaN(addAmount) || addAmount <= 0) {
        alert('Wrong input! Please try again.');
        return;
    }

    const balance = getTextFieldValueById('my-balance');
    if (balance >= addAmount) {
        const feniBalance = getTextFieldValueById('feni-balance');

        const myNewBalance = balance - addAmount;
        const feniNewBalance = addAmount + feniBalance;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('feni-balance').innerText = feniNewBalance;

        // pop-up modal
        document.getElementById('success-modal').classList.add('modal-open');

       // Add Feni history
       createTransactionDiv(feniNewBalance, 'Feni-2024');
    }
    else {
        alert('You have no sufficient balance');
    }
});

// Quota movement
document.getElementById('donate-quota-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = getInputFieldValueById('input-quota-amount');

    if (isNaN(addAmount) || addAmount <= 0) {
        alert('Wrong input! Please try again.');
        return;
    }

    const balance = getTextFieldValueById('my-balance');
    if (balance >= addAmount) {
        const quotaBalance = getTextFieldValueById('quota-balance');

        const myNewBalance = balance - addAmount;
        const quotaNewBalance = addAmount + quotaBalance;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('quota-balance').innerText = quotaNewBalance;

        // modal
        document.getElementById('success-modal').classList.add('modal-open');

         // Add Quota history
         createTransactionDiv(quotaNewBalance, 'Quota Movement');
    }
    else {
        alert('You have no sufficient balance');
    }
});

// event handler of the modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('success-modal').classList.remove('modal-open');
});

