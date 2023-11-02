import Form from '@/components/Form';

export default {
  title: 'Form',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //layout: 'fullscreen',
    layout: 'centered',
  },
};

const ListTemplate = {
  render: (args) => (
    <Form {...args}>
      {/* <h3 className="form__title">Title</h3> */}
      <h3 className="form-title">Title</h3>
    </Form>
  ),
};

export const InValid = {
  ...ListTemplate,
  args: {
    linkText: "Регистрация",
    url: "/signup",
    title: "Рады видеть!",
    buttonText: "Войти",
    question: "Еще не зарегистрированы?",
    formAction: "/login",
    // formMethod,
    // onClick
  },
};
