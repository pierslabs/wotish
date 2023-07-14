import { Layout } from '../components/Layout';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
const WorkRecord = () => {
  return (
    <Layout>
      <div
        className='bg-green-100 p-1 waves'
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <Calendar calendarClassName='responsive-calendar' />
      </div>
    </Layout>
  );
};

export default WorkRecord;
