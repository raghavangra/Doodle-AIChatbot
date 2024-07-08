from flask import Flask, request, jsonify, redirect, url_for
from groq import Groq
from flask_cors import CORS, cross_origin


client = Groq(
    api_key="" #enter your api_key
)

user_input = "hi"
temp = ""
result = ""
data = []

# Create Flask app
app = Flask(__name__)
CORS(app)


# input from user    
@cross_origin()
@app.route('/add', methods = ['POST'])
def my_form_post():
    global user_input
    global temp
    text = request.get_json()
    #print(text['input'])
    user_input = text['input']
    temp = user_input
    return redirect('/data')


# generating response with llama3
@cross_origin()
@app.route('/data', methods = ['GET'])
def response():
    
    while True:
        #print('Doodle in Backend')
        global user_input
        global result
        global data
        if user_input.lower() in ["quit", "exit", "close", "bye"]:
            return jsonify({"text": "GoodBye!"})
       
        if user_input == temp:
            data.append({"role": "user", "content": user_input})
            
            res = client.chat.completions.create(
            model = "llama3-70b-8192",
            messages = data
            )
            
                
            result = result + "\n\n\n\n" + res.choices[0].message.content.strip()
            #print(result)
            user_input = ""
            return jsonify({"text": result})
        if user_input != "":
            result = "Hi, I am Doodle. How can I help you?"
            
        return jsonify({"text": result})
        

if __name__== "__main__":
    app.run(debug = True)