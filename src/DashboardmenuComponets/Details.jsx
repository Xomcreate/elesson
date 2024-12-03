import React from 'react';


function Details() {
  return (
    <div className=" bg-[white] grid grid-rows-5 h-[100vh] gap-[10px]">
      <div className='  row-span-2  grid grid-cols-2 mt-[10px]'> 
        <div className=' col-span-1 justify-end ml-[50%] bg-contain bg-center grid  bg-[url(./assets/myguy.jpg)] bg-no-repeat'></div>
        <div className=' col-span-1  grid justify-start items-end'><button className=' rounded-[30px] bg-[orangered] text-white font-bold w-[6vw] h-[2vw]'>Edit</button></div>
      </div>
     
     
      <div className='  flex flex-row row-span-3'>
          <div className='  w-[20%]'></div>
          <div className=' flex flex-col justify-start pl-[80px] pt-[30px] gap-[30px] text-[20px] font-semibold w-[40%]'>
            <h1>First Name: Kings</h1>
            <h1>Last Name: igboanusi</h1>
            <h1>UserName: Dex❤</h1>
            <h1>Email: priscaojimba15@gmail.com</h1>
            <h1>Phone No: 09076084515</h1>
            <h1>State: Anambra</h1>
          </div>
          <div className='  w-[40%]'></div>
        
      </div>
    </div>
  );
}

export default Details;
