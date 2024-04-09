from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app) 
api = Api(app)

# Load the breast cancer prediction model
breast_cancer_model = pickle.load(open('src\Models\BreastCancer.sav', 'rb'))

class PredictBreastCancer(Resource):
    def post(self):
        data = request.get_json()
        # Extract features from the incoming JSON data
        features = [float(data[col]) for col in data]
        # Make prediction using the loaded model
        prediction = breast_cancer_model.predict([features])[0]
        # Convert prediction to a float
        prediction = float(prediction)

        return {'prediction': prediction}

api.add_resource(PredictBreastCancer, '/predict_breast_cancer')

if __name__ == "__main__":
    app.run(debug=True)
