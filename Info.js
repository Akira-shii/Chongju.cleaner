// Liste des surnoms coréens
const koreanNicknames = [
    '빛을 삼킨 그림자 (Shadow that Swallowed Light)', '차가운 불꽃 (Cold Flame)', '눈물의 사냥꾼 (Hunter of Tears)',
    '어둠 속의 번개 (Lightning in the Dark)', '고독한 칼날 (Lonely Blade)', '죽음의 속삭임 (Whisper of Death)',
    '사신의 그림자 (Reaper\'s Shadow)', '밤의 늑대 (Wolf of the Night)', '붉은 안개 (Red Mist)', '절망의 춤 (Dance of Despair)'
];

// Modes de déplacement possibles
const travelModes = ['Car', 'Motorbike', 'Bicycle', 'On Foot', 'Helicopter', 'Boat'];

// Générer des informations aléatoires sur les agents
function generateAgentInfo(id, type) {
    const nickname = koreanNicknames[Math.floor(Math.random() * koreanNicknames.length)];
    const price = (Math.random() * 500 + 500).toFixed(2); // Prix entre 500 et 1000
    const travelMode = travelModes[Math.floor(Math.random() * travelModes.length)];
    return {
        id: id,
        type: type,
        nickname: nickname,
        price: `$${price}`,
        travelMode: travelMode
    };
}

// Affichage des agents
function displayAgents() {
    const container = document.getElementById('agentContainer');
    container.innerHTML = ''; // Effacer le contenu existant

    for (let i = 0; i < 100; i++) {
        const type = i % 2 === 0 ? 'Cleaner' : 'Assassin';
        const agentInfo = generateAgentInfo(`Agent-${i + 1}`, type);

        // Créer l'encadré de l'agent
        const agentDiv = document.createElement('div');
        agentDiv.className = 'agent';
        agentDiv.dataset.id = agentInfo.id;
        agentDiv.innerHTML = `
            <h3>${agentInfo.nickname}</h3>
            <p><b>Type:</b> ${agentInfo.type}</p>
            <p><b>Price:</b> ${agentInfo.price}</p>
            <p><b>Mode of Travel:</b> ${agentInfo.travelMode}</p>
        `;
        agentDiv.addEventListener('click', () => openReservationModal(agentInfo));
        container.appendChild(agentDiv);
    }
}

// Ouvrir le modal pour la réservation
function openReservationModal(agentInfo) {
    const modal = document.getElementById('reservationModal');
    modal.style.display = 'block';

    const form = document.getElementById('reservationForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        alert(`Reservation for ${agentInfo.nickname} has been successfully made!`);
        modal.style.display = 'none';
    };
}

// Fermer le modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('reservationModal').style.display = 'none';
});

// Initialiser l'affichage des agents
displayAgents();
