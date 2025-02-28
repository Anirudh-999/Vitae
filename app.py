import os
import json
from flask import Flask, request, render_template, session, redirect, url_for, flash, get_flashed_messages, jsonify
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY", "your_default_secret")

# Initialize Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

generation_config = {
    "temperature": 0.4,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

gemini_model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config
)

@app.route('/')
def home():
    return render_template('home.html', messages=get_flashed_messages())

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        session['password'] = request.form['password']
        flash(f'Logged in successfully as {session["username"]}')
        return redirect(url_for('home'))
    return render_template('login.html')

@app.route('/chatbot')
def chatbot():
    return render_template('chat.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.form['message'].strip()

    try:
        response = gemini_model.generate_content(message).text  # Corrected API call
        return jsonify({'response': response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/blog')
def blog():
    return render_template('blog.html')

if __name__ == '__main__':
    app.run(debug=True)
