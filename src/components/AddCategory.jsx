import { useState } from "react"


const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e)=>{
        setInputValue(e.target.value)
       
    }

    const onSubmit = (e)=>{
       e.preventDefault();
    if (inputValue.trim().length <= 1)return;

         onNewCategory(inputValue.trim())
        // setCategories([...categories, inputValue])
        setInputValue('');
    }

  return (
  
   <form onSubmit={ e=> onSubmit(e)}>

       <input 
       type="text"
       placeholder="Buscar Gif"
       value={inputValue}
       onChange = {onInputChange}
       />
   </form>
   
  
  )
}

export default AddCategory