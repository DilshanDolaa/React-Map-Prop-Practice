import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// {
//   id: 1,
//   emoji: "ðª",
//   name: "Tense Biceps",
//   meaning:
//     "âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// },

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      emoname={emojiTerm.name}
      emodis={emojiTerm.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
