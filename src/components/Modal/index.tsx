import React from 'react';
import ReactDOM from 'react-dom';
import { Close, Content, IFrame, Wrapper, Image } from './styled';
import closeIcon from '../../assets/icons/close.svg';

interface IModal {
    onClose: () => void;
    src: string;
}
const Modal: React.FC<IModal> = ({ onClose, src }) => {
    const portal = document.getElementById('portal');
    return portal
        ? ReactDOM.createPortal(
              <Wrapper>
                  <Content>
                      <IFrame src={`${src}?autoplay=1&fs=1`}></IFrame>
                      <Close onClick={onClose}>
                          <Image className="close-img" src={closeIcon} alt="close modal window" />
                      </Close>
                  </Content>
              </Wrapper>,

              portal
          )
        : null;
};
export default Modal;