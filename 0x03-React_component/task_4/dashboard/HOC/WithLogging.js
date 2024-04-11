import React, {Component} from "react";

const WithLogging = (WrappedComponent) => {
  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name || WrappedComponent.displayName || 'Component'} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name || WrappedComponent.displayName || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return WithLoggingComponent;
};

export default WithLogging;
