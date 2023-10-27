import MoviesCard from '@/components/MoviesCard';
import { DeleteIcon, LikeIcon } from '@/components/Icons';

export default {
  title: 'Example/MoviesCard',
  component: MoviesCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //layout: 'fullscreen',
    layout: 'centered',
  },
};

export const WithDeleteIcon = {
  args: {
    title: "33 слова о дизайне",
    time: "1ч 42м ",
    cardImgUrl: "/images/33-movie-pic.jpg",
    Icon: DeleteIcon
  },
};

export const WithLikeIconPrimary = {
  args: {
    title: "33 слова о дизайне",
    time: "1ч 42м ",
    cardImgUrl: "/images/33-movie-pic.jpg",
    Icon: LikeIcon,
    iconProps: {
      isPrimary: true
    }
  },
};

export const WithLikeIconSecondary = {
  args: {
    title: "33 слова о дизайне",
    time: "1ч 42м ",
    cardImgUrl: "/images/33-movie-pic.jpg",
    Icon: LikeIcon,
    iconProps: {
      isPrimary: false
    }
  },
};
