import React from "react";

export default function Synonyms(props) {
     console.log(props.phonetics);
          return (
          <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
            </a> 
            <br />
              {props.phonetic.text}         
          </div>
        );
}