import React from "react"
import ChildComponent from "./ChildComponent"
function ParentComponent() {
    let carImage1="car1.jpg"
    let carName1="TOYOTA COROLLA"
    let carPrice1="PKR 10000000"
    let carReview1="4.5 STARS"

    let carImage2="car2new.jpg"
    let carName2="HONDA CIVIC"
    let carPrice2="PKR 1200000"
    let carReview2="4.5 STARS"

    let carImage3="car3.jpg"
    let carName3="TOYOTA ROYAL"
    let carPrice3="PKR 100000000"
    let carReview3="4.8STARS"

    let carImage4="car4.jpg"
    let carName4="MERCEDIES BENZ S CLASS"
    let carPrice4="PKR 890000000"
    let carReview4="5.0 STARS"

  return (
    <div className="w-full h-screen bg-blue-200 ">
      <div>
      <h1 className='text-center text-5xl font-bold py-2'>CAR INFORMATION USING PROPS</h1>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <ChildComponent 
        image={carImage1}
         name={carName1} 
         price={carPrice1}  
         review={carReview1}
         />

<ChildComponent 
        image={carImage2}
         name={carName2} 
         price={carPrice2}  
         review={carReview2}
         />

<ChildComponent 
        image={carImage3}
         name={carName3} 
         price={carPrice3}  
         review={carReview3}
         />


<ChildComponent 
        image={carImage4}
         name={carName4} 
         price={carPrice4}  
         review={carReview4}
         />
         </div>
    </div>
  )
}

export default ParentComponent