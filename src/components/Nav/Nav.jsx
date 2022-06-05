import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import { Col, Container, Navbar, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { IoManOutline, IoPeopleOutline, IoMailOutline, IoNewspaperOutline, IoMusicalNotesOutline, IoSettingsOutline } from 'react-icons/io5'

const routes = [{
   to: "/profile/1",
   title: "Profile",
   setIcon(style) {
      return <IoManOutline style={style} />
   }
},
{
   to: "/users",
   title: "Users",
   setIcon(style) {
      return <IoPeopleOutline style={style} />
   }
},
{
   to: "/dialogs",
   title: "Messages",
   setIcon(style) {
      return <IoMailOutline style={style} />
   }
},
{
   to: "/news",
   title: "News",
   setIcon(style) {
      return <IoNewspaperOutline style={style} />
   }
},
{
   to: "/music",
   title: "Music",
   setIcon(style) {
      return <IoMusicalNotesOutline style={style} />
   }
},
{
   to: "/settings",
   title: "Settings",
   setIcon(style) {
      return <IoSettingsOutline style={style} />
   }
}]


const Navig = () => {

   return (

      <Navbar variant="dark" fixed="bottom">
         <Container className="bg-dark bg-opacity-75 text-white rounded d-flex justify-content-center pt-1 pb-1">
            <Row>
               {routes.map(({ to, title, setIcon }) => {
                  return (
                     <Col xs={2}>
                        <OverlayTrigger
                           placement={'top'}
                           overlay={
                              <Tooltip id={`tooltip-top`}>
                                 {title}
                              </Tooltip>
                           }>
                           <Nav.Link as={NavLink} to={to}>
                              {
                                 setIcon({ width: '20px', height: '20px', color: 'white' })
                              }
                           </Nav.Link>
                        </OverlayTrigger>
                     </Col>

                  )
               })}
            </Row>

         </Container>
      </Navbar >
   );
};

export default Navig;
