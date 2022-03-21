import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  height: 63vh;
  padding: 0 13rem;
`;

export const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  font-size: 2rem;
  border: 2px solid red;
  padding: 1.2rem;
  border-radius: 1rem;
  border: 4px solid ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
`;

export const ContactContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
`;

export const MailLogo = styled.img`
  width: 30%;
  min-height: 40%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  margin: 0.5rem;
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 25rem;
  border-radius: 0.7rem;
`;

export const TextArea = styled.textarea`
  width: 30rem;
  height: 10rem;
  border-radius: 0.7rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background: yellow;
  border-radius: 0.7rem;
  margin: 1rem;
  font-size: 1.3rem;
  color: #160f29;
`;
