import './workCalendar.styles.css';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from '@hassanmojab/react-modern-calendar-datepicker';
import { useContext, useEffect } from 'react';
import { ClockerContext } from '../../context/ClockerContext';
import { SelectedWorkDayData } from '../../data/selectedWorkDayData';
import { NavbarColor } from '../Navbar/navbar.enum';
const WorkCalendar = () => {
  const selectedDays: Day[] = SelectedWorkDayData;

  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.WORK_RECORD);
  }, [handleNavbarColor]);

  return (
    <Calendar
      value={selectedDays}
      shouldHighlightWeekends
      calendarClassName='responsive-calendar'
      locale={'en'}
    />
  );
};

export default WorkCalendar;
