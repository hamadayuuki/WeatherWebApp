# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import os
import ast

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/html')
def index():
    return app.send_static_file('index.html')
    #return render_template("index.html")

if __name__ == '__main__':
    port = int(os.getenv("PORT", 80))
    app.run(debug=True, host='127.0.0.1', port=port)

