import React from "react";

interface LinkItemProps {
  href: string;
  text: string;
}

const LinkItem = (props: LinkItemProps) => {
  return (
    <div>
      <li>
        <a href={props.href}>{props.text}</a>
      </li>
    </div>
  );
};

export default LinkItem;
