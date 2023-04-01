from flask import Flask, request
from flask_cors import CORS, cross_origin
from predict_illness import predict_emotion

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/predict', methods=['POST'])
def predict():
    print(request, request.form)
    text = request.form['text']
    print(text)
    prediction = predict_emotion(text)
    print(prediction)
    return prediction

if __name__ == '__main__':
    app.run()