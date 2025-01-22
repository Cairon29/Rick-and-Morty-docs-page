interface SingleCharacter {
    name: string;
    image: string;
    gender: string;
    status: string;
    episode: string[];
}

interface SingleCharacterProps {
    character?: SingleCharacter;
}

export const SingleCharacter = ({ character }: SingleCharacterProps) => {
  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <article className="single-character">
      <img 
        src={character.image} 
        alt={character.name} 
      />
      <div>
        <h3>{character.name}</h3>
        <section>
          <p>
            <b>Appears:</b> <span>{character.episode.length}</span>
          </p>
          <p><b>Gender:</b> <span>{character.gender}</span></p>
          <p><b>Status:</b> <span>{character.status}</span></p>
        </section>
      </div>
    </article>
  );
};