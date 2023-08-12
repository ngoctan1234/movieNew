
import React, { useState,useEffect } from 'react';
import "./Menu.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  TabContent,
  TabPane, Col, Row, Card, CardTitle, Button, CardText, CardBody, CardSubtitle

} from 'reactstrap';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

function Menu() {
  const [isOpen, setIsOpen] = useState(true);
  const [show, setShow] = useState(true);
  const [isShow, setIsShow]=useState(false)
  const toggle = () => setIsOpen(!isOpen);
  const [activeTab, setActiveTab] = useState('1');
  useEffect(() => {
    window.addEventListener('resize', handle_sidebar);
    
}, []);
const handle_sidebar=()=>{
   const temp = window.innerWidth < 575 ? true : false;
   setIsShow(temp)

}
  return (
    <div className='App'>
      <Link to="/">Home</Link>
       {
        isShow?<Sidebar />:""
      }
      <div className="menu">
        <Container>
          <Navbar expand="md" >
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>

            </Collapse>
          </Navbar>
        </Container>
      </div>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
              Tab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
              Tab 2
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <Card
                  className="animate__animated animate__zoomIn"
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card
                  className="animate__animated animate__zoomIn"
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card
                  className="animate__animated animate__zoomIn"
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <Card
                  className="animate__animated animate__zoomIn"
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card
                  className="animate__animated animate__zoomIn"
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card
                  className="animate__animated animate__zoomIn"
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>


          </TabPane>
        </TabContent>
      </div>
      <Button className="btn btn-success" onClick={()=>setShow(!show)}>Toggle</Button>
      <div className={show?"info": "info active"}>

        <p>Info products</p>

      </div>
     
    </div>

  );
}

export default Menu;