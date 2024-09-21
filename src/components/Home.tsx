import Search from "./Search"
import { lazy, Suspense } from 'react';
const Content = lazy(() => import('./Content'));
const Home = () => {
    return (
        <>
            <Search />
            <Suspense fallback={<h1 className='text-center font-medium text-2xl mt-20'>loading...</h1>}>
                <Content />
            </Suspense>
        </>
    )
}

export default Home
