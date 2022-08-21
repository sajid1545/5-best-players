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
            li.innerHTML = selectedPlayers[i].playerName;
            selectedPlayersContainer.appendChild(li);
        }

        button.setAttribute('disabled', true);
    });
}

// function addNewList() {
//     let selectedPlayersContainer = document.getElementById('selected-players-container');
//     // selectedPlayers.textContent = '';

//     for (let i = 0; i < selectedPlayers.length; i++) {
//         let li = document.createElement('li');
//         li.innerText = selectedPlayers[i].playerName;
//         selectedPlayersContainer.appendChild(li);
//     }
// }

// function addToCard(element) {
//     let playerName = element.parentNode.children[0].innerText;
//     let player = {
//         playerName: playerName,
//     };
//     selectedPlayers.push(player);
//     element.setAttribute('disabled', true);
//     addNewList();
// }
