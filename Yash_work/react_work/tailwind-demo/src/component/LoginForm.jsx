import { Form, Input, Button } from "antd";

export default function LoginForm() {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Email is required" },
          { type: "email", message: "Invalid email" }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="Password"
        rules={[
          { required: true, message: "Password is required" },
          {type:"text",message:"Invalid Pass"}
        ]}
      >
        <Input.OTP />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}
