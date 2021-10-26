import { GlobalStyle } from '../style/global';

// 모든 스토리에 스타일을 적용하기 위한 글로벌 decorator
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
