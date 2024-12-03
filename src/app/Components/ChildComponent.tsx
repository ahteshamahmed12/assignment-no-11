
const ChildComponent=(props:any)=> {
    console.log(props)
  return (
    <div className="flex justify-between text-center mb-6 border">
      <div className=" h-28  hover:shadow-lg hover:shadow-black hover:font-bold ">
      <img
      src={props.image}
      alt={props.name}
      width={300}
      />
      <div className="py-3 bg-black text-white hover:shadow-lg hover:shadow-black hover:font-bold  ">
      <h1 >{props.name}</h1>
      <h1 >{props.price}</h1>
      <h1>{props.review}</h1>
      </div>
      </div>
      </div>
      
  
 
  )
}

export default ChildComponent