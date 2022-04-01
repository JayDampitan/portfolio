import styled from "styled-components";

export const ContactForm = styled.form`
  grid-area: 2/4/12/11;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.border};
`;

export const ContactInfoContainer = styled.div`
  grid-area: 2/4/12/8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2rem;
  color: ${(props) => props.theme.orange};
  font-family: ${(props) => props.theme.fontFamily};
`;

export const Input = styled.input`
  box-shadow: ${(props) => props.theme.inset};
  background-color: ${(props) => props.theme.body};
  border-radius: 0.5rem;
  border: ${(props) => props.theme.border};
  width: 60%;
  height: 10%;
  margin: 1rem 0;
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  padding: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  outline: none;
`;

export const TextArea = styled.textarea`
  box-shadow: ${(props) => props.theme.inset};
  background-color: ${(props) => props.theme.body};
  border-radius: 0.8rem;
  border: ${(props) => props.theme.border};
  width: 60%;
  height: 40%;
  padding: 1rem;
  padding-top: 0.5rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};
  outline: none;
  resize: none;
  margin-bottom: 0.6rem;
`;

export const SubmitButton = styled.button`
  width: 8rem;
  height: 3.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.orange};
  border-radius: 2rem;
  border: ${(props) => props.theme.border};
  font-family: ${(props) => props.theme.fontFamily};
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-weight: 500;
  margin: 0.9rem 0.3rem;

  :hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    transition: ease-in-out 0.2s;
    box-shadow: ${(props) => props.theme.inset};
  }
`;

export const ContactImageContainer = styled.div`
  grid-area: 3/7/11/11;
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  border: 5px solid ${(props) => props.theme.body};
  border-radius: 2rem;
  margin: 1rem 5rem 3rem 2rem;
  padding: 2rem 0 2rem 9rem;
`;

export const ContactImage = styled.img`
  width: 90%;
  height: 100%;
`;

// -----------Background Elements

export const FirstContactContainer = styled.div`
  grid-area: 1/1/3/3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstContactLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
`;
export const SecondContactContainer = styled.div`
  grid-area: 2/3/12/4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const SecondContactLine = styled.div`
  width: 150%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);
`;

export const ThirdContactContainer = styled.div`
  grid-area: 6/11/12/12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ThirdContactLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);
`;

export const FourthContactContainer = styled.div`
  grid-area: 6/12/7/14;
  display: flex;
  align-items: center;
  justify-content: center;
`;
