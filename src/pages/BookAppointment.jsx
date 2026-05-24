import { useState } from 'react';
import { Typography, Form, Input, DatePicker, Select, Button, Row, Col, Card, message } from 'antd';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const serviceTypes = [
  'Community Access',
  'Community Participation',
  'Support Coordination',
  'Supported Independent Living',
  'Career Orientation & Job Training',
  'Personal Care & Development Skills',
  'Respite Accommodation',
  'Daily Living Support',
];

export default function BookAppointment() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Appointment:', values);
    setTimeout(() => {
      setLoading(false);
      message.success('Your appointment request has been submitted. We will contact you shortly!');
      form.resetFields();
    }, 1500);
  };

  return (
    <div className="page book-page">
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/refer.c951803bbd970a45374d.jpg)` }}>
        <div className="page-hero-overlay">
          <Title level={1}>Book an Appointment</Title>
        </div>
      </div>

      <div className="container section">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={10}>
            <Title level={2}>Book an Appointment</Title>
            <Paragraph>
              Ready to start your journey with A2Z Community Care? Fill out the form to book an
              appointment with one of our care coordinators. We'll discuss your needs and how we
              can best support you or your loved one.
            </Paragraph>
            <Card className="info-card bg-light">
              <Title level={4}>What to Expect</Title>
              <ul className="info-list">
                <li>Initial consultation to understand your needs</li>
                <li>Discussion of available NDIS services</li>
                <li>Personalized care plan development</li>
                <li>Ongoing support and regular reviews</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={14}>
            <Card>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="serviceType" label="Service Type" rules={[{ required: true }]}>
                  <Select size="large" placeholder="Select a service">
                    {serviceTypes.map(s => (
                      <Select.Option key={s} value={s}>{s}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="dob" label="Date of Birth">
                      <DatePicker size="large" style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="address" label="Address">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="message" label="Additional Comments">
                  <TextArea rows={4} size="large" placeholder="Tell us about your needs and preferred appointment time..." />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" loading={loading}>Submit Appointment Request</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
