from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        nome_visitante = request.form.get('nome')
        documento_visitante = request.form.get('documento')
        
        print("\n--- NOVO REGISTRO ---")
        print(f"Nome: {nome_visitante}")
        print(f"Documento: {documento_visitante}")
        print("---------------------\n")
        
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)