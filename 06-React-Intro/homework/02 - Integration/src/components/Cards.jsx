import Card from './Card';

export default function Cards(props) {
   return (
      <div>
         {
            props.characters?.map(r => (
               <Card
                  key={r.id}
                  name={r.name}
                  status={r.status}
                  species={r.species}
                  gender={r.gender}
                  origin={r.origin.name}
                  image={r.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   );
}
