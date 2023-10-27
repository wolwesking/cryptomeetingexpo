function toggleButton() {

  //declaring variables
  let button = document.querySelector('.menu-button');
  let menu = document.querySelector('.menu');

  //Action
  button.classList.toggle('active');
  menu.classList.toggle('slide');
}

//Counter
// Get the target date and time
const targetDate = new Date('2023-09-25T18:30:00+04:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = targetDate - currentDate;

  // Check if the target date has passed
  if (remainingTime <= 0) {
    clearInterval(countdownTimer);
    // Display a message or perform any desired action when the countdown is finished
    document.getElementById('countdown').innerHTML = 'Countdown Finished!';
    return;
  }

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

// Run the initial countdown update
updateCountdown();

