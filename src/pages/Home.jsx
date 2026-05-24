import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Button, Row, Col, Card, Typography } from 'antd';
import { PhoneOutlined, CheckCircleOutlined, TeamOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const { Title, Paragraph } = Typography;

const bannerSlides = [
  {
    title: 'Caring with Compassion & Dignity',
    subtitle: 'Empowering individuals with disabilities to live their best lives',
    btn: 'Learn More',
    link: '/about',
  },
  {
    title: 'Quality NDIS Support Services',
    subtitle: 'Personalized care tailored to your unique needs and goals',
    btn: 'Our Services',
    link: '/services',
  },
  {
    title: 'Join Our Caring Community',
    subtitle: 'Together we build a more inclusive and supportive world',
    btn: 'Contact Us',
    link: '/contact',
  },
];

const servicesOverview = [
  { icon: <TeamOutlined />, title: 'Community Access', desc: 'Support to engage in community activities and build meaningful connections.', link: '/services' },
  { icon: <HeartOutlined />, title: 'Support Coordination', desc: 'Helping you navigate the NDIS and connect with the right supports.', link: '/services' },
  { icon: <CheckCircleOutlined />, title: 'Personal Care & Development', desc: 'Skilled assistance with daily personal tasks and development activities.', link: '/services' },
  { icon: <PhoneOutlined />, title: 'Career & Job Training', desc: 'Career guidance and employment support to develop workplace skills.', link: '/services' },
];

const reviews = [
  {
    text: 'Very satisfied working with proactive team at A2Z Community Care, they are very detailed with their service delivery and provided exceptional services to its participants.',
    author: 'Sarah M.',
    role: 'Client',
  },
  {
    text: 'The team at A2Z has been absolutely wonderful in supporting my son with his NDIS plan. They truly care about their clients and go above and beyond.',
    author: 'David L.',
    role: 'Parent',
  },
  {
    text: 'Professional, compassionate, and reliable. A2Z Community Care has made a real difference in my daily life. I highly recommend their services.',
    author: 'Emily R.',
    role: 'Participant',
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Video */}
      <section className="hero-video-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster={`${import.meta.env.BASE_URL}images/banner1.jpg`}
        >
          <source src={`${import.meta.env.BASE_URL}images/video-banner.mp4`} type="video/mp4" />
        </video>
        <div className="hero-video-overlay">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="hero-video-swiper"
          >
            {bannerSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="hero-video-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <Link to={slide.link}>
                    <Button type="primary" size="large">{slide.btn}</Button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Welcome */}
      <section className="section welcome-section">
        <div className="container">
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} md={14}>
              <Title level={2} className="section-title">WHO ARE A2Z COMMUNITY CARE TOGETHER?</Title>
              <Paragraph className="section-text">
                A2Z Community Care is a company dedicated to providing compassionate and comprehensive
                care to individuals with disabilities. Our team of highly trained professionals is committed
                to helping our clients live happy, healthy, and fulfilling lives.
              </Paragraph>
              <Paragraph className="section-text">
                Our slogan reflects our belief that a caring and supportive approach is the key to helping
                people with disabilities thrive. Whether you're in need of respite care, personal support,
                or community participation services, A2Z Community Care is here to help.
              </Paragraph>
              <Link to="/about"><Button type="primary" size="large">Learn More About Us</Button></Link>
            </Col>
            <Col xs={24} md={10}>
              <img src={`${import.meta.env.BASE_URL}images/about_us.d75b17680506be022dd9.png`} alt="Care" className="img-rounded" />
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-section bg-light">
        <div className="container">
          <Title level={2} className="section-title text-center">Our Services</Title>
          <Paragraph className="section-subtitle text-center">
            We offer a comprehensive range of NDIS support services designed to help you achieve your goals.
          </Paragraph>
          <Row gutter={[24, 24]}>
            {servicesOverview.map((svc, i) => (
              <Col xs={24} sm={12} md={6} key={i}>
                <Card hoverable className="service-card">
                  <div className="service-icon">{svc.icon}</div>
                  <Title level={4}>{svc.title}</Title>
                  <Paragraph>{svc.desc}</Paragraph>
                  <Link to={svc.link}>Learn more &rarr;</Link>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-24">
            <Link to="/services"><Button type="primary" size="large">View All Services</Button></Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section reviews-section">
        <div className="container">
          <Title level={2} className="section-title text-center">Customer Reviews</Title>
          <Paragraph className="section-subtitle text-center">What our clients say about us</Paragraph>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="reviews-slider"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <Card className="review-card">
                  <Paragraph className="review-text">"{r.text}"</Paragraph>
                  <div className="review-author">
                    <strong>{r.author}</strong>
                    <span>{r.role}</span>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <Title level={2} style={{ color: '#fff' }}>Ready to Get Started?</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18 }}>
            Contact us today to discuss how we can support you or your loved one.
          </Paragraph>
          <Link to="/book-appointment">
            <Button type="primary" size="large" style={{ marginRight: 16 }}>Book an Appointment</Button>
          </Link>
          <Link to="/contact">
            <Button ghost size="large" style={{ color: '#fff', borderColor: '#fff' }}>Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
