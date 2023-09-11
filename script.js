document.addEventListener("DOMContentLoaded", function () {
    const currentDay = document.querySelector(
      '[data-testid="currentDayOfTheWeek"]'
    );
    const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
  
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
  
    const currentUTCDay = daysOfWeek[currentDate.getUTCDay()];
    currentDay.textContent = currentUTCDay;
  
    function updateCurrentTime() {
      const currentUTCTimeMillis = Date.now();
      currentTime.textContent = currentUTCTimeMillis;
    }
  
    updateCurrentTime();
  
    setInterval(updateCurrentTime, 1000);
  });
  