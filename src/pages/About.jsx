import { Row, Col, Card, Typography } from 'antd';
import {
  HeartOutlined, EyeOutlined, LikeOutlined, SafetyOutlined,
  TeamOutlined, BulbOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const values = [
  { icon: <HeartOutlined />, title: 'Compassion', desc: 'We care deeply about the wellbeing of every individual we support.' },
  { icon: <LikeOutlined />, title: 'Respect', desc: 'We honor the dignity, rights, and choices of all our participants.' },
  { icon: <SafetyOutlined />, title: 'Integrity', desc: 'We operate with honesty, transparency, and accountability.' },
  { icon: <TeamOutlined />, title: 'Inclusion', desc: 'We create opportunities for full participation in community life.' },
  { icon: <BulbOutlined />, title: 'Excellence', desc: 'We strive for the highest standards in everything we do.' },
  { icon: <EyeOutlined />, title: 'Empowerment', desc: 'We enable individuals to take control of their lives and goals.' },
];

export default function About() {
  return (
    <div className="page about-page">
      <div className="page-hero" style={{ backgroundImage: 'url(/images/about_us.d75b17680506be022dd9.png)' }}>
        <div className="page-hero-overlay">
          <Title level={1}>ABOUT US</Title>
        </div>
      </div>

      <div className="container section">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title level={2}>WHO ARE A2Z COMMUNITY CARE TOGETHER?</Title>
            <Paragraph className="section-text indented">
              A2Z Community Care is a company dedicated to providing compassionate and comprehensive
              care to individuals with disabilities. Our team of highly trained professionals is
              committed to helping our clients live happy, healthy, and fulfilling lives. With our
              focus on kindness and empathy, we strive to create a warm and welcoming environment
              for everyone we work with.
            </Paragraph>
            <Paragraph className="section-text indented">
              Our slogan reflects our belief that a caring and supportive approach is the key to
              helping people with disabilities thrive. Whether you're in need of respite care,
              personal support, or community participation services, A2Z Community Care is here to help.
            </Paragraph>
          </Col>
          <Col xs={24} md={10}>
            <img src="/images/pet.c9bde7a3b18c0cda2c74.png" alt="About Us" className="img-rounded" />
          </Col>
        </Row>
      </div>

      {/* Mission & Vision */}
      <div className="section bg-light">
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card className="mv-card">
                <Title level={3}>OUR VISION</Title>
                <Paragraph>
                  We believe that a caring and supportive approach is the key to helping people
                  with disabilities thrive. We envision an inclusive society where people with
                  disabilities are valued, respected, and have equal opportunities in all aspects of life.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="mv-card">
                <Title level={3}>ABOUT US CONTENT</Title>
                <Paragraph>
                  Our team is dedicated to providing compassionate, high-quality disability support
                  services that empower individuals to live independently, participate fully in their
                  communities, and achieve their personal goals.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Our Values */}
      <div className="container section">
        <Title level={2} className="text-center">Our Values</Title>
        <Paragraph className="section-subtitle text-center">
          The principles that guide everything we do.
        </Paragraph>
        <Row gutter={[24, 24]}>
          {values.map((v, i) => (
            <Col xs={24} sm={12} md={8} key={i}>
              <Card hoverable className="value-card text-center">
                <div className="value-icon">{v.icon}</div>
                <Title level={4}>{v.title}</Title>
                <Paragraph>{v.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
