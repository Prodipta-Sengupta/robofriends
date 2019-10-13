import  React  from 'react';
import { tsPropertySignature } from '@babel/types';
const Card = ({name,email,id}) => {
    return (
        <div className="tc bg-washed-green dib br3 ma2 pa3 grow bw2 shadow-fog">
            
            <div>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </div>
    );
}

export default Card;