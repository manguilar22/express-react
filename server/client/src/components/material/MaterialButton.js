import React from "react";
import Button from '@material-ui/core/Button';

const MaterialButton = (props) => {

    return (
      <ol>
          {props.data.map(({_id,name,type}) => (
            <li key={_id}>
                <Button color={"secondary"}>{type}</Button>
                <Button>{name}</Button>
            </li>
          ))}
      </ol>
    );
};

export default MaterialButton;