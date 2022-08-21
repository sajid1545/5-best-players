// ===================================SELECTING PLAYERS==========================================
let selectedPlayers = [];

let buttons = document.querySelectorAll('.button-select');
for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerName = button.parentNode.children[0].innerText;
        let player = {
            playerName: playerName,
        };

        selectedPlayers.push(player);

        let selectedPlayersContainer = document.getElementById('selected-players-container');
        selectedPlayersContainer.textContent = '';

        for (let i = 0; i < selectedPlayers.length; i++) {
            let li = document.createElement('li');
            li.classList = 'list';
            li.innerHTML = selectedPlayers[i].playerName;
            selectedPlayersContainer.appendChild(li);
        }

        button.setAttribute('disabled', true);
        button.style.backgroundColor = '#758283';
        let ol = document.querySelector('.order-list-players');
        if (ol.childNodes.length > 5) {
            removeLastChild('selected-players-container');
            alert('You cant add More than 5  players');
        }
    });
}

// ====================================BUDGET CALCULATION=========================================

document.getElementById('calculate-btn').addEventListener('click', function () {
    let playerFieldElement = document.getElementById('per-player-field');
    let playerFieldAmount = getInputFieldValueById('per-player-field');
    let ol = document.querySelector('.order-list-players');
    let numberOfPlayersSelected = ol.childNodes.length;

    if (isNaN(playerFieldAmount)) {
        alert('Enter a valid Amount');
        playerFieldElement.value = '';
        return;
    } else if (selectedPlayers.length == 0) {
        alert('You have to choose players before calculating the cost');
        playerFieldElement.value = '';

        return;
    }

    let playerExpenses = playerFieldAmount * numberOfPlayersSelected;

    setTextElementValueById('player-expense', playerExpenses);
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    let managerFieldElement = document.getElementById('manager-field');
    let coachFieldElement = document.getElementById('coach-field');
    let managerFieldAmount = getInputFieldValueById('manager-field');
    let coachFieldAmount = getInputFieldValueById('coach-field');
    if (isNaN(managerFieldAmount)) {
        alert('Enter a valid Amount');
        managerFieldElement.value = '';
        coachFieldElement.value = '';
        return;
    }

    if (isNaN(coachFieldAmount)) {
        alert('Enter a valid Amount');
        coachFieldElement.value = '';
        return;
    }

    let playerExpenseAmount = getTextElementValueById('player-expense');

    // validation

    let totalAmount = managerFieldAmount + coachFieldAmount + playerExpenseAmount;
    setTextElementValueById('total-amount', totalAmount);
});
