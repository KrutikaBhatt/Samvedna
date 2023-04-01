from flask import Flask, request
from predict_illness import predict_emotion

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    text = request.form['text']
    print(text)
    prediction = predict_emotion(text)
    print(prediction)
    return prediction

if __name__ == '__main__':
    app.run()