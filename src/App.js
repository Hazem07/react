import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./index.css";
function App() {
  return (
    <>
      <div>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand ><img
            src="https://i.pinimg.com/originals/cf/21/ea/cf21ea56f6984d27e1e24dc1c43aba5a.png"
            alt="20022"
            width="10%"
            
          ></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">History</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#FILM">Film</NavDropdown.Item>
                  <NavDropdown.Item href="#SUIT">
                    Suit
                  </NavDropdown.Item>
                  <NavDropdown.Item  href="#TOYS">
                    Toys
                  </NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="App">
        <div>
          <iframe
            width="1370"
            height="400"
            autoPlay
            src="https://www.youtube.com/embed/TYMMOjBUPMM?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            
          ></iframe>
        </div>
        <div className="back"  style={{marginbuttom: '2em'}}>
        <h2 id="FILM" style={{marginTop:'2em', marginLeft: '20em'}}>FILM</h2>
        <div className="img">
          <div className="img1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Spider-Man2002Poster.jpg/220px-Spider-Man2002Poster.jpg"
            alt="2002"
            width="230"
            height="327"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Watch Now</Button>{' '}
          </div>
          <div className="img1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJA-pmoamnOUIZqcLMEvVNhsyQWfrW04oZw&usqp=CAU"
            alt="2002"
            width="230"
            height="327"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Watch Now</Button>{' '}
          </div>
          <div className="img1">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg"
            alt="2007"
            width="230"
            height="327"
            
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Watch Now</Button>{' '}
          </div>
          </div>
          <div className="img2">
          <div className="img1">
          <img
            src="https://target.scene7.com/is/image/Target/GUEST_bcfb5d1a-8526-435c-b444-6383da199316?wid=488&hei=488&fmt=pjpeg"
            alt="2007"
            width="230"
            height="327"
            
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Watch Now</Button>{' '}
          </div>
          <div className="img1">
          <img
            src="https://m.media-amazon.com/images/I/91FEskGdiAL._SY550_.jpg"
            alt="2007"
            width="230"
            height="327"
            
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Watch Now</Button>{' '}
          </div>
          <div className="img1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
            alt="2007"
            width="230"
            height="327"
            
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Watch Now</Button>{' '}
          </div>
          </div>
        </div>
        <div className="ground">
        <h2  style={{marginTop: '2em' ,marginLeft: '20em'}} id="SUIT" >SUIT</h2>
        <div className="img3">
          <div className="imgg">
          <img
            src="https://media.simcosplay.com/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/u/l/ultimate_spider-man_cosplay_miles_morales_cosplay_costume_top_level.jpg"
            alt="2002"
            width="230"
            height="327"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Buy Now</Button>{' '}
          </div>
          <div className="imgg">
          <img
            src="https://media.simcosplay.com/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/p/e/peter_parker_suit_spider-man_into_the_spider_verse_cosplay_costumes.jpg"
            alt="2002"
            width="230"
            height="327"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Buy Now</Button>{' '}
          </div>
          <div className="imgg">
          <img
            src="https://media.simcosplay.com/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/s/p/spider-man_far_from_home_peter_parker_cosplay_costumes_deluxe_ver.2_cover.jpg"
            alt="2002"
            width="230"
            height="327"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Buy Now</Button>{' '}
          </div>
       </div>
       </div>
       <div className="grou1">
        <h2 style={{marginTop:'2em', marginLeft: '20em'}} id="TOYS">TOYS</h2>
        <div className="img4">
        <div className="imggg">
          <img
            src="https://www.sideshow.com/storage/product-images/908143/miles-morales-bodega-cat-suit_marvel_silo_sm.png"
            alt="2002"
            width="200"
            height="300"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Buy Now</Button>{' '}
          </div>
          <div className="imgg">
          <img
            src="https://www.sideshow.com/storage/product-images/908810/spider-man-cyborg-spider-man-suit_marvel_silo_sm.png"
            alt="2002"
            width="200"
            height="300"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Buy Now</Button>{' '}
          </div>
          <div className="imgg">
          <img
            src="https://www.sideshow.com/storage/product-images/908916/spider-man-black-gold-suit_marvel_silo_sm.png"
            alt="2002"
            width="200"
            height="300"
          ></img>
          <Button variant="outline-danger" style={{marginTop: '2em'}}>Buy Now</Button>{' '}
          </div>
        </div>
        </div>
        <div className="footer">
          <div className="about" >
            <h3 id=" about">
              About
            </h3>
            <p>
            Spider-Man, also known as Spider-Man: The Animated Series (Spider-Man TAS for short),
             is an American superhero animated television series based on the Marvel Comics superhero of the same name.
             [2] The show ran on the Fox Kids Network from November 19, 1994, to January 31, 1998,
              and ran reruns on the Jetix block on Toon Disney and on Disney XD, with a total of five seasons and sixty-five episodes.
              The series was produced by Marvel Films Animation.[3]
            </p>
            </div>
            <div>
              <h2 id="contact">Contact</h2>
              <p>html@gmail.com</p>
              <p>Phone Number: 00 000 000</p>
            </div>
          </div>
        
      </div>{" "}
     

    </>
  );
}

export default App;
