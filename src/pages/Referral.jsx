import { useState } from 'react';
import { Typography, Form, Input, Select, DatePicker, Button, Row, Col, Card, Radio, Checkbox, message } from 'antd';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ndisServices = [
  'Community Access',
  'Community Participation',
  'Support Coordination',
  'Career Orientation and Job Training',
  'Personal Care & Development Skilled',
  'Respite Accommodation',
  'Core Support',
  'Self Care Support',
];

const urgencyOptions = ['Non-urgent', 'Urgent', 'Very Urgent'];

export default function Referral() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Referral:', values);
    setTimeout(() => {
      setLoading(false);
      message.success('Referral submitted successfully! We will be in touch soon.');
      form.resetFields();
    }, 1500);
  };

  return (
    <div className="page referral-page">
      <div className="page-hero" style={{ backgroundImage: 'url(/images/refer.c951803bbd970a45374d.jpg)' }}>
        <div className="page-hero-overlay">
          <Title level={1}>MAKE A REFERRAL</Title>
        </div>
      </div>

      <div className="container section">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={10}>
            <Title level={2}>Refer Someone</Title>
            <Paragraph>
              Know someone who could benefit from our NDIS support services? Fill out the referral
              form below and our team will reach out to them as soon as possible.
            </Paragraph>
            <Card className="info-card bg-light">
              <Title level={4}>Who Can Refer?</Title>
              <ul className="info-list">
                <li>Support Coordinators</li>
                <li>NDIS Plan Managers</li>
                <li>Healthcare Professionals</li>
                <li>Family Members & Carers</li>
                <li>Self-referrals welcome</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={14}>
            <Card>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Title level={4}>Referrer Details</Title>
                <Form.Item name="referringAgency" label="Referring Agency" rules={[{ required: true }]}>
                  <Input size="large" />
                </Form.Item>
                <Form.Item name="referrerContact" label="Please indicate the best contact person for this referral and their best contact number" rules={[{ required: true }]}>
                  <Input size="large" placeholder="Name and phone number" />
                </Form.Item>
                <Form.Item name="hearAboutUs" label="Where did you hear about us?">
                  <Input size="large" />
                </Form.Item>

                <Title level={4} style={{ marginTop: 24 }}>Participant Details</Title>
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
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="dob" label="Date of Birth">
                      <DatePicker size="large" style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="ndisNumber" label="NDIS Number">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="address" label="Address">
                  <Input size="large" />
                </Form.Item>

                <Title level={4} style={{ marginTop: 24 }}>Health & Support Needs</Title>
                <Form.Item name="cognitiveDisability" label="Does client have any cognitive disability?">
                  <Radio.Group>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="mentalHealth" label="Does the client have a mental health condition?">
                  <Radio.Group>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="behavioursOfConcern" label="Does the client have any behaviours of concern?">
                  <Radio.Group>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="physicalHealth" label="Does the client have any physical health condition?">
                  <Radio.Group>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </Form.Item>

                <Title level={4} style={{ marginTop: 24 }}>Service Request</Title>
                <Form.Item name="serviceType" label="Service Type" rules={[{ required: true }]}>
                  <Select size="large" placeholder="Select service type" mode="multiple">
                    {ndisServices.map(s => (
                      <Select.Option key={s} value={s}>{s}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="hoursPreferred" label="Support Requested Hours / Days Preferred">
                  <Input size="large" placeholder="e.g., 10 hours per week, Monday & Wednesday" />
                </Form.Item>
                <Form.Item name="urgency" label="Urgency of Service">
                  <Select size="large" placeholder="Select urgency">
                    {urgencyOptions.map(u => (
                      <Select.Option key={u} value={u}>{u}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="referralDate" label="Referral Date">
                  <DatePicker size="large" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="additionalInfo" label="Additional comments / Useful Information">
                  <TextArea rows={4} size="large" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" loading={loading}>Submit Referral</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
