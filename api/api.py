import flask
import flask_restful
import pymongo
import bcrypt
import dotenv
import os

dotenv.load_dotenv()

app = flask.Flask(__name__)
api = flask_restful.Api(app)
client = pymongo.MongoClient(os.environ['DATABASE_URI'])
db = client.creddit

class User(flask_restful.Resource):

    def get(self, username):
        user = db.users.find_one({'username': username})
        if user == None:
            flask_restful.abort(404, message="User {} doesn't exist.".format(username))
        return {'username': user['username'], 'password': user['password']}, 200
    
    def post(self):
        ...



api.add_resource(User, '/user/<string:username>')

if __name__ == '__main__':
    app.run(debug=True)