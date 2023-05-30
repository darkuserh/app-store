import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useNavigate } from "react-router-dom";

interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const ShoppingCart = ({ cart }: { cart: Item[]; }) => {
 const navigate = useNavigate();
  navigate("/shoppingcart");
  const handleClick = (item: Item) => {
    console.log(item);
  };

  return (
    <>
    
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
        <Form className='my-lg-4 '>
     <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name:</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"  style={{ width:'300px'}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{width:'300px'}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPhone">
        <Form.Label>Your Phone:</Form.Label>
        <Form.Control type="phone" placeholder="Enter Phone" style={{width:'300px'}}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicAdress">
        <Form.Label>Your Adress:</Form.Label>
        <Form.Control type="adress" placeholder="Enter Adress" style={{width:'300px'}}/>
        <Form.Text className="text-muted">
          We'll never share your adress with anyone else.
        </Form.Text>
      </Form.Group>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
          <Col sm={9}>
          <div>
        <h2 >Shopping Cart</h2>
        {cart.map((item: Item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Image URL: {item.imgUrl}</p>
          </div>
        ))}
      </div>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};           
