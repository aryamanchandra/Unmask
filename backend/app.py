from flask import Flask, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model
from PIL import Image
from io import BytesIO

app = Flask(__name__)

model = load_model("mask.h5")
crowdmodel = load_model("crowdmodel.h5")
facerecog = load_model('facerecog.h5')
face_id = {0: 'face1', 1: 'face10', 2: 'face11', 3: 'face12', 4: 'face13', 5: 'face14', 6: 'face15', 7: 'face16',
           8: 'Aryaman', 9: 'face2', 10: 'face3', 11: 'face4', 12: 'face5', 13: 'face6', 14: 'face7', 15: 'face8', 16: 'face9'}


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


@app.route('/crowdupload', methods=['GET', 'POST'])
def upload_crowdimage():
    try:
        file = request.files['image']
        image_data = file.read()
        input_image = Image.open(BytesIO(image_data))
        # input_image = Image.open("download.jpg")
        input_image = input_image.resize((640, 480))

        image = img_to_array(input_image)

        image = np.expand_dims(image, axis=0)

        predictions = crowdmodel.predict(image)
        predictions = round(predictions[0][0])
        return jsonify({'message': predictions}), 200
        # return jsonify({'message': 'Received image successfully'}), 200
    except:
        return jsonify({'message': 'Received image successfully'}), 402


@app.route('/upload', methods=['GET', 'POST'])
def upload_image():
    try:
        file = request.files['image']
        input_image = load_and_preprocess_image(file)
        result = model.predict(input_image)
        mask, without_mask = result[0]
        if (mask > without_mask):
            label = "Mask"
        else:
            label = "No Mask"
        file.save('uploads/' + file.filename)
        return jsonify({'message': label}), 200
    except:
        return jsonify({'message': 'Received image successfully'}), 402


@app.route('/uploadface', methods=['GET', 'POST'])
def upload_faceimage():
    try:
        file = request.files['image']
        image_data = file.read()
        input_image = Image.open(BytesIO(image_data))
        test_image = input_image.resize((64, 64))
        test_image = img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis=0)
        test_result = facerecog.predict(test_image)

        final_result = face_id[np.argmax(test_result)]
        return jsonify({'message':final_result}), 200
        # return jsonify({'message': 'Received image successfully'}), 200
    except:
        return jsonify({'message': 'Received image successfully'}), 402


if __name__ == '__main__':
    app.run(host='192.168.45.11', port=5000, debug=True)
    # app.run(host="172.16.198.206", port=5000, debug=True)
