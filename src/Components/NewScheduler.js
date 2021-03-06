import React, { useState,useRef } from 'react';
import {
    Inject, ScheduleComponent, Day, Week, WorkWeek,
    Month, Agenda, TimelineViews, TimelineMonth,
    EventSettingsModel, GroupModel, DragAndDrop,    Schedule,
    Resize, ResourcesDirective, ResourceDirective, ViewDirective, ViewsDirective,
    enableTooltip,
} from "@syncfusion/ej2-react-schedule";
import "./NewScheduler.css";
import {DropDownListComponent} from "@syncfusion/ej2-react-dropdowns";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import {L10n} from "@syncfusion/ej2-base";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

// L10n.load({
//     "en-US":{
//         "schedule":{
//             "saveButton":"Add",
//             "cancelButton":"Close",
//             "deleteButton":"Remove",
//             "newEvent":"Add Event"
//         }
//     }
// })
function NewScheduler(props) {
    const [localData, setLocalData] = useState([{
        Id: 1,
        Subject: "Visit To Doc",
        StartTime: new Date(2021, 1, 5, 16, 0),
        EndTime: new Date(2021, 1, 5, 20, 0),
        //isAllDay: true,
        // RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10",
        ResourceId: 1,
        GroupId: 1,
        Description:"Consulting"
    }, {
        Id: 2,
        StartTime: new Date(2021, 1, 2, 12, 30),
        EndTime: new Date(2021, 1, 2, 15, 0),
        Subject: "Meeting",
        // IsReadonly: true, //FOR MAking edit and delete option disable 
        // IsBlock: true,
        ResourceId: 2,
        GroupId: 2,
        Description:"Project Demo"
    },
    {
        Id: 3,
        StartTime: new Date(2021, 1, 6, 7, 30),
       
        EndTime: new Date(2021, 1, 6, 8, 30),
        Subject: "Swimming",
        // isAllDay: true,
        // IsReadonly: true,
        ResourceId: 3,
        GroupId: 3,
        Description:"Learning Class"
    },
]);
    
    // const inputRef=useRef(null);
    // const buttonRef=useRef(null);
   
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
        { Name: "Task 3", Id: 3, Color: "#00bdae", GroupId: 3 }
    ]);
  
 const editorWindowTemplate=()=>{
return(
  <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}>
      <tbody>
      <tr><td className="e-textlabel">Summary</td><td style={{ colspan: '4' }}>
        <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Status</td><td style={{ colspan: '4' }}>
        <DropDownListComponent id="EventType" placeholder='Choose status' data-name='EventType' className="e-field" style={{ width: '100%' }}
          dataSource={['New', 'Requested', 'Confirmed']}>
        </DropDownListComponent>
      </td></tr>
          <tr><td className="e-textlabel">From</td><td style={{ colspan: '4' }}>
        <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="StartTime" value={new Date(props.startTime || props.StartTime)}
          className="e-field"></DateTimePickerComponent>
      </td>
      </tr>
      <tr>
          <td className="e-textlabel">To</td><td style={{ colspan: '4' }}>
        <DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="EndTime" value={new Date(props.endTime || props.EndTime)}
          className="e-field"></DateTimePickerComponent>
      </td>
      </tr>
      <tr>
          <td className="e-textlabel">Reason</td><td style={{ colspan: '4' }}>
        <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50}
          style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td>
      </tr>
          </tbody>
          </table> 
);
 };
//  const onAddClick=()=>{
//      console.warn("call");
//      let Data = [{
//         Id: 2,
//         Subject: 'Conference',
//         StartTime: new Date(2021, 1, 12, 9, 0),
//         EndTime: new Date(2021, 1, 12, 10, 0),
//         ResourceId: 2,
//         GroupId: 2,
//         Description:"Project Demo"
//     }, {
//         Id: 3,
//         Subject: 'Meeting',
//         StartTime: new Date(2021, 1, 15, 10, 0),
//         EndTime: new Date(2021, 1, 15, 11, 30),
//       //  IsAllDay: false
//       ResourceId: 3,
//       GroupId: 3,
//       Description:"Project Demo"
//     }];
//  // inputRef.current.value=Data;
// //   buttonRef.setAttribute('disabled', 'true')
    
    
//  };
    return (

        <div>
            {/* <DropDownListComponent  /> */}
            {/* <ButtonComponent id='add' title='Add'  onClick={onAddClick}>Add</ButtonComponent> */}
            <ScheduleComponent currentView="Month" width='100%' height='100%'
            
                selectedDate={new Date(2021, 1, 1)}
                eventSettings={{ dataSource: localData}}
              editorTemplate={editorWindowTemplate}
                group={groupData}
                // onClick={addEvent}
               
            >

                <ViewsDirective>

                    <ViewDirective option="Day" ></ViewDirective>
                    <ViewDirective option="Week" ></ViewDirective>
                    <ViewDirective option="Month" ></ViewDirective>
                      <ViewDirective option="Agenda"></ViewDirective>
                    <ViewDirective option="MonthAgenda"></ViewDirective>
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

export default NewScheduler;