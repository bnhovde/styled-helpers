import styled, { css } from 'styled-components';

/**
*
* Drawer
*
* UI component for displaying contents in a scrollable drawer
*
* Usage: <Drawer open>...</Drawer>
*
*/

const gutter = 1; // 1 rem

const Drawer = styled.section`
  position: fixed;
  will-change: top;
  width: 30rem;
  top: 0;
  bottom: 0;
  right: 0;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.3s ease;

  background-color: pink;

  ${props => props.open && css`transform: translate3d(0, 0, 0);`};
`;

export default Drawer;
