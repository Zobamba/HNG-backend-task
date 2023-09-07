const express = require('express')

const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome To HNG Backend Stage One Task');
});

// Endpoint route
app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  const currentDay = days[date.getDay()];

  res.status(200).send({
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: date.toISOString(),
    track: track,
    github_file_url: "https://github.com/Zobamba/HNG-backend-task/blob/main/index.js",
    github_repo_url: "https://github.com/Zobamba/HNG-backend-task",
    status_code: 200,
  });
});

app.listen(port, () => console.log(`index app listening on port ${port}!`));
