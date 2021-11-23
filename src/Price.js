import React, { useEffect, useState } from 'react';

const Value = () => {
    const [price, setPrice] = useState("");
    const [binance, setBinance] = useState("");
    let value;
    let valuebnb;

    useEffect(() => {
        const url = "https://api.pancakeswap.info/api/v2/tokens/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json.data.price);
                // console.log(json.data.price_BNB);
                setPrice(json.data.price);
                setBinance(json.data.price_BNB);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    value = parseFloat(price).toFixed(2);
    valuebnb = parseFloat(binance).toFixed(6);

    return (
        <div>
            <div>$   {value}</div>
            <div>BNB {valuebnb}</div>
        </div>
    );
};

export default Value;



