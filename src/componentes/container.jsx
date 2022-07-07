export function Container({generateImages, name, image}){
return(
    <div>
    
    <div className="container">
    
    <div className="button" onClick={generateImages}> Generate {name} </div>
    <div className="img box"> <img className="img" src={image}/></div>
    
    </div>


    </div>
)
}