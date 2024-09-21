import { IoTimeOutline } from "react-icons/io5";
import Stars from './Stars';
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';

export interface recipeDetails {
    id: number,
    name: string,
    instructions: string,
    ingredients: string[],
    tags: string[],
    rating: number,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    mealType: string[],
    reviewCount: number,
    image: string,
}


const Content = () => {

    const [recipes, setRecipes] = useState<recipeDetails[]>([])

    const getRecipes = useMemo(() => async () => {
        console.log('hello')
        try {
            const response = await axios.get('https://dummyjson.com/recipes');
            setRecipes(response.data.recipes)
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        getRecipes();
    }, [getRecipes])

    const handleOnClick = (recipe: recipeDetails) => {
        localStorage.setItem('recipe', JSON.stringify(recipe))
    }
    return (

        <section className='w-full flex justify-center items-center pb-20'>
            <div className='w-[75vw]'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full justify-items-center gap-12'>
                    {
                        recipes.map((recipe) => (
                            <Link to={`/${recipe.id}`} onClick={() => { handleOnClick(recipe) }} key={recipe.id}>
                                <div className='w-full cursor-pointer'>
                                    <div className='relative w-full'>
                                        <h2 className='absolute w-full overflow-hidden bottom-5 left-0 right-0 text-center text-white text-4xl font-Montez'>{recipe.tags.toString()}</h2>
                                        <img src={recipe.image} alt="" className='object-cover w-full' />
                                    </div>
                                    <div className='mt-3 h-28 relative'>
                                        <div className='flex justify-between gap-x-5'>
                                            <h1 className='font-Montserrat'>{recipe.name}</h1>
                                            <div>
                                                <label className='bg-[#84BD00] text-nowrap px-2 py-0.5 text-sm font-Montserrat'>Reviews: {recipe.reviewCount}</label>
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between gap-x-3 items-start absolute bottom-0'>
                                            <div className='flex gap-x-2 items-center'>
                                                <IoTimeOutline className='scale-x-[-1]' />
                                                <label className='text-sm'>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} minutes</label>
                                            </div>
                                            <div className='flex flex-col gap-y-1'>
                                                <h3 className='text-sm' >{recipe.mealType.toString()}</h3>
                                                <Stars rating={recipe.rating} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Content
