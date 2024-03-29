import React, { useEffect, useState } from 'react';
import { ContainerDataPicker, ContentDataPicker, HeaderDropdown } from "./datapicker.styles";

const luna = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];

const an = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030
];

const DataPicker = ({ handleClickYear, handleClickMonth, warningYear, warningMonth, reset, insertYear, insertMonth }) => {
    const [openluna, setOpenluna] = useState(false);
    const [openAn, setOpenAn] = useState(false);
    const [selecteAn, setSelecteAn] = useState("An");
    const [selectLuna, setSelectLuna] = useState("Luna");
useEffect(() => {
    setSelectLuna("Luna");
    setSelecteAn("An")
},[reset])
useEffect(()=>{
    if(insertMonth !== undefined){
        setSelectLuna(insertMonth);
    }
    if(insertYear !== undefined){
    setSelecteAn(insertYear)}
}, 
[insertYear, insertMonth])
    return (
        <div>
            <ContainerDataPicker>
                <div>
                    <HeaderDropdown
                        onClick={() => setOpenluna(!openluna)}
                        $warning={warningMonth}
                    >{selectLuna}</HeaderDropdown>
                    {
                        openluna && (
                            <ContentDataPicker>
                                {luna.map((luna, index) => (
                                    <div
                                        key={index}
                                        onClick={(e) => {
                                            handleClickMonth(luna)
                                            setSelectLuna(luna)
                                            setOpenluna(!openluna)
                                        }}
                                    >{luna}</div>
                                ))}
                            </ContentDataPicker>
                        )
                    }
                </div>
                <div>
                    <HeaderDropdown
                        $warning={warningYear}
                        onClick={() => setOpenAn(!openAn)}
                    >{selecteAn}</HeaderDropdown>
                    {
                        openAn && (
                            <ContentDataPicker>
                                {an.map((an, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            handleClickYear(an)
                                            setSelecteAn(an)
                                            setOpenAn(!openAn)
                                        }}
                                    >{an}</div>
                                ))}
                            </ContentDataPicker>
                        )
                    }
                </div>
            </ContainerDataPicker>
        </div>
    )
}

export default DataPicker;
