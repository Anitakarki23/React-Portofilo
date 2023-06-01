import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header';

export const Layout = ({children}) => {
  return( <>
  {/* header */}
  <Header/>

  {/* dynamic page  */}
  <main className="main">{children}</main>


{/* footer */}
<Footer/>
</>
  );
};