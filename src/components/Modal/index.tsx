import React from 'react';
import ReactDOM from 'react-dom';
import closeIcon from '@assets/icons/close.svg';
import { IModal } from '@customTypes/index';

import { Close, Content, IFrame, Image, Wrapper } from './styled';

const Modal: React.FC<IModal> = ({ onClose, src }) => {
    const portal = document.getElementById('portal');
    return portal
        ? ReactDOM.createPortal(
              <Wrapper data-cy={`modal`}>
                  <Content>
                      <IFrame allowFullScreen allow="autoplay" src={`${src}?autoplay=1&fs=1`}></IFrame>
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
