import React, { useContext } from 'react';
import { Routes,Link} from 'react-router-dom';

import StoreContext from '../../store/context';

const RoutesPrivate = ({ component: Component, ...rest}) => {
  const { token } = useContext(StoreContext);

  return (
    <Routes
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : <Link  to="/loginT" />
      }
    />
  )
}

export default RoutesPrivate;