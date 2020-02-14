const express = require(`express`);
const mongoose = require(`mongoose`);
const routes = require(`./routes`);
const app = express();
const PORT = process.env.PORT || 3001;
console.log(PORT);

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

if (process.env.NODE_ENV === `production`) {
  app.use(express.static(`./client/public`));
}

app.use(routes);

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost:27017/googleBooksSearch_db`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  seUnifiedTopology: true
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
