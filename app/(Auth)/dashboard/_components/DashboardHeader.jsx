'use client'
 
import DateRangePicker from '@/components/DataRangePicker';
import { DashboardContext } from '@/context';
import { getUserAnalytics } from '@/lib/getData';
import { Home } from 'feather-icons-react';
import moment from 'moment';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

const DashboardHeader = () => {
    const [fromDate, setFromDate] = useState(moment().startOf('month')); 
    const [toDate, setToDate] = useState(moment().endOf('month')); 

    const { setDashboardData } = useContext(DashboardContext);

    useEffect(() => {
        const getData = async () => {          
            const { appointmentsList, appointments, procedures } = await getUserAnalytics(
                fromDate.format('YYYY-MM-DD'),
                toDate.format('YYYY-MM-DD')
            );
            setDashboardData({ appointmentsList, appointments, procedures, calenderView: fromDate.format('YYYY-MM') });
        };
    
        getData();
    }, [fromDate, toDate]);

    const handleDateChange = (range) => {
        setFromDate(moment(range.start));
        setToDate(moment(range.end));
    };
    
    return (
        <div className="card-header">        
            <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="row">
                    <div className="col-xl-9 col-md-6 col-sm-12">
                        <h4 className="mb-3">Dashboard</h4>
                        <nav>
                            <ol className="breadcrumb justify-content-sm-start align-items-center mb-0">
                            <li className="breadcrumb-item">
                                <Link href="/dashboard">
                                <Home />
                                </Link>
                            </li>
                            <li className="breadcrumb-item f-w-400 active">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                    
                    <div className="col-xl-3 col-md-6 col-sm-12 text-center">
                        <DateRangePicker className="btn-gradient-2" onChange={handleDateChange} fromDate={fromDate} toDate={toDate} />                        
                    </div>

                </div>
            </div>        
        </div>
    )
}

export default DashboardHeader;