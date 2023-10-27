import { LikeIcon, DeleteIcon } from '@/components/Icons';


export default {
  title: 'Example/Icons',
  component: LikeIcon,
  // component: DeleteIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //layout: 'fullscreen',
    layout: 'centered',
  },
};



export const Primary = {
  args: {
    // title: "33 слова о дизайне",
    // time: "1ч 42м ",
    // cardImgUrl: "/images/33-movie-pic.jpg",

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