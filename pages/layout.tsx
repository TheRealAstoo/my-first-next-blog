import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Link from "next/link"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import React, { useEffect, useState } from 'react'

const Layout: React.FC = ({children}) => {

  const [displayForm, setDisplayForm] = React.useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayForm(!displayForm)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link href="/">
          <Navbar.Brand id="logo">
            Astoo
          </Navbar.Brand>
        </Link>

        <Nav className="mr-auto">
          <Link href="/blog/first-article" passHref><Nav.Link>1rst Article</Nav.Link></Link>        
          <Link href="/blog/second-article" passHref><Nav.Link>2nd Article</Nav.Link></Link>
          <Link href="/blog/third-article" passHref><Nav.Link>3rd Article</Nav.Link></Link>
        </Nav>
      </Navbar>
      <article>
        {children}
      </article>
      {displayForm ? [
        <div id="newsletter">
        <h3>Hé mon ami ! T'aimes-tu c'que tu lis ?</h3>
        <p>Bah abonnes toi alors !</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Tu crois que jtai pas vu ? Aller, mets ton Email !"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Bouton pour te voler tes infos</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      ] : null}
      
    </div>
  )
}

export default Layout;