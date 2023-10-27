/** @type { import('@storybook/react').Preview } */
import { withRouter } from 'storybook-addon-react-router-v6';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "../src/index.css"

const preview = {
  decorators: [withRouter],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    // reactRouter: reactRouterParameters(
    //   {
    //     location: {
    //       pathParams: { userId: '42' },
    //       searchParams: { tab: 'activityLog' },
    //       state: { fromPage: 'homePage' },
    //     },
    //     routing: {
    //       path: '/users/:userId',
    //       handle: 'Profile',
    //     },
    //   }
    // ),
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
