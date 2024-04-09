from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import tensorflow as tf
from tensorflow import keras

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})
model = keras.models.load_model('src/Models/breast_cancer_model.h5')
scaler = joblib.load('src/Models/scaler.sav')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_data = np.array(data['input_data']).reshape(1, -1)
    input_data_std = scaler.transform(input_data)
    prediction = model.predict(input_data_std)
    prediction_label = np.argmax(prediction)
    if prediction_label == 0:
        return jsonify({'prediction': 'Malignant'})
    else:
        return jsonify({'prediction': 'Benign'})

if __name__ == '__main__':
    app.run(debug=True)
