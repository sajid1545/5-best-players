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

        let orderList = document.getElementById('order-list-players');
        for (let i = 0; i < selectedPlayers.length; i++) {
            let li = document.createElement('li');

            li.innerHTML = selectedPlayers[i].playerName;

            selectedPlayersContainer.appendChild(li);
        }

        button.setAttribute('disabled', true);
        button.style.backgroundColor = '#758283';
    });
}

// ====================================BUDGET CALCULATION=========================================

document.getElementById('calculate-btn').addEventListener('click', function () {
    let playerFieldAmount = getInputFieldValueById('per-player-field');

    let playerExpenses = playerFieldAmount * 5;

    setTextElementValueById('player-expense', playerExpenses);
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    let managerFieldAmount = getInputFieldValueById('manager-field');
    let coachFieldAmount = getInputFieldValueById('coach-field');
    let playerExpenseAmount = getTextElementValueById('player-expense');

    let totalAmount = managerFieldAmount + coachFieldAmount + playerExpenseAmount;
    setTextElementValueById('total-amount', totalAmount);
});

console.log(selectedPlayers);
