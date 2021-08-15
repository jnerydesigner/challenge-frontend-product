import styled, { css } from 'styled-components';


interface ToastProps {
  type: "info" | "success" | "danger"
}



export const ToastComponent = styled.div<ToastProps>`
 margin-bottom: 10px;
  
  border-radius: 8px;

  ${props => props.type === 'danger' && css`
    background-color: rgba(252, 62, 63,.9);
    border: 2px solid rgba(252, 62, 63,1);
    color: #fff;
  `}

  ${props => props.type === 'info' && css`
    background-color: rgba(255, 234, 167,.9);
    border: 2px solid rgba(255, 234, 167,1);
    color: rgba(99, 110, 114,1.0);
  `}

  ${props => props.type === 'success' && css`
    background-color: rgba(9, 132, 227,.9);
    border: 2px solid rgba(9, 132, 227,1);
    color: #fff;
  `}

  
  width: 330px;

  position: relative;
  padding: 10px 20px 10px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  

  > svg{
    width: 30px;
    height: 30px;
    margin: 4px 12px 0 0;
  }

  div{
    flex: 1;
    p{
      font-size: 14px;
      opacity: 0.8;
      line-height: 16px;
    }
  }

  button{
    position: absolute;
    right: 3px;
    top: 4px;
  }
`;
