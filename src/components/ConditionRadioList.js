import React, { useEffect, useState } from 'react';
import './ConditionRadioList.css';

function ConditionRadioList({ radioEditable,handleSelectedConditions }) {
    const initialConditions = ['1-1', '2-1', '3-1', '4-1', '5-1', '6-1'];
    const [selectedConditions, setSelectedConditions] = useState(initialConditions);

    const handleConditionChange = (index) => (event) => {
        const newConditions = [...selectedConditions];
        newConditions[index] = event.target.id;
        setSelectedConditions(newConditions);
        
    };
    
    useEffect(() => {
        const radioValues = selectedConditions.map(item => parseInt(item.split('-')[1]));
        handleSelectedConditions(radioValues);
    }, [selectedConditions]);


    const conditionsData = [
        { label: '밑줄 흔적:', options: ['없음', '연필/샤프', '볼펜/형광펜'] },
        { label: '필기 흔적:', options: ['없음', '연필/샤프', '볼펜/형광펜'] },
        { label: '겉표지:', options: ['깨끗함', '깨끗하지 않음'] },
        { label: '이름 기입:', options: ['없음', '있음'] },
        { label: '페이지 변색:', options: ['없음', '있음'] },
        { label: '페이지 훼손:', options: ['없음', '있음'] },
    ];

    return (
        <ul className={`condition-list ${radioEditable ? '' : 'disabled-list'}`}>
            {conditionsData.map((condition, index) => (
                <li key={index}>
                    <span>{condition.label}</span>
                    {condition.options.map((option, optionIndex) => {
                        const id = `${index + 1}-${optionIndex + 1}`;
                        return [
                            <input
                                type="radio"
                                id={id}
                                key={`${id}-input`}
                                checked={selectedConditions[index] === id}
                                onChange={handleConditionChange(index)}
                                disabled={!radioEditable}
                            />,
                            <label
                                htmlFor={id}
                                key={`${id}-label`}
                                className={`radio-label${optionIndex + 1}`}
                            >
                                {option}
                            </label>
                        ];
                    })}
                </li>
            ))}
        </ul>
    );
}

export default ConditionRadioList;
