import React from 'react'


import img1 from "./small/img-1.jpg";
import img2 from "./small/img-2.jpg";
import img3 from "./small/img-3.jpg";
import img4 from "./small/img-4.jpg";
import img5 from "./small/img-5.jpg";
import img6 from "./small/img-6.jpg";
import Image from 'next/image';



function Home() {
  return (
    <>
      <Image src={img1} alt="Picture of the author" />
      <Image src={img2} alt="Picture of the author" />
      <Image src={img3} alt="Picture of the author" />
      <Image src={img4} alt="Picture of the author" />
      <Image src={img5} alt="Picture of the author" />
      <Image src={img6} alt="Picture of the author" />
    </>
  )
}

export default Home