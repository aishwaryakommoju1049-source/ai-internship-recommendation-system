// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const fetch = require("node-fetch");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const API_KEY = "YOUR_OPENAI_API_KEY";

// app.post("/analyze", async (req, res) => {
//   const { text } = req.body;

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${API_KEY}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",
//         messages: [
//           {
//             role: "system",
//             content: "You are a resume analyzer. Give score, strengths, and improvements."
//           },
//           {
//             role: "user",
//             content: text
//           }
//         ]
//       })
//     });

//     const data = await response.json();

//     res.json({ result: data.choices[0].message.content });

//   } catch (err) {
//     res.status(500).json({ error: "AI failed" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));




const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "YOUR_OPENAI_API_KEY";

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Analyze this resume and give score, strengths, improvements." },
          { role: "user", content: text }
        ]
      })
    });

    const data = await response.json();

    res.json({ result: data.choices[0].message.content });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));