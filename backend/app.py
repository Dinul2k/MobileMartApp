# Import the Flask class from the flask module
from flask import Flask

# Create an instance of the Flask class
app = Flask(__name__)

# Define a route for the root URL ("/") that returns "Hello, World!"
@app.route('/')
def hello_world():
    return 'Hello, World!'

# Run the Flask application if the script is executed
if __name__ == '__main__':
    app.run(debug=True)
