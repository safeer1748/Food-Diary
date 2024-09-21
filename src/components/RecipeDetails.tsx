import { recipeDetails } from "./Content";
import { MdOutlineDone } from "react-icons/md";
const RecipeDetails = () => {
    const data = localStorage.getItem('recipe')
    const recipe:recipeDetails = data ? JSON.parse(data) : null
  return (
    <section className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 px-20 items-center md:gap-x-40 xl:gap-x-64 gap-y-20 w-full">
        <div className="bg-[#8B888836] rounded-2xl p-5 w-full">
          <h1 className="font-Montserrat font-semibold text-md">{recipe.name}</h1>
          <p className="mt-3 font-Montserrat text-xs font-medium text-gray-800">{recipe.instructions}</p>
          <h3 className="mt-9 font-Montserrat text-sm font-medium">Ingredients</h3>
          <hr className="border my-3 border-gray-300" />
          <div className="flex  flex-col gap-y-3">
            {
              recipe.ingredients.map((ingredient, index) => (
                <div className="flex gap-x-5 items-center" key={index}>

                  <div className="bg-[#509E2F] p-[3px] text-white rounded-full">
                    <MdOutlineDone size={11} />
                  </div>
                  <label className="text-[#A2A8BA] text-xs font-Montserrat font-medium">{ingredient}</label>
                </div>
              ))
            }
          </div>
        </div>
        <img src={recipe.image} alt="image" className="w-full rounded-full object-cover object-center" />
      </div>
    </section>
  )
}

export default RecipeDetails
