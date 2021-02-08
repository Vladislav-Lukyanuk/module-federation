import React from 'react';
import ReactDom from 'react-dom';

import { Main } from './pages/main';

console.log('call inside')
ReactDom.render(<Main />, document.getElementById("root"));