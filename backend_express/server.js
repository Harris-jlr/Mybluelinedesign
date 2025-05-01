// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('bookings'));

// API for admin login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'supersecret') {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }
});

// API to save a booking
app.post('/api/save-booking', (req, res) => {
  const booking = req.body;
  booking.type = "booking";
  
  const timestamp = Date.now();
  const filename = `booking-${timestamp}.json`;
  const directoryPath = path.join(__dirname, 'json_files', 'bookings');
  const filepath = path.join(directoryPath, filename);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFile(filepath, JSON.stringify(booking, null, 2), (err) => {
    if (err) {
      console.error('Error saving booking:', err);
      return res.status(500).json({ success: false, message: 'Failed to save booking.' });
    }
    console.log('Booking saved:', filename);
    res.json({ success: true, message: 'Booking saved successfully.' });
  });
});

// API to retrieve all bookings
app.get('/api/bookings', (req, res) => {
  const directoryPath = path.join(__dirname, 'json_files', 'bookings');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Unable to scan bookings folder:', err);
      return res.status(500).json({ success: false, message: 'Unable to read bookings folder.' });
    }

    const bookings = [];
    files.forEach((file) => {
      const data = fs.readFileSync(path.join(directoryPath, file));
      bookings.push(JSON.parse(data));
    });

    res.json(bookings);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// API to save a request for service
app.post('/api/service-request', (req, res) => {
  const request = req.body;
  request.type = "contributor";
  const timestamp = Date.now();
  const filename = `request-${timestamp}.json`;
  const directoryPath = path.join(__dirname, 'json_files', 'requests');
  const filepath = path.join(directoryPath, filename);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFile(filepath, JSON.stringify(request, null, 2), (err) => {
    if (err) {
      console.error('Error saving request:', err);
      return res.status(500).json({ success: false, message: 'Failed to save request.' });
    }
    console.log('Request saved:', filename);
    res.json({ success: true, message: 'Request saved successfully.' });
  });
});

