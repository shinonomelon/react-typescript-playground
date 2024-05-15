import { Fragment } from "react/jsx-runtime";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export const List = () => {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    // keyはReactが要素を識別するために使用する
    // keyは一意である必要があり、動的に生成するより、元のデータに含まれるIDを使用する
    <Fragment key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </Fragment>
  ));

  return <ul>{listItems}</ul>;
};
