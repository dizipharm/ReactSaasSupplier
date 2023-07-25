import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Myorders from './Myorders';
import Neworders from './Neworders';

function Orders() {
  return (
    <Tabs
      defaultActiveKey="myorders"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="myorders" title="Myorders" >
        <strong>  My Orders</strong>
      
        <Myorders/>
      </Tab>
      <Tab eventKey="neworders" title="New Orders">
      <strong>New Orders</strong>  
        <Neworders/>
      </Tab>
      <Tab eventKey="acceptedorders" title="Accepted Orders">
      <strong>Accepted Orders</strong>  
      <Neworders/>
      </Tab>
      <Tab eventKey="rejectedorders" title="Rejected Orders" >
      <strong>Rejected Orders</strong>  
      <Neworders/>
      </Tab>
    </Tabs>
  );
}

export default Orders;