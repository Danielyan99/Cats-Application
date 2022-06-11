import Cat from './Cat'

const CatsInner = ({ cats, setLoadCount, loadCount }) => {
    
    return (
        <>
            <div className="cats">
                    {cats.map((cat, i) => <Cat key={i} url={cat.url} />)}
                </div> 
                <div 
                    className='load-more'
                    onClick={() => setLoadCount(loadCount+=10)}
                ><button>Load More</button></div>
        </>
    )
}

export default CatsInner