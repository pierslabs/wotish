import { Layout } from '../components/Layout';
import WorkCalendar from '../components/workCalendar/WorkCalendar';

const WorkRecord = () => {
  return (
    <Layout>
      <div className='bg-green-100 p-1 waves  h-[calc(100vh-50px)]'>
        <div className='flex flex-col justify-center -mt-5 items-center h-full'>
          <hr />
          <WorkCalendar />
        </div>
      </div>
    </Layout>
  );
};

export default WorkRecord;
