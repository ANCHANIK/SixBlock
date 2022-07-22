import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, Button, localeUs } from '@mobiscroll/react';

const MonthLibrary = () => {

    const [myEvents, setEvents] = useState([]);

    useEffect(() => {
        getJson('https://trial.mobiscroll.com/custom-events/', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const view = useMemo(() => {
        return {
            calendar: { labels: false, popover: true, popoverClass: 'custom-event-popover' }
        };
    }, []);

    const getParticipant = (id) => {
        switch (id) {
            case 1:
                return {
                    img: 'https://img.mobiscroll.com/demos/m1.png',
                    name: 'Barry L.'
                };
            case 2:
                return {
                    img: 'https://img.mobiscroll.com/demos/f1.png',
                    name: 'Hortense T.'
                };
            case 3:
                return {
                    img: 'https://img.mobiscroll.com/demos/m2.png',
                    name: 'Carl H.'
                };
        }
    };

    const add = (ev, data) => {
        ev.stopPropagation();
        toast({
            message: getParticipant(data.participant).name + '\'s event clicked'
        });
    };

    const renderEventContent = useCallback((data) => {
        return <Fragment>
            <div>{data.title}</div>
            <div className="md-custom-event-cont">
                <img className="md-custom-event-img" src={getParticipant(data.original.participant).img} />
                <div className="mbsc-custom-event-name">{getParticipant(data.original.participant).name}</div>
                <Button className="md-custom-event-btn" color="secondary" variant="outline" onClick={(domEvent) => add(domEvent, data.original)}>Add participant</Button>
            </div>
        </Fragment>
    });

    return (
        <div>
            <Eventcalendar
                theme="ios"
                themeVariant="light"
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                eventDelete={false}
                locale={localeUs}
                renderEventContent={renderEventContent}
                data={myEvents}
                view={view}
            />
        </div>
    );
}



export default MonthLibrary;
