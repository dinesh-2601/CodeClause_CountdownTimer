let countdown;
const startBtn = document.getElementById("start-btn");
const dateTimeInput = document.getElementById("datetime-picker");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  clearInterval(countdown);

  const userDate = new Date(dateTimeInput.value);
  const now = new Date();

  if (!dateTimeInput.value) {
    message.textContent = "Please select a valid date and time.";
    return;
  }

  if (userDate <= now) {
    message.textContent = "Please select a future date.";
    return;
  }

  message.textContent = "";

  countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = userDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "<h2>Time's up!</h2>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
});
