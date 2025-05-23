<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Instagram DM Sender</title>
    <style>
        body {
            background: #fafafa;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            width: 350px;
            text-align: center;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #262626;
        }

        form input, form textarea {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        form textarea {
            resize: vertical;
            height: 100px;
        }

        button {
            background: #0095f6;
            color: white;
            border: none;
            padding: 12px;
            width: 100%;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
        }

        button:hover {
            background: #007bd1;
        }

        .success-message {
            margin-top: 20px;
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Instagram DM Sender</h1>
        <form id="dmForm">
            <input type="text" id="username" placeholder="Your Instagram Username" required>
            <input type="password" id="password" placeholder="Your Instagram Password" required>
            <input type="text" id="target" placeholder="Target Username (e.g., brt_06_a)" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send DM</button>
        </form>

        <div class="success-message" id="successMessage" style="display:none;">
            ✅ Message sent successfully to <span id="targetUser"></span>!
        </div>
    </div>

    <script>
        const form = document.getElementById('dmForm');
        const successMessage = document.getElementById('successMessage');
        const targetUser = document.getElementById('targetUser');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop real form submission

            // Get values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const target = document.getElementById('target').value;
            const message = document.getElementById('message').value;

            // Simulate sending DM
            console.log(`Logging in as ${username}`);
            console.log(`Sending message to ${target}: ${message}`);

            // Show success message
            targetUser.textContent = target;
            successMessage.style.display = 'block';

            // Clear form
            form.reset();
        });
    </script>

</body>
</html>

