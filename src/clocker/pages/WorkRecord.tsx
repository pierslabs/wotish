import { Layout } from '../components/Layout';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from '@hassanmojab/react-modern-calendar-datepicker';
import { SelectedWorkDayData } from '../data/selectedWorkDayData';
import { useContext, useEffect } from 'react';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { ClockerContext } from '../context/ClockerContext';

const WorkRecord = () => {
  const selectedDays: Day[] = SelectedWorkDayData;

  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.WORK_RECORD);
  }, []);
  return (
    <Layout>
      <div className='bg-green-100 p-1 waves  h-[calc(100vh-60px)]'>
        <div className='flex flex-col justify-center w-auto items-center h-full'>
          <hr />
          <Calendar
            value={selectedDays}
            shouldHighlightWeekends
            calendarClassName='responsive-calendar'
            locale={'en'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default WorkRecord;
