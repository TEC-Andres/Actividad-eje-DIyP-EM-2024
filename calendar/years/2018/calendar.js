const year = 2018; 
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonth = 0;
const calendarBody = document.getElementById("calendar-body");
const prevButton = document.getElementById("prev-month");
const nextButton = document.getElementById("next-month");
const yearDisplay = document.getElementById("year-display");

/* The actual good structure that took way too long to maintain */
/* MONTH - DAY */
const events = {
  "0-1": { 
    title: "Placeholder",
    link: "placeholder.html"
  }
};

const savedMonth = localStorage.getItem("currentMonth");
if (savedMonth !== null) {
  currentMonth = parseInt(savedMonth, 10); // Parse it to an integer
}

updateCalendar();

function updateCalendar() {
  yearDisplay.textContent = `${months[currentMonth]} ${year}`;
  calendarBody.innerHTML = "";

  const firstDay = new Date(year, currentMonth, 1).getDay();
  const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      let appendEvent = false;
      let eventKey = "";
      let eventData = null;

      if (i === 0 && j < (firstDay || 7) - 1) {
      } else if (date > daysInMonth) {
      } else {
        const dayNumber = document.createElement("div");
        dayNumber.textContent = date;
        dayNumber.className = "day-number";
        cell.appendChild(dayNumber);

        eventKey = `${currentMonth}-${date}`;
        if (events[eventKey]) {
          appendEvent = true;
          eventData = events[eventKey];
        }
        date++;
      }

      if (appendEvent) {
        const event = document.createElement("a");
        event.textContent = eventData.title;
        event.href = eventData.link;
        event.className = "event";
        cell.appendChild(event);
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }

  prevButton.disabled = currentMonth === 0;
  nextButton.disabled = currentMonth === 11;
}

prevButton.addEventListener("click", () => {
  if (currentMonth > 0) {
    currentMonth--;
    localStorage.setItem("currentMonth", currentMonth);
    updateCalendar();
  }
});

nextButton.addEventListener("click", () => {
  if (currentMonth < 11) {
    currentMonth++;
    localStorage.setItem("currentMonth", currentMonth);
    updateCalendar();
  }
});
