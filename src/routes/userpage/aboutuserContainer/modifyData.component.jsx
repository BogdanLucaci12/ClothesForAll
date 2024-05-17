import { ModifiyDataMainDiv, ModifiyDataContainer, CloseSign, Formular, ButtonSubmit } from "./aboutuser.styles"
import {  useState, useContext } from "react"
import { UserContext } from "../../../context/user.context";
import { UpdateUserCollection } from "../../../utility/firebase";
const ModifyData = ({ onclick, userName, alias, telefon, email }) => {
    const { userUid, setUserCollection }=useContext(UserContext)
    const [newChanges, setNewChanges] = useState({
        userName1: userName,
        alias1: alias,
        telefon1: telefon
    })
const handleChange = (event)=>{
    const {name, value} = event.target
    setNewChanges((prevChanges) => ({ ...prevChanges, [name]:value}))
}

    const onSubmitClick = ()=>{
        UpdateUserCollection(userUid, newChanges.userName1, newChanges.alias1, newChanges.telefon1)
        setUserCollection({ 
            userName: newChanges.userName1, 
            additionalInfo: { 
                alias: newChanges.alias1, 
                telefon: newChanges.telefon1 
            },
            email:email
        })
    }
    return (
        <ModifiyDataMainDiv >
            <ModifiyDataContainer>
                <CloseSign onClick={onclick} />
                <h4 style={{textAlign:"center"}}>Modifica datele contulului tau</h4>
                <Formular>
                    <form action="" style={{ display: "block", width:"100%", textAlign:"center" }}>
                        <div>
                            <label htmlFor="userName">Nume: </label>
                            <input type="text" id="userName" name="userName1" value={newChanges.userName1} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="alias">Alias: </label>
                            <input type="text" id="alias" name="alias1" value={newChanges.alias1} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="telefon">Telefon: </label>
                            <input type="text" id="telefon" name="telefon1" value={newChanges.telefon1} onChange={handleChange} />
                        </div>

                    </form>
                    <ButtonSubmit onClick={onSubmitClick}>Modifica datele</ButtonSubmit>
                </Formular>
            </ModifiyDataContainer>
           
        </ModifiyDataMainDiv>
    )
}
export default ModifyData