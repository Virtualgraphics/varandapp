
import type { NextPage } from 'next';
import { Default } from '../components/layouts/Default';
import Webtoon from '../components/templates/webtoon/Webtoon';

const WEBTOON: NextPage = () => {
  return (

    <Default pageName="WEBTOON">
    <Webtoon/>
  </Default>
  
  );
};

export default WEBTOON;