from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    try:
        # Get the uploaded file
        uploaded_file = request.files['file']

        # Set your ImageKit API endpoint and private key
        imagekit_url = 'https://ik.imagekit.io/78dcqstv9/upload'
        imagekit_private_key = 'private_oPRiq0mEUVjx822T9EK6PeHYbmU='

        # Create form data
        form_data = {
            'file': (uploaded_file.filename, uploaded_file.stream, uploaded_file.content_type)
        }

        # Send POST request to ImageKit API for upload
        response = requests.post(imagekit_url, files=form_data, headers={
            'Authorization': imagekit_private_key
        })

        # Check if the request was successful
        if response.ok:
            data = response.json()
            return jsonify({'url': data['url']}), 200
        else:
            return jsonify({'error': 'Image Upload Failed'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
