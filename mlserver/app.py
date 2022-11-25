import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS, cross_origin

app = Flask(__name__)
model1 = pickle.load(open('model1.pkl', 'rb'))
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/predict',methods=['POST'])
@cross_origin()
def predict():
    data=request.get_json()
    pHvalue=float(data['pHvalue'])
    Hardnessvalue=float(data['Hardnessvalue'])
    Solidsvalue=float(data['Solidsvalue'])
    Chloraminesvalue=float(data['Chloraminesvalue'])
    Sulfatevalue=float(data['Sulfatevalue'])
    Conductivityvalue=float(data['Conductivityvalue'])
    OrganicCarbonvalue=float(data['OrganicCarbonvalue'])
    Trihalomethanesvalue=float(data['Trihalomethanesvalue'])
    Turbidityvalue=float(data['Turbidityvalue'])
    features=np.array([[pHvalue,Hardnessvalue,Solidsvalue,Chloraminesvalue,Sulfatevalue,Conductivityvalue,OrganicCarbonvalue,Trihalomethanesvalue,Turbidityvalue]])
    print(pHvalue,Hardnessvalue,Solidsvalue,Chloraminesvalue,Sulfatevalue,Conductivityvalue,OrganicCarbonvalue,Trihalomethanesvalue,Turbidityvalue)
    print(features)
    prediction = model1.predict(features)
    global output
    output = int(prediction[0])    
    print(output)
    return jsonify({'result':'Success'})
@app.route("/answer",methods=['GET'])
@cross_origin()
def members():
    return {"output":output}


if __name__ == "__main__":
    app.run(debug=True)