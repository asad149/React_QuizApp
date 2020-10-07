import React, { useState } from "react";
import { questionPropsType } from "../Types/quiz_type";

const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  let [selectedAns, setSelectedAns] = useState("");

  const handleSelection = (ev: any) => {
    setSelectedAns(ev.target.value);
  };

  return (
    <div>
      {question}

      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        {options.map((opt: string, ind: number) => {
          return (
            <div key={ind}>
              <label>
                <input
                  type="radio"
                  name="opt"
                  required
                  value={opt}
                  checked={selectedAns === opt}
                  onChange={handleSelection}
                />
                {opt}
              </label>
            </div>
          );
        })}

        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default QuestionCard;
