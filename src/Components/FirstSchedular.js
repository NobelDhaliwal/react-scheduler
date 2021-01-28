import React, { useState } from 'react';
// import Scheduler from 'react-scheduler-calendar';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';
import {
    Inject, ScheduleComponent, Day, Week, WorkWeek, 
    Month, Agenda, TimelineViews, TimelineMonth,
    EventSettingsModel, GroupModel, DragAndDrop,
     Resize, ResourcesDirective, ResourceDirective,ViewDirective,ViewsDirective
} from "@syncfusion/ej2-react-schedule";
// import { Query } from '@syncfusion/ej2-data';
// import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';

const FirstSchedular = () => {
    const [localData, setLocalData] = useState([{
        id: 2,
        Subject: "Visit To Doc",
        StartTime: new Date(2021, 0, 28, 16, 0),
        EndTime: new Date(2021, 0, 28, 18, 0),
        isAllDay: true,
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=2",
        ResourceId: 1,
        GroupId: 1,
    }, {
        Id: 2,
        StartTime: new Date(2021, 0, 31, 12, 30),
        EndTime: new Date(2021, 0, 31, 15, 0),
        Subject: "Meeting",
        IsReadonly: true,
        ResourceId: 2,
        GroupId: 2,
    },
    {
        Id: 3,
        StartTime: new Date(2021, 1, 4, 8, 30),
        EndTime: new Date(2021, 1, 4, 9, 30),
        Subject: "Swimming",
        IsReadonly: true,
        ResourceId: 3,
        GroupId: 2,
    }]);
    const [resourceDataSource, setResouceDataSource] = useState([
        { Name: "John", Id: 1, Color: "#ea7a57" },
        { Name: "Steve", Id: 2, Color: "#357CD2" },
        { Name: "James", Id: 3, Color: "#7fa900" }
    ]);
    const [groupData, setGroupData] = useState({
        resources: ["Resources", "Groups"]
    });
    const [groupDataSource, setGroupDataSource] = useState([
        { Name: "Task 1", Id: 1, Color: "#df5286", GroupId: 1 },//child resource
        { Name: "Task 2", Id: 2, Color: "#5978ee", GroupId: 2 },
        { Name: "Task 3", Id: 3, Color: "#00bdae", GroupId: 2 }
    ]);
    return (
        <div>
            {/* <DropDownListComponent  /> */}
            <ScheduleComponent currentView="Month" width='100%' height='100%' 
            currentView="Week"
            selectedDate={new Date(2021, 0, 28)}
                eventSettings={{ dataSource: localData }}
                // views={["Days", "Week", "Month", "TimelineDay", "TimelineWeek"]}
                group={groupData} >
                    <ViewsDirective>
                        {/* startHour ,endHour to show how much time u wnt to display */}
                        {/* interval property to show how many days ,week or month u want 
                        to show ex:- interval={2} */}
                        <ViewDirective option="Day" startHour="9:00"  endHour="18:00"></ViewDirective>
                        <ViewDirective option="Week" isSelected={true}></ViewDirective>
                        {/* isSelected will show view that view when page upload */}
                        <ViewDirective option="Month" ></ViewDirective>
                        {/* <ViewDirective option="WorkWeek"></ViewDirective> */}
                        {/* <ViewDirective option="Agenda"></ViewDirective> */}
                        <ViewDirective option="TimelineDay"></ViewDirective>
                        <ViewDirective option="TimelineMonth"></ViewDirective>
                    </ViewsDirective>
                <ResourcesDirective>
                    <ResourceDirective field="ResourceId" title="Resource Name" name="Resources"
                        textField="Name" idField="Id" colorField="Color" dataSource={resourceDataSource}>
                    </ResourceDirective>
                    <ResourceDirective field="GroupId" name="Groups" title="Group Name"
                        textField="Name" idField="Id" colorField="Color" allowMultiple={true}
                        groupIDField="GroupId"
                        dataSource={groupDataSource}>
                    </ResourceDirective>
                </ResourcesDirective>

                <Inject services={[Day, Week, WorkWeek, Month, Agenda,
                    DragAndDrop, Resize, TimelineViews, TimelineMonth]} />
            </ScheduleComponent>
        </div>
    )
};

export default FirstSchedular;
