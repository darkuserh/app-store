import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import storeItems from '../data/items1shop.json'
import storeItems2 from '../data/items2shop.json'
import storeItems3 from '../data/items3shop.json'
import { StoreItems1shop } from '../components/StoreItems1shop';
import { StoreItems2shop } from '../components/StoreItems2shop';
import { StoreItems3shop } from '../components/StoreItems3shop';
import {useState} from 'react'
export interface Item{
  id:number,
  name:string,
  price:number,
  imgUrl: string;
}
export function Shop() {
  const[cart,setCart]=useState<Item[]>([])
  const handleClick = (item: Item) => {
    console.log(item.id);
    setCart((prevCart) => [...prevCart, item]);
  };
  
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column my-lg-3">
            <Nav.Item>
              <Nav.Link eventKey="first">Mc Dony</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">KFC</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Burger King</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row className='g-4'>
                {storeItems.map(item=>(
                 <Col key={item.id}><StoreItems1shop {...item}/></Col>
                 ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row className='g-4'>
                {storeItems2.map(item=>(
                 <Col key={item.id}><StoreItems2shop {...item} /></Col>
                 ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <Row className='g-4'>
                {storeItems3.map(item=>(
                 <Col key={item.id} item={item}><StoreItems3shop {...item} handleClick={handleClick}/></Col>
                 ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
