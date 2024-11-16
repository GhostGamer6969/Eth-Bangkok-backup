import sqlite3
import uuid

# Connect to SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('user_database.db')
cursor = conn.cursor()

# Create table schema
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    userId TEXT PRIMARY KEY,
    email TEXT NOT NULL
)
''')

# Insert the user data
user_id = '0021ac11-73f3-42fb-8596-7ba4d3ddc17c'
email = 'gaminghub651@gmail.com'

cursor.execute('''
INSERT OR REPLACE INTO users (userId, email)
VALUES (?, ?)
''', (user_id, email))

# Commit and close connection
conn.commit()
conn.close()

print(f"User {user_id} with email {email} has been added to the database.")
