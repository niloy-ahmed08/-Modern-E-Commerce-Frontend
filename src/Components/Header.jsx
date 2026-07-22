import React from 'react'


const Header = () => {
  return (
    <div className='bg-black py-3 '>

      <div className='container'>

        <div className=' flex justify-between text-white'>
          <div></div>
          <p className='text-sm '>Summer Sale For All Swim Suits And Free Express
             Delivery - OFF 50%! <span className='border-b-2 pl-3  '>ShopNow</span> </p>
           
           <select className='bg-black coursor-pointer'>
  <option value="volvo">English</option>
  <option value="saab">Spanish</option>
  <option value="mercedes" >Portugish</option>
  <option value="audi">Arabic</option>
    <option value="mercedes">Portugish</option>
  <option value="audi">Arabic</option>
</select>
           

        </div>

      </div>
      
    </div>
  )
}

export default Header
