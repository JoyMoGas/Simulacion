from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import os

connector = mysql.connector
app = Flask(__name__)
CORS(app)

def get_db_connection():
  try:
    return connector.connect(
      host='gondola.proxy.rlwy.net',
      port='19641',
      user='root',
      password='YyiEkVuzVJRRkUnOizIQsIZmjIPmPRms', 
      database='railway',
    )
  except connector.Error as e:
        print(f"Database connection error: {e}")
        return None

@app.route('/api/products', methods=['GET'])
def get_products():
  mydb = get_db_connection()
  if not mydb:
    return jsonify({'error': 'DB connection error'}), 500
  
  cursor = mydb.cursor(dictionary=True)
  cursor.execute('SELECT * FROM products')
  products = cursor.fetchall()
  cursor.close()
  mydb.close()
  return jsonify(products)

if __name__ == '__main__':
  port = int(os.environ.get('PORT', 8080))
  app.run(host='0.0.0.0', port=port, debug=True)