import React,{useState} from 'react';
// import Scheduler from 'react-scheduler-calendar';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,EventSettingsModel
} from "@syncfusion/ej2-react-schedule";

const FirstSchedular=() =>{
    const [localData, setLocalData] = useState([{
        id:2,
       Subject:"Visit To Doc",
        StartTime:new Date(2021,0,28,16,0),
        EndTime:new Date(2021,0,28,16,0),
        // isAllDay:false,
        //  RecurrenceRule:"FREQ=DAILY;INTERVAL=1;COUNT=5",
    }]);

    return (
        <div>
          
            <ScheduleComponent currentView="Month" width='100%' height='100%' selectedDate={new Date(2021,0,28)}
            eventSettings={{dataSource:localData}}>
            <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
        </div>
    )
};

export default FirstSchedular;
