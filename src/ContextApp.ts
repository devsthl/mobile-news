/** @format */

import { createContext } from 'react';


export type AuthContextType = {
    configNavigation: any | null; // make user optional instead of the context
    setConfigNavigation: any;
  };

const ContextApp = createContext<AuthContextType>({
    configNavigation: null,
     setConfigNavigation: () =>{}
  });

export default ContextApp;
