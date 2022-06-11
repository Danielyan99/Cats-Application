import { useSelector } from 'react-redux';
import CatsInner from './CatsInner';

const CatsContent = ({ setLoadCount, loadCount }) => {
    const cats = useSelector(state => state.cats.items)
    const loading = useSelector(state => state.cats.loading)
    
    return (
        <>
        {!loading ? 
            <CatsInner cats={cats} setLoadCount={setLoadCount} loadCount={loadCount} />
            :
            <div className='loader'></div>
        
        }
        </>
    )
}

export default CatsContent