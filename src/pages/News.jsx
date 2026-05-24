import { Row, Col, Card, Typography, Tag } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const newsArticles = [
  {
    title: 'New NDIS Support Services Now Available in Melbourne',
    date: '15 May 2026',
    author: 'A2Z Team',
    category: 'NDIS Update',
    image: `${import.meta.env.BASE_URL}images/news.96392a1052f378025fc4.jpg`,
    excerpt: 'We are excited to announce the expansion of our NDIS support services across Melbourne, including new community participation programs and enhanced support coordination.',
    link: '/news/1',
  },
  {
    title: 'Tips for Getting the Most Out of Your NDIS Plan',
    date: '28 April 2026',
    author: 'A2Z Team',
    category: 'Tips & Advice',
    image: `${import.meta.env.BASE_URL}images/vocher.c8befbbe1f4290d9fe31.jpg`,
    excerpt: 'Learn how to maximize your NDIS funding and make informed decisions about your support services with our helpful guide.',
    link: '/news/2',
  },
  {
    title: 'Community Participation Success Story: Maria\'s Journey',
    date: '10 April 2026',
    author: 'A2Z Team',
    category: 'Success Story',
    image: `${import.meta.env.BASE_URL}images/pet.c9bde7a3b18c0cda2c74.png`,
    excerpt: 'Read about Maria\'s inspiring journey from isolation to active community participation with the support of A2Z Community Care.',
    link: '/news/3',
  },
  {
    title: 'Understanding Supported Independent Living (SIL)',
    date: '22 March 2026',
    author: 'A2Z Team',
    category: 'Education',
    image: `${import.meta.env.BASE_URL}images/banner1.jpg`,
    excerpt: 'A comprehensive guide to Supported Independent Living — what it is, who it\'s for, and how it can help you or your loved one achieve greater independence.',
    link: '/news/4',
  },
  {
    title: 'Voucher $200 cho các bạn có từ 0-18 tuổi và có thẻ Health Care Card or Pensioner Concession Card and Medicare card!',
    date: '5 March 2026',
    author: 'A2Z Team',
    category: 'Announcement',
    image: `${import.meta.env.BASE_URL}images/refer.c951803bbd970a45374d.jpg`,
    excerpt: 'Voucher $200 dành cho các bạn trẻ từ 0-18 tuổi có thẻ Health Care Card hoặc Pensioner Concession Card và Medicare card. Liên hệ ngay!',
    link: '/news/5',
  },
  {
    title: 'Buổi biểu diễn thú cưng tại Melbourne vào ngày 25-26 tháng 3/2023',
    date: '20 March 2023',
    author: 'A2Z Team',
    category: 'Event',
    image: `${import.meta.env.BASE_URL}images/Moonba.23e29837d2d344a61400.png`,
    excerpt: 'Tham gia buổi biểu diễn thú cưng tại Melbourne. Sự kiện vui nhộn dành cho cả gia đình với nhiều hoạt động thú vị.',
    link: '/news/6',
  },
  {
    title: 'MELBOURNE PIZZA RUN IN 2023!',
    date: '15 March 2023',
    author: 'A2Z Team',
    category: 'Event',
    image: `${import.meta.env.BASE_URL}images/MELBOURNE.f873d502bbcc333a8b8d.png`,
    excerpt: 'Join us for the Melbourne Pizza Run 2023! A fun community event for everyone. Come along and enjoy great food and company.',
    link: '/news/7',
  },
];

const categories = ['All', 'NDIS Update', 'Tips & Advice', 'Success Story', 'Education', 'Announcement', 'Team Update'];

export default function News() {
  return (
    <div className="page news-page">
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/news.96392a1052f378025fc4.jpg)` }}>
        <div className="page-hero-overlay">
          <Title level={1}>News & Updates</Title>
        </div>
      </div>

      <div className="container section">
        <Paragraph className="section-subtitle text-center" style={{ maxWidth: 800, margin: '0 auto 40px' }}>
          Stay up to date with the latest news, announcements, and helpful resources from A2Z Community Care.
        </Paragraph>

        <Row gutter={[24, 32]}>
          {newsArticles.map((article, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card" cover={<img src={article.image} alt={article.title} />}>
                <Tag color="#007eb9">{article.category}</Tag>
                <Title level={4} className="news-card-title">{article.title}</Title>
                <Paragraph className="news-card-excerpt">{article.excerpt}</Paragraph>
                <div className="news-card-meta">
                  <span><CalendarOutlined /> {article.date}</span>
                  <span><UserOutlined /> {article.author}</span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
