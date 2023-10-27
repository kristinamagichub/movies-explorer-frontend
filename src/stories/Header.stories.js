import Header from '@/components/Header';


export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    isLoggedIn: true
  },
};

export const LoggedOut = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    isLoggedIn: false
  },
};

export const Primary = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    isLoggedIn: true,
    isPrimary: true
  },
};
export const Secondary = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    isLoggedIn: true,
    isPrimary: false
  },
};