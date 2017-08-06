import styled, { css } from 'styled-components';

/**
*
* Block
*
* Adds global spacing to contents, use this everywhere you need margin or
* padding instead of adding padding to elements (where you can)
*
* All blocks will have left/right padding by default unless 'full' is used
*
* Usage: <Block mt={1} mb={1}>...</Block>
*
*/

const gutter = 1; // 1 rem

const Block = styled.div`
  padding-left: ${gutter}rem;
  padding-right: ${gutter}rem;
  ${props => props.mt && css`margin-top: ${props.mt}rem;`};
  ${props => props.mb && css`margin-bottom: ${props.mb}rem;`};
  ${props => props.ml && css`margin-left: ${props.ml}rem;`};
  ${props => props.mr && css`margin-left: ${props.mr}rem;`};
  ${props => props.pt && css`padding-top: ${props.pt}rem;`};
  ${props => props.pb && css`padding-bottom: ${props.pb}rem;`};
  ${props => props.pl && css`padding-left: ${props.pl}rem;`};
  ${props => props.pr && css`padding-left: ${props.pr}rem;`};
  ${props => props.full && css`padding-left: 0; padding-right: 0;`};
`;

export {
  Block,
};
