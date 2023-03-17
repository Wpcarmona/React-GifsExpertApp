import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = ((event)=> {
        event.preventDefault()
        const inputClean = inputValue.trim();
        if(inputClean.length <= 1)return;
        //setCategories((categories)=> [...categories,inputValue])
        onNewCategory(inputClean);
        setInputValue('');

    })

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="buscar Gif"
        value={ inputValue}
        onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}


// const [inputValue, setInputValue] = useState('') <= readOnly
