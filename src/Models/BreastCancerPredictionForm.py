import numpy as np
from tensorflow.keras.models import load_model
import joblib
model = load_model('breast_cancer_model.h5')
scaler = joblib.load('scaler.pkl')

input_data = []
for i in range(30): 
    feature_value = float(input(f"Enter value for feature {i+1}: "))
    input_data.append(feature_value)

input_data_as_numpy_array = np.asarray(input_data)
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

input_data_std = scaler.transform(input_data_reshaped)

prediction = model.predict(input_data_std)
print(prediction)

prediction_label = np.argmax(prediction, axis=1)
if prediction_label[0] == 0:
    print('The tumor is Malignant')
else:
    print('The tumor is Benign')