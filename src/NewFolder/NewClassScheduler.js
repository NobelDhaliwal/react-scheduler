
import './index.css';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import * as dataSource from './datasource.json';
/**
 * Schedule Default sample
 */
export class Default extends  {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.scheduleData, null, true);
    this.currentEvent;
  }
  eventAdd(e) {
    const data = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements());
    const eventData = this.scheduleObj.eventWindow.getObjectFromFormData('e-schedule-dialog');
    eventData.Id = this.scheduleObj.eventBase.getEventMaxID() + 1;
    this.scheduleObj.addEvent(eventData);
    this.dialogClose();
  }
  eventDelete(e) {
    const eventData = this.scheduleObj.activeEventData.event;
    this.scheduleObj.deleteEvent(eventData);
    this.dialogClose();
  }
  editEvent(e) {
    const eventData = this.scheduleObj.eventWindow.getObjectFromFormData('e-schedule-dialog');
    eventData.Id = this.currentEvent.Id;
    this.scheduleObj.saveEvent(eventData);
    this.dialogClose();
  }
  dialogClose() {
    let dialogObj = (document.querySelector('.e-schedule-dialog')).ej2_instances[0];
    dialogObj.hide();
  }
  onPopupOpen(args) {
    if (args.type === 'Editor') {
      let dialogObj = (args.element).ej2_instances[0];
      let buttons;
      if (args.target.classList.contains('e-appointment')) {
        this.currentEvent = this.scheduleObj.getEventDetails(args.target);
        buttons = [{
          buttonModel: { content: 'SAVE', isPrimary: true }, click: this.editEvent.bind(this)
        }, {
          buttonModel: { content: 'DELETE', cssClass: 'e-event-delete' }, click: this.eventDelete.bind(this)
        },
        {
          buttonModel: { content: 'CANCEL', cssClass: 'e-event-cancel' }, click: this.dialogClose.bind(this)
        }];
      } else {
        buttons = [{
          buttonModel: { content: 'SAVE', isPrimary: true }, click: this.eventAdd.bind(this)
        }, {
          buttonModel: { content: 'CANCEL', cssClass: 'e-event-cancel' }, click: this.dialogClose.bind(this)
        }];
      }
      dialogObj.buttons = buttons;
      dialogObj.dataBind();
    }
  }
  render() {
    return (<div className='schedule-control-section'>
      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='650px' ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2019, 0, 10)} eventSettings={{ dataSource: this.data }} popupOpen={this.onPopupOpen.bind(this)}>
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>);
  }
}

