import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from "../actions/categoriesActions";
import { fetchCats } from '../actions/catsAction';
import Category from './Category';
import BurgerMenu from './BurgerMenu';

const Sidebar = ({loadCount, setLoadCount}) => {
    const [currentId, setCurrentId] = useState("")
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        dispatch(fetchCats(currentId, loadCount))
    }, [currentId, loadCount])

    return (
        <div className="sidebar">
            { categories.map(category => <Category key={category.id} id={category.id} name={category.name} currentId={currentId} setCurrentId={setCurrentId} setLoadCount={setLoadCount} />) }
            <BurgerMenu />
        </div>
    )
}

export default Sidebar