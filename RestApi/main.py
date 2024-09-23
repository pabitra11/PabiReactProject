from flask import Flask, request, jsonify
from flask_cors import CORS
from model import User,db

app = Flask(__name__)
CORS(app)


# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@192.168.1.6:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app) 



@app.route('/insertData', methods=['POST'])
def insert_data():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Example: Extract the fields from the JSON data
        id=data.get()
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')
        password = data.get('password')

        new_user = User(id=id,firstname=firstname, lastname=lastname, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()


        # Here you can add your logic to store data in a database or perform other actions
        # For example, you could print the data or save it to a database
        print(f"Received data: {firstname}, {lastname}, {email}, {password}")

        # Respond back with a success message
        return jsonify({"message": "Data inserted successfully!"}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred."}), 400


@app.route("/")
def home():
    return "home"

@app.route("/get-user/<user_id>")
def get_user(user_id):
    data={
        "user_id":user_id,
        "name":"payal",
        "email":"payal2gamil.com"
    }
    return jsonify(data),200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)