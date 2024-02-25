import ItemMatched from "./itemMathced.componens"
import { DropdownSearchStyles } from "./searchbarnav.styles"
const DropdownSearch = ({ itemToBeShown })=>{
  
    return (
        <DropdownSearchStyles >
            {
                itemToBeShown && Object.values(itemToBeShown).map((item)=> {
                    const randomKey = `${item.id}_${item.marime}_${item.culoare}`;
                      return <ItemMatched key={randomKey} produs={item}/>
                }
                )
            }
        </DropdownSearchStyles>
    )
}

export default DropdownSearch