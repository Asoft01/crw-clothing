import './category-item.styles.scss'; 

const CatgeoryItem = ({ category }) => {
    const { imageUrl, title } = category; 
    return (
        <div className='category-container'>
           <div 
              className='background-image' 
              style={{ 
              backgroundImage: `url(${imageUrl})`
            }} 
          />
           <div className='category-body-container'>
             <h2>{title}</h2>
             <p>Show Now</p>
           </div>
         </div>
    )
}

export default CatgeoryItem