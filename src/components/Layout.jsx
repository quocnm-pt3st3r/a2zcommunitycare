import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout as AntLayout, Menu, Button, Drawer, Row, Col } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  PhoneOutlined,
  ReadOutlined,
  IdcardOutlined,
  MailOutlined,
  EnvironmentOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const { Header: AntHeader, Content, Footer: AntFooter } = AntLayout;

const navItems = [
  { key: '/', label: <Link to="/">Home</Link>, icon: <HomeOutlined /> },
  { key: '/about', label: <Link to="/about">About Us</Link>, icon: <InfoCircleOutlined /> },
  { key: '/services', label: <Link to="/services">Services</Link>, icon: <AppstoreOutlined /> },
  { key: '/jobs', label: <Link to="/jobs">Jobs</Link>, icon: <IdcardOutlined /> },
  { key: '/news', label: <Link to="/news">News</Link>, icon: <ReadOutlined /> },
  { key: '/contact', label: <Link to="/contact">Contact Us</Link>, icon: <PhoneOutlined /> },
];

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const currentKey = '/' + location.pathname.split('/')[1];

  return (
    <AntLayout className="site-layout">
      <AntHeader className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src={`${import.meta.env.BASE_URL}images/logo.aec6e08f430e4cc6e61a.png`} alt="A2Z" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">A2Z Community Care</span>
              <span className="logo-subtitle">NDIS Service Provider</span>
            </div>
          </Link>
          <Menu
            mode="horizontal"
            selectedKeys={[currentKey]}
            items={navItems}
            className="desktop-nav"
          />
          <Button
            className="mobile-menu-btn"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
          >
            <Menu
              mode="vertical"
              selectedKeys={[currentKey]}
              items={navItems}
              onClick={() => setDrawerOpen(false)}
            />
          </Drawer>
        </div>
      </AntHeader>

      <Content className="content">
        <Outlet />
      </Content>

      <AntFooter className="footer">
        <div className="footer-inner">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <h3>A2Z Community Care</h3>
              <p>Providing quality NDIS services with compassion and dignity. We empower individuals with disabilities to live independently and participate fully in their communities.</p>
            </Col>
            <Col xs={24} md={8}>
              <h3>Quick Links</h3>
              <div className="footer-links">
                {navItems.map(item => (
                  <Link key={item.key} to={item.key}>{item.label}</Link>
                ))}
              </div>
            </Col>
            <Col xs={24} md={8}>
              <h3>Contact Info</h3>
              <div className="footer-contact">
                <p><EnvironmentOutlined /> Airlie Avenue, Point Cook, VIC 3030</p>
                <p><MailOutlined /> Info@a2zcommunitycare.com.au</p>
                <p><PhoneOutlined /> (03) XXXX XXXX</p>
              </div>
              <h3 style={{ marginTop: 24 }}>Subscribe to Our Newsletter</h3>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} A2Z Community Care. All rights reserved.</p>
          </div>
        </div>
      </AntFooter>
    </AntLayout>
  );
}
