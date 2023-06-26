import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Shared/Sidebar';

const Dashboard = () => {
  const { adminId } = useParams();


  return (
    <>
    <Header/>
    <div style={{display:"flex",gap:"10px"}}>
      <Sidebar/>
      <h2>Welcome to the Dashboard, Admin ID: {adminId}</h2>
      {/* Additional dashboard content */}
    </div>
    </>
  );
};

export default Dashboard;
