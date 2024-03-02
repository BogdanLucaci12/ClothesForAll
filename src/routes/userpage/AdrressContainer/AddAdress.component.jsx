import { Titlu, Content, Inputdiv, ExtAdresa, AdaugaAdresabttn, Option } from "./useradress.styles";
import { CloseSign, ModifiyDataContainer, ModifiyDataMainDiv } from "../aboutuserContainer/aboutuser.styles";
import { useEffect, useState } from "react";
const AdaugaAdresa = () => {
    const [optionLocalitate, setOptionLocalitate] = useState("Search");
    const [optionJudet, setOptionJudet] = useState("Search");
    const [openJudet, setOpenJudet] = useState(false);
    const [openLocalitate, setOpenLocalitate] = useState(false);
    const [judete, setJudete]=useState([]);
    const [afiseazaJudete, setAfiseazaJudete] = useState(judete);
    const inseraCautareaLocalitate = (e) => {
        const {value } = e.target;
        setOptionLocalitate(value );
    
    };

    const optionClickLocalitati = (e) => {
        setOptionLocalitate(e.target.value)
    }
    const inseraCautareaJudet= (e)=>{
        const {value}=e.target;
        setOptionJudet(value)
    }
    useEffect(()=>{

        const filterJudete=judete.filter((jud)=>jud.toLowerCase().includes(optionJudet.toLowerCase()));
        setAfiseazaJudete(filterJudete);
    }, [optionJudet])
    const optionClickJudet = (e)=>{
        setOptionJudet(e.target.value)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/virgil-av/judet-oras-localitati-romania/master/judete.json");
                const data = await response.json();
                setJudete(data.judete.map(jud => jud.nume))
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ModifiyDataMainDiv>
            <ModifiyDataContainer>
                <CloseSign />
                <Titlu>Adauga Adresa noua</Titlu>
                <Content>
                    <div><b>Persoana de contact</b></div>
                    <Inputdiv>
                        <div style={{ width: "45%" }}>
                            <div>Nume</div>
                            <div><input type="text" /></div>
                        </div>
                      
                        <div style={{ width: "45%" }}>
                            <div>Numar de telefon</div>
                            <div><input type="text" /></div>
                        </div>
                    </Inputdiv>
                </Content>
                <Content>
                    <div><b>Adresa de livrare</b></div>
                    <Inputdiv>

                        <div style={{ width: "45%" }}>
                            <div>Judet</div>
                            <div onClick={()=>setOpenJudet(!openJudet)}>
                                <input type="text" name="optionJudet" value={optionJudet} onChange={inseraCautareaJudet} onClick={() => setOptionJudet("")} />
                                {
                                    openJudet && (
                                <Option>
                                    { judete &&
                                                afiseazaJudete
                                        .map((judet)=>(
                                        <option key={judet} onClick={(e) => optionClickJudet(e)}>{judet}</option>
                                        )
                                        )
                                    }
                                </Option>
                                    )
                              }
                                </div>
                        </div>
                        <div style={{ width: "45%" }}>
                            <div>Localitate</div>
                            <div onClick={()=>setOpenLocalitate(!openLocalitate)}>
                                <input type="text" name="optionLocalitate" value={optionLocalitate} onChange={inseraCautareaLocalitate} onClick={() => setOptionLocalitate("")}/>
                              {/* {
                                openLocalitate && (
                                <Option>
                                    {Object.keys(judete).map((nume) =>
                                (
                                    <option key={nume} onClick={(e) => optionClickLocalitati(e)}>{nume}</option>
                                )
                                   )}
                                   
                                </Option>
                                )
                              } */}

                            </div>
                        </div>

                    </Inputdiv>
                    <ExtAdresa>

                        <div>Adresa</div>
                        <div><input type="text" /></div>
                    </ExtAdresa>
                    <AdaugaAdresabttn>Adauga</AdaugaAdresabttn>
                </Content>
            </ModifiyDataContainer>
        </ModifiyDataMainDiv>
    )
}
export default AdaugaAdresa