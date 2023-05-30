import { Container,Nav,Card,Button,Form,Navbar as NavbarBS } from "react-bootstrap"
import { NavLink} from 'react-router-dom'
const svgCode='<svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" viewBox="0 0 375 374.9999" height="36" version="1.0"><defs><path id="pathAttribute" d="M 10.867188 24.195312 L 363.367188 24.195312 L 363.367188 329.445312 L 10.867188 329.445312 Z M 10.867188 24.195312 "></path></defs><g><path id="pathAttribute" d="M 363.367188 329.40625 L 10.867188 329.40625 L 187.117188 24.234375 Z M 27.152344 320.03125 L 347.078125 320.03125 L 187.117188 43.054688 Z M 27.152344 320.03125 " fill-opacity="1" fill-rule="nonzero"></path></g><g id="inner-icon" transform="translate(85, 110)"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="199.8" width="199.8"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M100.4 112.3L.5101 491.7c-1.375 5.625 .1622 11.6 4.287 15.6c4.127 4.125 10.13 5.744 15.63 4.119l379.1-105.1C395.3 231.4 276.5 114.1 100.4 112.3zM127.1 416c-17.62 0-32-14.38-32-31.1c0-17.62 14.39-32 32.01-32c17.63 0 32 14.38 32 31.1C160 401.6 145.6 416 127.1 416zM175.1 271.1c-17.63 0-32-14.38-32-32c0-17.62 14.38-31.1 32-31.1c17.62 0 32 14.38 32 31.1C208 257.6 193.6 271.1 175.1 271.1zM272 367.1c-17.62 0-32-14.38-32-31.1c0-17.62 14.38-32 32-32c17.63 0 32 14.38 32 32C304 353.6 289.6 367.1 272 367.1zM158.9 .1406c-16.13-1.5-31.25 8.501-35.38 24.12L108.7 80.52c187.6 5.5 314.5 130.6 322.5 316.1l56.88-15.75c15.75-4.375 25.5-19.62 23.63-35.87C490.9 165.1 340.8 17.39 158.9 .1406z" id="mainIconPathAttribute"></path></svg> </g></svg>'
export const Navbar=()=>{
    return (
        <>
        <NavbarBS className="navbar navbar-dark bg-dark" >
            <Container >
             <Nav>

             <Card.Img src={`data:image/svg+xml,${encodeURIComponent(svgCode)}`} alt="Card image" />
                <Nav.Link to='/' as={NavLink}>
                    Shop
                </Nav.Link>
                <Nav.Link to='/shoppingcart' as={NavLink}>
                    ShoppingCart
                </Nav.Link>
                <Nav.Link to='/history' as={NavLink}>
                    History
                </Nav.Link>
                <Nav.Link to='/coupons' as={NavLink}>
                    Coupons
                </Nav.Link>
             </Nav>
             <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-dark"
              aria-label="Search"
             style={{color:'white'}}
            />
            <Button variant="outline-success" >Search</Button>
  
          </Form>
      
            </Container>

        </NavbarBS>
        </>
    )
}