import { useState } from "react"


export const CategoryAdd = ({ onNewCategory }) => { // Desestrucuturo a la prop que mande en gifexpert

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {

    e.preventDefault()
    // console.log(inputValue);

    if ( inputValue.trim().length <=1 ) return

    // setCategories((categories) => [...categories, inputValue]) 
    setInputValue('') // Se borra al apretar enter al mandar el submit
    onNewCategory( inputValue.trim() )  // recibe a la prop del componente padre
  }

  return (

    <form onSubmit={ onSubmit }>

      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />

    </form>

  )
}
