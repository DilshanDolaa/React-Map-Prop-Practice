import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.emoname}</span>
      </dt>
      <dd>{props.emodis}</dd>
    </div>
  );
}

export default Entry;
