import { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Div1 } from "./paymentPage.styles";
import { Add } from "../../component/button/button.styles";
import AdaugaCard from "../userpage/cardContainer/adaugaCard.component";

const SelectAdresaLivare = ({ showAdaugaAdresa })=>{
    return (
        <Fragment>
           
            <div>

            <h4 style={{textAlign:"center"}}>Selecteaza adresa de livrare</h4>
            <div className="py-3">
                <div><b>Persoana de contact</b></div>
                <div>Lucaci Bogdan - 0745466263</div>
                <div>Adresa de livrare</div>
                <div>Constantin Brâncuși nr.149 - Cluj-Napoca, Cluj</div>
            </div>
            <div >
                <div className="pb-4">
                    <b>
                    Selecteaza o alta adresa
                    </b>
                </div>
                <div>
                    <Div1>
                        <div>
                        Lucaci Bogdan  - 051488
                        </div>
                        <div>
                            Gh dima 5
                        </div>
                    </Div1>
                </div>
            </div>
            </div>
            <Add className="my-2" onClick={showAdaugaAdresa}>Adauga adresa noua</Add>
            
        </Fragment>
    )
}
export default SelectAdresaLivare