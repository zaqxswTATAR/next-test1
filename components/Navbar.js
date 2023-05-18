import React from 'react'
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = () => {

  const { user, logout } = useAuth()
  const router = useRouter()

  const handleChange = () => {
    // handle change when searched
  };

  const handleSubmit = () => {
    // handle submit when searched
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">NextJS Test</Navbar.Brand>
        <Nav className="mr-auto">
          {user ? (
            <div
              style={{
                width: '40%',
                margin: 'auto',
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicSearch">
                  <Form.Label>Enter Location:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleChange} >
                  Search
                </Button>
              </Form>
            </div>
          ) : ""}

          {user ? (
            <>
              <Nav.Link href="/dashboard">My Home</Nav.Link>
              <Nav.Link onClick={() => {
                logout()
                router.push('/login')

              }}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComp