

import type { NextPage } from 'next';
import { Default } from '../components/layouts/Default';
import Cartoon from '../components/templates/cartoon/Cartoon';

const CARTOON: NextPage = () => {
  return (

    <Default pageName="CARTOON">
    <Cartoon/>
  </Default>
  
  );
};

export default CARTOON;