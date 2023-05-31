import React from 'react'
import './PriceCards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';

function PriceCards() {
  return (
    <div className='cardcontainer'>
        <Card style={{ width: '20rem' }} className='cardindv'>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted abovetitle">Free</Card.Subtitle>
                <Card.Title className='title' style={{fontSize: '40px', borderBottom:'1px solid grey', paddingBottom:'20px'}}>$0/month</Card.Title>
                <Card.Text>
                    <ListGroup className='list'>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Single User</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; 5GB Storage</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Unlimited Public Projects</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Community Access</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} disabled>&#x274C; Unlimited Private Projects</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} disabled>&#x274C; Dedicated Phone Supportr</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} disabled>&#x274C; Free Subdomain</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} disabled>&#x274C; Monthly Status Reports</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Button variant="primary" style={{width:'14rem', margin:'50px 2rem 10px 2rem'} }>Purchase</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted abovetitle">PLUS</Card.Subtitle>
                <Card.Title className='title' style={{fontSize: '40px', borderBottom:'1px solid grey', paddingBottom:'20px'}}>$9/month</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Single User</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; 50GB Storage</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Unlimited Public Projects</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Community Access</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} >&#10004; Unlimited Private Projects</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Dedicated Phone Supportr</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Free Subdomain</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} disabled>&#x274C; Monthly Status Reports</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Button variant="primary" style={{width:'14rem', margin:'50px 2rem 10px 2rem'} }>Purchase</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted abovetitle">PRO</Card.Subtitle>
                <Card.Title className='title' style={{fontSize: '40px', borderBottom:'1px solid grey', paddingBottom:'20px'}}>$49/month</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Single User</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; 150GB Storage</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Unlimited Public Projects</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Community Access</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}} >&#10004; Unlimited Private Projects</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Dedicated Phone Supportr</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; <strong>Unlimited</strong> Free Subdomain</ListGroup.Item>
                        <ListGroup.Item style={{border: 'none'}}>&#10004; Monthly Status Reports</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Button variant="primary" className='btn' style={{width:'14rem', margin:'50px 2rem 10px 2rem'} }>Purchase</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default PriceCards