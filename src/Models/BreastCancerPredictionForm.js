import React, { useState } from 'react';
import axios from 'axios';

const BreastCancerPredictionForm = () => {
    const [inputData, setInputData] = useState(Array(30).fill(''));
    const [prediction, setPrediction] = useState(null);

    const handleChange = (e, index) => {
        const newInputData = [...inputData];
        newInputData[index] = e.target.value;
        setInputData(newInputData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict', { input_data: inputData, predictionType: 'breastCancer' });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error making prediction', error);
            alert('An error occurred while making the prediction.');
        }
    };
    

    return (
        <div>
            <h1>Breast Cancer Prediction</h1>
            <form onSubmit={handleSubmit}>
                {inputData.map((value, index) => (
                    <input
                        key={index}
                        type="number"
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        placeholder={`Feature ${index + 1}`}
                    />
                ))}
                <button type="submit">Predict</button>
            </form>
            {prediction && <p>The tumor is {prediction}.</p>}
        </div>
    );
};

export default BreastCancerPredictionForm;
