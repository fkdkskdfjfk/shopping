import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout(props) {
  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 영역: 상단 네비게이션 바 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#" onClick={() => navigate('/')}>뽀삐빠샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/')} >홈</Nav.Link>
              <Nav.Link onClick={() => navigate('/cart')} >장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Outlet /> 
      {/* app.js에서 <Layout/>의 자식 쪽에 들어가는 것들이 Outlet 자리에 들어온다 */}
      {/* <footer>푸터 영역</footer> */}
    </>
  );
}

export default Layout;