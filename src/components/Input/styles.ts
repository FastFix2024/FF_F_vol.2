import styled from "@emotion/styled";

export const InputComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: fit-content;
`;

export const InputComponentLabel = styled.label`
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    height: auto;
    color: #243f2b;
`;

export const InputComponentWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const InputComponent = styled.input`
    width: 100%;
    height: auto;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 8px;
    background-color: #7ba6ba;
    font-size: 16px;
    color: black;
    box-sizing: border-box;

    &::placeholder {
        color: #243f2b;
        opacity: 0.8;
    }
`;

export const ToggleButton = styled.img`
  position: absolute;
  width: 20px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  color: blue;
  padding: 0;
  margin: 0;
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #e11452;
  font-size: 16px;
  height: 18px;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  animation: blink 1s infinite;
`;