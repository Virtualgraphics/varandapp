

import type { NextPage } from 'next';
import { Default } from '../components/layouts/Default';
import Gallery from '../components/templates/gallery/Gallery';


const GALLERY: NextPage = () => {
  return (

    <Default pageName="GALLERY">
    <Gallery/>
  </Default>
  
  );
};

export default GALLERY;