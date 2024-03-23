import { Titlu, Content, Inputdiv, ExtAdresa, AdaugaAdresabttn, Option, MesajSucces } from "./useradress.styles";
import { CloseSign, ModifiyDataContainer, ModifiyDataMainDiv } from "../aboutuserContainer/aboutuser.styles";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { AddAdress } from "../../../utility/firebase";

const AdaugaAdresa = ({ close, adaugaArrayAdresa, sendAdressNoUser }) => {
    const { userUid } = useContext(UserContext)
    const [optionLocalitate, setOptionLocalitate] = useState("Search");
    const [optionJudet, setOptionJudet] = useState("Search");
    const [openJudet, setOpenJudet] = useState(false);
    const [openLocalitate, setOpenLocalitate] = useState(false);
    const [judete, setJudete] = useState([]);
    const [afiseazaJudete, setAfiseazaJudete] = useState(judete);
    const [localitati, setLocalitati] = useState([]);
    const [localitateSelectataPeJudet, setLocalitateSelectataPeJudet] = useState([])
    const [afiseazaLocalitati, setAfiseazaLocalitati] = useState(localitateSelectataPeJudet)
    const [mesajSucces, setMesajSucces] = useState(false)
    const inseraCautareaLocalitate = (e) => {
        const { value } = e.target;
        setOptionLocalitate(value);
    };

    const optionClickLocalitati = (e) => {
        setOptionLocalitate(e.target.value)
    }

    const inseraCautareaJudet = (e) => {
        const { value } = e.target;
        setOptionJudet(value)
    }
    useEffect(() => {
        const localitatiAsociateJudetului = localitati.find(loc => loc.nume === optionJudet)
        if (localitatiAsociateJudetului) {
            setLocalitateSelectataPeJudet(localitatiAsociateJudetului.localitati)
        }
    }, [optionJudet, localitati]);
    useEffect(() => {
        setAfiseazaLocalitati(localitateSelectataPeJudet)

    }, [localitateSelectataPeJudet])

    useEffect(() => {
        const filterLocalitate = localitateSelectataPeJudet.filter((loc) => loc.nume.toLowerCase().includes(optionLocalitate.toLowerCase()));
        setAfiseazaLocalitati(filterLocalitate);

    }, [optionLocalitate, localitateSelectataPeJudet])

    useEffect(() => {
        const filterJudete = judete.filter((jud) => jud.toLowerCase().includes(optionJudet.toLowerCase()));
        setAfiseazaJudete(filterJudete);
        setOptionLocalitate("Search");

    }, [optionJudet, judete])
    const optionClickJudet = (e) => {
        setOptionJudet(e.target.value)

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/virgil-av/judet-oras-localitati-romania/master/judete.json");
                const data = await response.json();
                setJudete(data.judete.map(jud => jud.nume))
                setLocalitati(data.judete)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const adaugaClickButton = () => {
        const nume = document.getElementById("nume");
        const telefon = document.getElementById("telefon");
        const judet = document.getElementById("Judet");
        const localitate = document.getElementById("Localitate");
        const adresa = document.getElementById("adresa");
        if (nume.value.trim() === "") {
            nume.style.border = "5px solid red";
            return;
        } else {
            nume.style.border = "";
        }

        if (telefon.value.trim() === "") {
            telefon.style.border = "5px solid red";
            return;
        } else {
            telefon.style.border = "";
        }

        if (judet.value.trim() === "" || judet.value.trim() === "Search") {
            judet.style.border = "5px solid red";
            return;
        } else {
            judet.style.border = "";
        }

        if (localitate.value.trim() === "" || localitate.value.trim() === "Search") {
            localitate.style.border = "5px solid red";
            return;
        } else {
            localitate.style.border = "";
        }

        if (adresa.value.trim() === "") {
            adresa.style.border = "5px solid red";
            return;
        } else {
            adresa.style.border = "";
        }
        const adresaTrimitere = {
            nume: nume.value.trim(),
            telefon: telefon.value.trim(),
            judet: judet.value.trim(),
            localitate: localitate.value.trim(),
            adresa: adresa.value.trim()
        }
        if(userUid===undefined){
            sendAdressNoUser(adresaTrimitere)
        }
        else {
            AddAdress(userUid, nume.value.trim(), telefon.value.trim(), judet.value.trim(), localitate.value.trim(), adresa.value.trim())
            adaugaArrayAdresa(adresaTrimitere)
        }
        nume.value = "";
        telefon.value = "";
        setOptionJudet("Search");
        setOptionLocalitate("Search");
        adresa.value = "";
        setMesajSucces(true)
        setTimeout(() => {
            setMesajSucces(false)
        }, 2000);
    };
    return (
        <ModifiyDataMainDiv>
            <ModifiyDataContainer>
                {
                    mesajSucces && <MesajSucces>Adresa introdusa cu succes</MesajSucces>
                }

                <CloseSign onClick={close} />
                <Titlu>Adauga Adresa noua</Titlu>
                <Content>
                    <div><b>Persoana de contact</b></div>
                    <Inputdiv>
                        <div style={{ width: "45%" }}>
                            <div>Nume</div>
                            <div><input
                                type="text"
                                id="nume"
                            /></div>
                        </div>
                        <div style={{ width: "45%" }}>
                            <div>Numar de telefon</div>
                            <div><input
                                type="text"
                                id="telefon"
                            /></div>
                        </div>
                    </Inputdiv>
                </Content>
                <Content>
                    <div><b>Adresa de livrare</b></div>
                    <Inputdiv>

                        <div style={{ width: "45%" }}>
                            <div>Judet</div>
                            <div onClick={() => setOpenJudet(!openJudet)}>
                                <input
                                    type="text"
                                    id="Judet"
                                    name="optionJudet"
                                    value={optionJudet}
                                    onChange={inseraCautareaJudet}
                                    onClick={() => setOptionJudet("")} />
                                {
                                    openJudet && (
                                        <Option>
                                            {judete &&
                                                afiseazaJudete
                                                    .map((judet) => (
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
                            <div onClick={() => setOpenLocalitate(!openLocalitate)}>
                                <input
                                    id="Localitate"
                                    type="text"
                                    name="optionLocalitate"
                                    value={optionLocalitate}
                                    onChange={inseraCautareaLocalitate}
                                    onClick={() => setOptionLocalitate("")}

                                />
                                {
                                    openLocalitate && (
                                        <Option>
                                            {
                                                afiseazaLocalitati && (
                                                    afiseazaLocalitati.map((loc, idx) => (
                                                        <option key={idx} onClick={(e) => optionClickLocalitati(e)} >{loc.nume}</option>
                                                    )
                                                    )
                                                )
                                            }
                                        </Option>
                                    )
                                }
                            </div>
                        </div>
                    </Inputdiv>
                    <ExtAdresa>
                        <div>Adresa</div>
                        <div><input
                            type="text"
                            id="adresa"

                        /></div>
                    </ExtAdresa>
                    <AdaugaAdresabttn onClick={adaugaClickButton}>Adauga</AdaugaAdresabttn>
                </Content>
            </ModifiyDataContainer>
        </ModifiyDataMainDiv>
    )
}
export default AdaugaAdresa