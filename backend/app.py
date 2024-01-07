from flask import Flask, request, jsonify
from flask_cors import CORS
from imagekitio import ImageKit

app = Flask(__name__)
CORS(app)

# Set your ImageKit API endpoint and private key
imagekit_private_key = 'private_oPRiq0mEUVjx822T9EK6PeHYbmU='
imagekit_public_key = 'public_38yA5yGVmHzsJFfSqEIBtMavEng='
imagekit_url_endpoint = 'https://ik.imagekit.io/78dcqstv9'

imagekit = ImageKit(
    private_key=imagekit_private_key,
    public_key=imagekit_public_key,
    url_endpoint=imagekit_url_endpoint
)

@app.route('/upload', methods=['POST','GET'])
def upload():
    try:
        # Get the uploaded file
        uploaded_file = request.files['file']

        # Upload image to ImageKit
        upload_response = imagekit.upload(file=uploaded_file.stream)

        # Check if the upload was successful
        if upload_response['error']:
            return jsonify({'error': 'Image Upload Failed'}), 500

        # Get the ImageKit URL for the uploaded image
        image_url = upload_response['response']['url']
        
        return jsonify({'url': image_url}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
