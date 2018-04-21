import React from 'react';
import Provider from './GoodByeProvider';

const __DEV__ = process.env.NODE_ENV !== 'production';

const withGoodBye = BaseRouterComponent => {
  const factory = React.createFactory(BaseRouterComponent);
  const WithGoodBye = props => (
    <Provider>
      {({ handleGetUserConfirm }) => (
        factory({
          ...props,
          getUserConfirmation: handleGetUserConfirm
        })
      )}
    </Provider>
  );

  if (__DEV__) {
    const baseRouterName = BaseRouterComponent.displayName || BaseRouterComponent.name || 'Component';
    WithGoodBye.displayName = `withGoodBye(${baseRouterName})`;

    return WithGoodBye;
  }

  return WithGoodBye;
};

export default withGoodBye;
