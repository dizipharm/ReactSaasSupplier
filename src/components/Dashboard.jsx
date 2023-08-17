import React from 'react'
import Card from 'react-bootstrap/Card';
import Chart1 from './charts/Chart1';
import Chart2 from './charts/Chart2';


const Dashboard = () => {
  return (
    <div>
      <div style={{display:'flex',gap:'1rem',height:'12rem'}}>
      <Card style={{ width: '18rem',marginTop:'1rem',padding:'1rem',backgroundImage:'linear-gradient(to right, #f0ffff, #2a52be)' }}>
      <Card.Title>Products</Card.Title>
      <Card.Body >
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Card.Link style={{textDecoration:'none'}} href="/products">All products</Card.Link>
        <br></br>

        <Card.Link style={{textDecoration:'none'}} href="/addproduct">Add product</Card.Link>
        <br></br>

        <Card.Link style={{textDecoration:'none'}} href="/upload">Upload</Card.Link>


      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginTop:'1rem',padding:'1rem' }}>
    <Card.Title>Order Management</Card.Title>
      <Card.Body >
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Card.Link style={{textDecoration:'none'}} href="/ordermanagement">My Orders</Card.Link>
        <br></br>
        <Card.Link style={{textDecoration:'none'}} href="/ordermanagement">New Orders</Card.Link>
        <br></br>
        <Card.Link style={{textDecoration:'none'}} href="/ordermanagement">Accepted Orders</Card.Link>
        <br></br>
        <Card.Link style={{textDecoration:'none'}} href="/ordermanagement">Rejected Orders</Card.Link>


      </Card.Body>
    </Card >
    <Card style={{ width: '18rem',marginTop:'1rem',padding:'1rem' }}>
    <Card.Title>Location</Card.Title>
      <Card.Body >
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Card.Link style={{textDecoration:'none'}} href="/location">Manage Location</Card.Link>
        


      </Card.Body>
    </Card>

 
      </div>
      <div style={{ marginTop:'2rem',display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <Chart1 />
      <Chart2 />
    </div>
    </div>
  )
}

export default Dashboard
