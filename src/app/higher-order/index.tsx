const notificationWrapper = (WrappedComponent: any) => {
  return (props: any) => <WrappedComponent {...props} />;
};

export { notificationWrapper };
