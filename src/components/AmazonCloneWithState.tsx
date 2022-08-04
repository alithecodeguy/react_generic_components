//libraries
import { useState } from "react";

//components
import GenericSelect from "./GenericSelect";

//types
import {Book , Movie} from "./types"

//mock data
import {books , movies} from "./data"



const AmazonCloneWithState = () => {
  const [book, setBook] = useState<Book>(books[0]);
  const [movie, setMovie] = useState<Movie>(movies[0]);

  return (
    <>
      Selected book: {book.title} by {book.author}
      <br />
      <br />
      Selected movie: {movie.title}, released in {movie.releaseDate}
      <br />
      <br />
      Books:
      <br />
      <GenericSelect<Book>
        onChange={(value) => setBook(value)}
        values={books}
      />
      <br />
      <br />
      Movies:
      <br />
      <GenericSelect<Movie>
        onChange={(value) => setMovie(value)}
        values={movies}
      />
    </>
  );
};

export default AmazonCloneWithState