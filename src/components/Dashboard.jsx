import { Link, useParams } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => {
  const { adminId } = useParams();


  return (
    <>
    <Header/>
    <div>
      <h2>Welcome to the Dashboard, Admin ID: {adminId}</h2>
      {/* Additional dashboard content */}
    </div>
    </>
  );
};

export default Dashboard;
