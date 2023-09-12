import { useState } from "react"
import { CategoryAdd } from "./components/CategoryAdd"
import { GifGrid } from "./components/GifGrid"





export const GifExpertApp = ({ category }) => {

    const [categories, setCategories] = useState(['Lionel Messi'])
    // console.log(categories);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        console.log(newCategory);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <CategoryAdd onNewCategory={(e) => onAddCategory(e)}
            //setCategories = {setCategories} />   {/* Manda una prop */ }

            />

            {/* Listado de Gif*/}

            {/* <button onClick={onAddCategory}>Agregar</button> */}



            {categories.map((category) =>
            (
                <GifGrid key={category} category={category} />
            )
            )}




            {/* Gif Item */}
        </>
    )
}
