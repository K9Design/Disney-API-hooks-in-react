function Character({ character }) {

  // Define a default in case the character doesn't have an image
  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    // API seems to include extra path for images so here we strip it off to fetch raw image
    imageSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions">
        Add to Favourites
      </div>

      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )
}

export default Character