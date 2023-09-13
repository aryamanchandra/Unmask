from flask import Flask, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model

app = Flask(__name__)

model = load_model("mask.h5")


def load_and_preprocess_image(file):

    # Read and preprocess the uploaded image
    image = cv2.imdecode(np.frombuffer(
        file.read(), np.uint8), cv2.IMREAD_COLOR)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, (224, 224))
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    image = preprocess_input(image)

    return image


@app.route('/')
def hello_world():
    return 'Hello world'


@app.route('/upload', methods=['GET', 'POST'])
def upload_image():
    try:
        file = request.files['image']
        input_image = load_and_preprocess_image(file)

        # Perform mask detection on the preprocessed image
        result = model.predict(input_image)
        mask, without_mask = result[0]
        # result = result.split(" ")
        # print(mask)
        # mask = result[0]
        # without_mask = result[1]
        if (mask > without_mask):
            label = "Mask"  
        else:
            label = "No Mask"
        file.save('uploads/' + file.filename)

        return jsonify({'message':label}), 200
        # return jsonify({'message': 'Received image successfully'}), 200
    except:
        return jsonify({'message': 'Received image successfully'}), 402


if __name__ == '__main__':
    app.run(host='192.168.45.11', port=5000, debug=True)
