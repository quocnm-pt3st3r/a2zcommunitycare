import { Row, Col, Card, Typography } from 'antd';
import {
  TeamOutlined, CompassOutlined, HeartOutlined, CarOutlined,
  BulbOutlined, CalendarOutlined, SafetyOutlined, MedicineBoxOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const services = [
  {
    icon: <CompassOutlined />,
    title: 'Community Access',
    detail: 'We support participants to engage in community activities, attend social events, visit local facilities, and build meaningful connections.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Community Participation',
    detail: 'Programs designed to help you develop social skills, build friendships, and actively contribute to your local community through volunteering, group activities, and community events.',
  },
  {
    icon: <HeartOutlined />,
    title: 'Support Coordination',
    detail: 'We help you navigate the NDIS system, understand your plan, connect with service providers, and coordinate your supports effectively.',
  },
  {
    icon: <CarOutlined />,
    title: 'Career Orientation and Job Training',
    detail: 'Career guidance, job readiness training, and employment support to help participants develop workplace skills and find meaningful employment.',
  },
  {
    icon: <BulbOutlined />,
    title: 'Personal Care & Development Skilled',
    detail: 'Skilled assistance with daily personal tasks including grooming, hygiene, meal preparation, and medication management, while supporting skill development.',
  },
  {
    icon: <CalendarOutlined />,
    title: 'Respite Accommodation',
    detail: 'Short-term accommodation and respite care that give families and primary carers a well-deserved break while ensuring quality care in a safe environment.',
  },
  {
    icon: <SafetyOutlined />,
    title: 'Core Support',
    detail: 'Essential daily living supports including household tasks, transportation, shopping assistance, and activities that help you live independently.',
  },
  {
    icon: <MedicineBoxOutlined />,
    title: 'Self Care Support',
    detail: 'Medication reminders, prescription pick-ups, and support to ensure medication directions are followed. We help manage your health routines so you can live your best life.',
  },
];

export default function Services() {
  return (
    <div className="page services-page">
      <div className="page-hero" style={{ backgroundImage: 'url(/images/vocher.c8befbbe1f4290d9fe31.jpg)' }}>
        <div className="page-hero-overlay">
          <Title level={1}>SERVICES WE PROVIDE</Title>
        </div>
      </div>

      <div className="container section">
        <Paragraph className="section-subtitle text-center" style={{ maxWidth: 800, margin: '0 auto 40px' }}>
          A2Z Community Care provides compassionate, high-quality NDIS services tailored to your needs.
          Each service is delivered with kindness, professionalism, and a commitment to your wellbeing.
        </Paragraph>

        <Row gutter={[24, 32]}>
          {services.map((svc, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="service-detail-card">
                <div className="service-detail-icon">{svc.icon}</div>
                <Title level={4}>{svc.title}</Title>
                <Paragraph>{svc.detail}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA */}
      <div className="section cta-section">
        <div className="container text-center">
          <Title level={2} style={{ color: '#fff' }}>Need Help Choosing a Service?</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18 }}>
            Contact us for a free consultation to discuss your needs and goals.
          </Paragraph>
          <Link to="/contact" className="ant-btn ant-btn-primary ant-btn-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
