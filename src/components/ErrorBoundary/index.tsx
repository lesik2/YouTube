/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import error from '@assets/icons/error.svg';
import { ERROR_BOUNDARY_MESSAGE } from '@constants/index';

import { Error, ImageWrapper, Wrapper } from './styled';
interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Wrapper>
                    <ImageWrapper>
                        <img src={error} alt="error image" />
                    </ImageWrapper>
                    <Error>{ERROR_BOUNDARY_MESSAGE}</Error>
                </Wrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
