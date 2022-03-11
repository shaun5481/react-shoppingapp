import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Icon = styled(FontAwesomeIcon)`
  font-size: 65px;
  color: #ffffff;
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 0.3s;
  z-index: 100;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;