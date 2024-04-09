from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
from tensorflow.keras.models import load_model
import joblib

app = Flask(__name__)
CORS(app)

# Load the breast cancer model and scaler
breast_cancer_model = load_model('breast_cancer_model.h5')
breast_cancer_scaler = joblib.load('scaler.pkl')
# Load the models and scalers
pcos_model = pickle.load(open('pcos_model.pkl', 'rb'))
pcos_scaler = pickle.load(open('pcos_scaler.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction_type = data.get('predictionType')
    input_data = np.array(data['input_data'])

    if prediction_type == 'pcos':
        data = request.get_json()
        age = float(data['age'])
        weight = float(data['weight'])
        height = float(data['height'])
        cyclelength = float(data['cyclelength'])
        weightgain = float(data['weightgain'])
        hairloss = float(data['hairloss'])
        pimples = float(data['pimples'])
        exercise = float(data['exercise'])
        fastfood = float(data['fastfood'])
        hairgrowth = float(data['hairgrowth'])
        skindark = float(data['skindark'])
        waist = float(data['waist'])
        hip = float(data['hip'])
        bmi = float(data['bmi'])
        processed_data = [float(data[key]) for key in data]
        pred = model.predict([processed_data])[0]
        pred = float(pred)

        return {'prediction': pred}
    
    elif prediction_type == 'breastCancer':
        input_data_reshaped = np.asarray(input_data).reshape(1, -1)
        input_data_std = breast_cancer_scaler.transform(input_data_reshaped)
        prediction = breast_cancer_model.predict(input_data_std)
        prediction_label = np.argmax(prediction, axis=1)
        if prediction_label[0] == 0:
            result = 'Malignant'
        else:
            result = 'Benign'
        return jsonify({'prediction': result})
    else:
        return jsonify({'error': 'Invalid prediction type'}), 400

if __name__ == "__main__":
    app.run(debug=True)
