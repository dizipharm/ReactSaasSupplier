import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Myorders() {
  return (
    <Table striped bordered hover style={{ width:"130%"}}>
      <thead>
        <tr>
          <th>Date of order</th>
          <th>Reference Number</th>
          <th>Total Quantity</th>
          <th>Order Placed by</th>
          <th>Delivery address</th>
          <th>Status</th>
          <th>Order details</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>02-jun-2023</td>
          <td>0WRRHDJDH</td>
          <td>100</td>
          <td>@Brain Tyler</td>
          <td>London</td>
          <td>New</td>
          <td>
            <Button>
                View
            </Button>
          </td>

        </tr>
        <tr>
        <td>02-jun-2023</td>
          <td>0TYGHJVBFU</td>
          <td>180</td>
          <td>@Brain Tyler</td>
          <td>London</td>
          <td>New</td>
          <td>
            <Button>
                View
            </Button>
          </td>
        </tr>
        <tr>
        <td>02-jun-2023</td>
          <td>0YEHDJSIOW</td>
          <td>200</td>
          <td>@Brain Tyler</td>
          <td>London</td>
          <td>New</td>
          <td>
            <Button>
                View
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Myorders;