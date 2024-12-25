import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = ({ communications }) => {
    const events = communications.map(comm => ({
        title: comm.type,
        date: comm.date,
    }));

    return (
        <div>
            <h2>Calendar View</h2>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                }}
                eventClick={(info) => {
                    alert(`Event: ${info.event.title}\nDate: ${info.event.start.toISOString().split('T')[0]}`);
                }}
            />
        </div>
    );
};

export default CalendarView;