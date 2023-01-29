

import type { NextPage } from 'next';
import { Default } from '../components/layouts/Default';
import Island from '../components/templates/island/Island';

const ISLAND: NextPage = () => {
  return (

    <Default pageName="ISLAND">
    <Island/>
  </Default>
  
  );
};

export default ISLAND;