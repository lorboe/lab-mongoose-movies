const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'movies-and-celebs';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
{
  name: 'Christian Bale',
  occupation: 'Actor',
  catchPhrase: "It's the actors who are prepared to make fools of themselves who are usually the ones who come to mean something to the audience.",
},
{
  name: "Anthony Hopkins",
  occupation: 'Actor',
  catchPhrase: "I may sound to you like a really hard man - I am not ashamed of it at all. I'm not hard, I'm honest.",
},
{
  name: "Kate Winslet",
  occupation: 'Actress',
  catchPhrase: "Live and let die"
}
]


Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });


const movies = [
{
  title: "Titanic",
  genre: "Drama",
  plot: "A woman falls in love with a man in a cruise. The boat sinks, he dies and she survives.",
},
{
  title: "Silence of the lambs",
  genre: "Suspense",
  plot: "Crazy man is obsessed with a woman, eats human flesh and is incredibly smart.",
},
{
  title: "Batman",
  genre: "Suspense",
  plot: "Rich man dresses up as in a bat suit and helps his city by fighting crime",
}
]


  Movie.create(movies, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  });