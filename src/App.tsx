import {Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import {Shop} from './pages/Shop'
import {ShoppingCart} from './pages/ShoppingCart'
import {History} from './pages/History'
import {Coupons} from './pages/Coupons'
import {Navbar} from './components/Navbar'

interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
function App() {
  const cart:Item[]= [];
 
  return (
    <>
    <Navbar />
   <Container className='mb-4'>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/shoppingcart' element={<ShoppingCart cart={cart} />}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/coupons' element={<Coupons/>}/>
    </Routes>
   </Container>

   </>
  );
}

export default App;
