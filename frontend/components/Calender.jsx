import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Calender.css';
import streak from '../DS/streak';


const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formatDate = (day, month, year) => {
    // Convert to dd-mm-yy format
    return `${day.toString().padStart(2, '0')}-${(month + 1).toString().padStart(2, '0')}-${year.toString().slice(-2)}`;
  };

  const renderCalendar = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const calendarDates = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDates.push(<span key={`empty-${i}`}></span>);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const dateStr = formatDate(i, month, year);
      const hasStreak = streak.includes(dateStr);

      // Debugging information
      console.log(`Date: ${dateStr}, Has Streak: ${hasStreak}`);

      const today = new Date();
      const isToday =
        i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        
      calendarDates.push(
        <span key={i} className={`calendar-date ${hasStreak ? 'streak' : ''} ${isToday ? 'today' : ''}`}>
          {i}
        </span>
      );
    }

    return calendarDates;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(prevYear => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(prevYear => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  };

  useEffect(() => {
    renderCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  return (
    <div className="calender-premium-sp mt-4">
      <div className="calendar-container">
        <div className="calendar-header">
          <Button variant="light" id="prev" aria-label="Prev" onClick={handlePrevMonth}>
            &lt;
          </Button>
          <div className="month-year">
            <span id="month">{months[currentMonth]}</span> <span id="year">{currentYear}</span>
          </div>
          <Button variant="light" id="next" aria-label="Next" onClick={handleNextMonth}>
            &gt;
          </Button>
        </div>
        <div className="calendar-body">
          <div className="calendar-weekdays">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          <div className="calendar-dates" id="calendar-dates">
            {renderCalendar(currentMonth, currentYear)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
