const CatsContent = ({ url }) => {

    return (
        <div className="cats-item">
            <img src={url} alt="cat image" />
        </div>
    )
}

export default CatsContent