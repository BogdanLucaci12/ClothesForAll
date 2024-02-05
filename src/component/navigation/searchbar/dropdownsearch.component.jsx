import ItemMatched from "./itemMathced.componens"
import { DropdownSearchStyles } from "./searchbarnav.styles"

const object={
    nume:"jordan",
    categorie:"hanorac",
    pret:"32502"    
}
const DropdownSearch = ({ itemToBeShown })=>{
    console.log(itemToBeShown)
    return (
        <DropdownSearchStyles >
            {
                itemToBeShown && Object.values(itemToBeShown).map((item)=> 
                    <ItemMatched key={item.id} produs={item}/>
                )
            }
            
        </DropdownSearchStyles>
    )
}

export default DropdownSearch