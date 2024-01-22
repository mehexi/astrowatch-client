import React, { useEffect } from 'react';

const Title = (e) => {
    useEffect(() => {
       document.title = e;
   },[Title])
};

export default Title;