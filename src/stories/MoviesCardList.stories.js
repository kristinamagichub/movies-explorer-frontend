import MoviesCardList from '@/components/MoviesCardList';
import { DeleteIcon } from '@/components/Icons';

export default {
  title: 'Example/MoviesCardList',
  component: MoviesCardList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const arr = Array(16).fill({
  title: "33 слова о дизайне",
  time: "1ч 42м ",
  cardImgUrl: "/images/33-movie-pic.jpg",
  icon: <DeleteIcon />
});

export const Base = {
  args: {
    listArr: arr
  },
};
