import { AboutUserMain, Containerul, HeaderContainer, Content, Image, FooterContainer, ButtonModify } from "./aboutuser.styles"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/user.context";
import ModifyData from "./modifyData.component";
const AboutUser = () => {
    const { isLoading, usercollection } = useContext(UserContext)

    const [open, setOpen] = useState(false)
    const userName = usercollection && usercollection.userName;
    const alias = usercollection && usercollection.additionalInfo.alias;
    const telefon = usercollection && usercollection.additionalInfo.telefon;
    const email = usercollection && usercollection.email
  
const handleClick = () =>{
    setOpen(false)
}

    return (
        <AboutUserMain>
            {open && 
            <ModifyData
             onclick={handleClick}
             userName={userName}
             alias={alias}
             telefon={telefon}
             />
             }
            {isLoading ? (<div>Incarcare date</div>) : (
                <Containerul>
                    <HeaderContainer>
                        <h3>Datele contului</h3>
                    </HeaderContainer>
                    <Content>
                        <div>
                            <Image />
                        </div>

                        <div style={{ display: "block", width:"auto" }}>
                            <div style={{ display: "block", fontSize: "1.2em", width: "auto" }}>
                                <div style={{ display: "flex", gap: "1em" }}>
                                    <div>Alias: </div>
                                    <div>{alias}</div>
                                </div>
                                <div style={{ display: "flex", gap: "1em" }}>
                                    <div>Nume: </div>
                                    <div>{userName}</div>
                                </div>
                                <div style={{ display: "flex", gap: "1em" }}>
                                    <div>Email: </div>
                                    <div>{email}</div>
                                </div>
                                <div style={{ display: "flex", gap:"1em"}}>
                                    <div>Telefon: </div>
                                    <div>{telefon}</div>
                                </div>
                            </div>
                        </div>
                    </Content>
                    <FooterContainer onClick={() => setOpen(true)}>
                        <h3>Administreaza datele tale</h3>
                    </FooterContainer>
                </Containerul>
            )}
        </AboutUserMain>
    )
}
export default AboutUser