document.addEventListener('DOMContentLoaded', function() {
    const calendarDates = document.getElementById('calendar-dates');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    function renderCalendar(month, year) {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        monthElement.textContent = months[month];
        yearElement.textContent = year;

        calendarDates.innerHTML = '';

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDates.innerHTML += `<span></span>`;
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            const dateElement = document.createElement('span');
            dateElement.textContent = i;

            const today = new Date();
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dateElement.classList.add('today');
            }

            calendarDates.appendChild(dateElement);
        }
    }

    prevButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});

