'use client'

import 'daterangepicker';
import 'daterangepicker/daterangepicker.css';
import $ from 'jquery';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

const DateRangePicker = ({ onChange, fromDate, toDate }) => {
    var start = fromDate;
    var end = toDate;

    const pickerRef = useRef();
    const [dateRange, setDateRange] = useState(start.format('MMM D YYYY') + ' - ' + end.format('MMM D YYYY'));
    
    useEffect(() => {

        $(pickerRef.current).daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            locale: {
                format: 'MM/DD/YYYY',
            },
        }, (start, end) => {
            onChange({ start, end });
            setDateRange(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'))
        });
    
        // Cleanup on unmount
        return () => {
            // $(pickerRef.current).data('daterangepicker').remove();
            pickerRef.current = null;
        };
  }, [onChange, start, end]);

  return <div ref={pickerRef} className="btn-gradient-2">
            <i className="fa fa-calendar"></i>&nbsp;
            <span>{dateRange}</span>
            <i className="fa fa-caret-down"></i>
        </div>;
};

export default DateRangePicker;
