const breakpointsList = {
  mobile: 800,
};

export const breakpoints = (media, css, type = "screen") => {
  if (!media || !css) {
    return;
  }
  return `
    @media ${type} and (max-width: ${breakpointsList[media]}px) {
      ${css};
    }
    `;
};

/* const MobileWrapper = css`
  width: 40px;
  height: 40px;
  background-color: hotpink;
`;

export const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  background-color: antiquewhite;
  ${breakpoints("mobile", `${MobileWrapper}`)};
`;
 */
