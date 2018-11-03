const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
// const Publisher = require ('../models/publisher');

const dbName = 'movies-and-celebs';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
{
  name: 'Christian Bale',
  ocupation: 'Actor',
  catchPhrase: "It's the actors who are prepared to make fools of themselves who are usually the ones who come to mean something to the audience.",
},
{
  name: "Anthony Hopkins",
  ocupation: 'actor',
  catchPhrase: "I may sound to you like a really hard man - I am not ashamed of it at all. I'm not hard, I'm honest.",
},
{
  name: "Melissa McCarthy",
  ocupation: ['actress', 'comedian'],
  catchPhrase: "I'm certainly not shy, but I like playing it because I love those characters that are incredibly confident but really still a mess."
}
]


Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });