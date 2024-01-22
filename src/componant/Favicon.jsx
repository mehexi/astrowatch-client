import React from 'react';
import { Helmet } from 'react-helmet';



const Favicon = () => {

    const faviconUrl = 'A'

  return (
    <Helmet>
      <link rel="icon" href={faviconUrl} type="image/x-icon" />
    </Helmet>
  );
};

export default Favicon;