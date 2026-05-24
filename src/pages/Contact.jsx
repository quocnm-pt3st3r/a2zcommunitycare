import { useState } from 'react';
import { Row, Col, Card, Typography, Form, Input, Button, message } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Contact form:', values);
    setTimeout(() => {
      setLoading(false);
      message.success('Thank you! Your message has been sent. We will get back to you shortly.');
      form.resetFields();
    }, 1000);
  };

  return (
    <div className="page contact-page">
      <div className="page-hero" style={{ backgroundImage: 'url(/images/contact_us.015effc567a3fe61ae30.jpg)' }}>
        <div className="page-hero-overlay">
          <Title level={1}>Contact Us</Title>
        </div>
      </div>

      <div className="container section">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={14}>
            <Title level={2}>Get in Touch</Title>
            <Paragraph>
              Have a question or want to learn more about our services? We'd love to hear from you.
              Fill out the form below and our friendly team will get back to you as soon as possible.
            </Paragraph>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: 'Please enter your first name' }]}>
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Please enter your last name' }]}>
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                <Input size="large" />
              </Form.Item>
              <Form.Item name="phone" label="Phone">
                <Input size="large" />
              </Form.Item>
              <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter your message' }]}>
                <TextArea rows={5} size="large" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" loading={loading}>Send Message</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={24} md={10}>
            <Card className="contact-info-card">
              <Title level={3}>Contact Information</Title>
              <div className="contact-info-item">
                <EnvironmentOutlined className="contact-info-icon" />
                <div>
                  <Text strong>Address</Text>
                  <Paragraph>Airlie Avenue, Point Cook<br />Melbourne, VIC 3030</Paragraph>
                </div>
              </div>
              <div className="contact-info-item">
                <MailOutlined className="contact-info-icon" />
                <div>
                  <Text strong>Email</Text>
                  <Paragraph>Info@a2zcommunitycare.com.au</Paragraph>
                </div>
              </div>
              <div className="contact-info-item">
                <PhoneOutlined className="contact-info-icon" />
                <div>
                  <Text strong>Phone</Text>
                  <Paragraph>(03) XXXX XXXX</Paragraph>
                </div>
              </div>
              <div className="contact-info-item">
                <ClockCircleOutlined className="contact-info-icon" />
                <div>
                  <Text strong>Working Hours</Text>
                  <Paragraph>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</Paragraph>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
