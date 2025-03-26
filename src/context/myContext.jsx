import React, { createContext } from 'react';

const myContext = createContext({ subItems: [], setSubItems: () => { } });

export default myContext;