import React, { useEffect } from 'react';

function Book() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
        document.head.removeChild(script);
    };
}, []);

  return (
    <>
      <iframe className='py-24' data-tally-src="https://tally.so/r/nP6Q71?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="BOOK NOW !!"></iframe> 

    </>
)
}

export default Book