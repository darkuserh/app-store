import { Card, Button } from 'react-bootstrap';
import { FormatCurrency } from '../utilities/formatCurrency';

interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface StoreItems3shopProps extends Item {
  handleClick: (item: Item) => void;
}

export const StoreItems3shop = ({
  id,
  name,
  price,
  imgUrl,
  handleClick
}: StoreItems3shopProps) => {
  return (
    <Card className='my-3'>
      <Card.Img
        variant='bottom'
        src={imgUrl}
        className='my-lg-3  mx-auto d-block'
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
        }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
          <span className='ms-2'>{name}</span>
          <span className='fs-2'>{FormatCurrency(price)}</span>
        </Card.Title>
        <Button variant='danger' onClick={() => handleClick({ id, name, price, imgUrl })}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};