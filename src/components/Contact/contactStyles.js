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
  padding-left: 1.4rem;
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
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};
  outline: none;
  resize: none;
  margin-bottom: .6rem;
`;

export const SubmitButton = styled.button`
  width: 8rem;
  height: 3.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  border-radius: 2rem;
  border: ${(props) => props.theme.border};
  font-family: ${(props) => props.theme.fontFamily};
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-weight: 700;
  margin: .9rem .3rem;

  :hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.orange};
    transition: ease-in-out .3s;
  }
`;

export const ContactImageContainer = styled.div`
    grid-area: 3/7/11/11;
    box-shadow: ${props => props.theme.boxShadow}, ${props => props.theme.inset};
    border: 5px solid ${props => props.theme.body};
    border-radius: 2rem;
    margin: 0 3rem;
    
`;
