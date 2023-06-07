
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask

app = Flask(__name__)

@app.route('/track-click', methods=['GET'])
def track_click():
    sender_email = 'Dself1976@gmail.com'  # Replace with your email address
    receiver_email = 'Dself1976@gmail.com'  # Replace with the recipient's email address
    password = os.environ.get('EMAIL_PASSWORD')

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'Website Click Notification'
    body = 'Someone clicked on your website!'
    message.attach(MIMEText(body, 'plain'))

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, password)
        server.send_message(message)

    return '', 200

if __name__ == '__main__':
    app.run()

