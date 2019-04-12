import React, { CSSProperties, ErrorInfo } from 'react'

interface State {
    hasError: boolean;
}

interface Props {
    fallbackUI: any;
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallbackUI;
    }

    return this.props.children
    }
}

