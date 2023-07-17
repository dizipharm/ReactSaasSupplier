import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Shared/Sidebar';

const Dashboard = () => {
  const { adminId } = useParams();

console.log(adminId)
  return (
    <>
   
    <div >
      
      <h2>Welcome to the Dashboard</h2>
      {/* Additional dashboard content */}
    </div>
    </>
  );
};

export default Dashboard;
