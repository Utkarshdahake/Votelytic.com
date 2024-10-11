document.addEventListener('DOMContentLoaded', (event) => {
    const startVotingButton = document.getElementById('startVoting');
    const votingForm = document.getElementById('votingForm');

    if (startVotingButton) {
        startVotingButton.addEventListener('click', () => {
            window.location.href = 'candidates.html';
        });
    }

    if (votingForm) {
        votingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // In a real-world scenario, you would handle form submission here
            // e.g., sending data to a server.
            window.location.href = 'confirmation.html';
        });
    }
});
const firebaseConfig = {
    apiKey: "AIzaSyBoA4rmV62ivdOc-RNszXb-2XmqRE6PfZg",
    authDomain: "votelytic.firebaseapp.com",
    databaseURL: "https://votelytic-default-rtdb.firebaseio.com",
    projectId: "votelytic",
    storageBucket: "votelytic.appspot.com",
    messagingSenderId: "925947044783",
    appId: "1:925947044783:web:3fb93d98b1ddc4f7e9c55a"
  };

  firebase.initializeApp(firebaseConfig);
