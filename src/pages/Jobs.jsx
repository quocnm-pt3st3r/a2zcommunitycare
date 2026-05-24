import { Row, Col, Card, Typography, Button, Tag, Space } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined, DollarOutlined, SendOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const jobs = [
  {
    title: 'Disability Support Worker',
    location: 'Melbourne, VIC',
    type: 'Full-time / Part-time',
    salary: 'Competitive + Benefits',
    desc: 'We are looking for compassionate Disability Support Workers to join our team. You will provide direct support to NDIS participants, assisting with daily living activities, community access, and personal care.',
    tags: ['NDIS', 'Support Work', 'Community'],
  },
  {
    title: 'Support Coordinator',
    location: 'Point Cook, VIC',
    type: 'Full-time',
    salary: 'Competitive + Super',
    desc: 'Join our coordination team to help NDIS participants navigate their plans, connect with service providers, and achieve their goals.',
    tags: ['NDIS', 'Coordination', 'Case Management'],
  },
  {
    title: 'Community Engagement Officer',
    location: 'Melbourne, VIC',
    type: 'Part-time',
    salary: 'Pro-rata + Benefits',
    desc: 'Help us build inclusive community programs and activities for NDIS participants. You will organise events, build partnerships, and support participants to engage in their local community.',
    tags: ['Community', 'Events', 'Outreach'],
  },
  {
    title: 'Registered Nurse (Disability)',
    location: 'Western Suburbs, Melbourne',
    type: 'Full-time / Casual',
    salary: 'Competitive + Penalty Rates',
    desc: 'We are seeking an experienced RN to provide clinical support and oversee care plans for our NDIS participants with complex needs.',
    tags: ['Nursing', 'Clinical', 'Disability'],
  },
];

export default function Careers() {
  return (
    <div className="page careers-page">
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/refer.c951803bbd970a45374d.jpg)` }}>
        <div className="page-hero-overlay">
          <Title level={1}>JOBS</Title>
        </div>
      </div>

      <div className="container section">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title level={2}>Join Our Team</Title>
            <Paragraph className="section-text">
              At A2Z Community Care, we are always looking for passionate, dedicated individuals
              to join our growing team. If you have a heart for helping others and want to make
              a real difference in the lives of people with disabilities, we'd love to hear from you.
            </Paragraph>
            <Paragraph className="section-text">
              We offer competitive salaries, ongoing training and development, flexible working
              arrangements, and the opportunity to be part of a supportive and caring team.
            </Paragraph>
          </Col>
          <Col xs={24} md={10}>
            <img src={`${import.meta.env.BASE_URL}images/pet.c9bde7a3b18c0cda2c74.png`} alt="Careers" className="img-rounded" />
          </Col>
        </Row>
      </div>

      {/* Job Listings */}
      <div className="section bg-light">
        <div className="container">
          <Title level={2} className="section-title text-center">Current Openings</Title>
          <Paragraph className="section-subtitle text-center">
            Find the right role for you and apply today
          </Paragraph>
          <Row gutter={[24, 24]}>
            {jobs.map((job, i) => (
              <Col xs={24} md={12} key={i}>
                <Card hoverable className="job-card">
                  <Title level={4}>{job.title}</Title>
                  <div className="job-meta">
                    <span><EnvironmentOutlined /> {job.location}</span>
                    <span><ClockCircleOutlined /> {job.type}</span>
                    <span><DollarOutlined /> {job.salary}</span>
                  </div>
                  <Paragraph className="job-desc">{job.desc}</Paragraph>
                  <Space>
                    {job.tags.map(tag => <Tag key={tag} color="#007eb9">{tag}</Tag>)}
                  </Space>
                  <div className="mt-24">
                    <Link to="/contact">
                      <Button type="primary" icon={<SendOutlined />}>Apply Now</Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* CTA */}
      <div className="section cta-section">
        <div className="container text-center">
          <Title level={2} style={{ color: '#fff' }}>Don't See the Right Role?</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18 }}>
            We're always open to hearing from talented people. Send us your CV!
          </Paragraph>
          <Link to="/contact">
            <Button ghost size="large" style={{ color: '#fff', borderColor: '#fff' }}>Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
