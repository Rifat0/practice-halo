'use client'

import { DashboardContext } from '@/context';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import listPlugin from "@fullcalendar/list";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useContext, useEffect, useRef } from 'react';
import { CardView } from './CardView';

export const Calender = () => {
    const { dashboardData } = useContext(DashboardContext);
    const calendarRef = useRef(null);

    useEffect(() => {
        if (calendarRef.current && dashboardData.calenderView) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.gotoDate(dashboardData.calenderView);
        }
    }, [dashboardData.calenderView]);    

    const calenderData = dashboardData.appointmentsList?.map(item => {
            return {
                title: item.title,
                start: item.start,
                end: item.end,
                backgroundColor: item.backgroundColor
            }
        })

    return (
        <div className="card-body">
            <div className="row" id="wrap">
                <div className="col-xxl-12 box-col-12">
                    <div className="col-xl-12 col-md-12 proorder-md-1">  
                        <div className="row"> 
                            <CardView tittle="Total Appointments" count={dashboardData?.appointments} image="/assets/images/dashboard-4/icon/calendar.png" />
                            <CardView tittle="Total Invoice" count={dashboardData?.procedures} image="/assets/images/dashboard-4/icon/clipboard-text.png" />
                            <CardView tittle="Total Procedures" count={dashboardData?.procedures} image="/assets/images/dashboard-4/icon/profile-2user.png" />
                        </div>
                    </div>
                    <div className="col-xl-12 col-md-12 proorder-md-1">
                        <div className="card">
                        <div className="card-body card_wht_bg">
                            <div className="calendar-default" id="calendar-container">
                                
                                <FullCalendar
                                    ref={calendarRef}
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                                    initialView="dayGridMonth"
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                                    }}
                                    navLinks={true}
                                    selectable={true}
                                    nowIndicator={true}
                                    events={calenderData}
                                />

                            </div>
                        </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}
