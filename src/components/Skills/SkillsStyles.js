import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  //*margin: 0 0 0 0;
  padding: 0 50px 0 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 20px 20px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(4, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
    //* max-width: 500px;
    //*margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #2f70e0;
  border-radius: 20px;
  //* height: 144px;
  padding: 5px;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 100px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 65px;
    padding: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 50px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.h5`
  font-style: normal;
  text-align: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 0px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 0px;

  @media ${(props) => props.theme.breakpoints.md} {
    visibility: hidden;
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    visibility: hidden;
    font-size: 10px;
    line-height: 14px;
  }
`;
