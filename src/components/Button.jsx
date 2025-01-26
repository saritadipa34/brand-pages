const Button =({name,className})=>{
    return(
        <button  className={`cursor-pointer text-xs ${className}`}>
         {name} 
        
        </button>
    )
}
export default Button;