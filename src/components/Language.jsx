import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


const Language = ({ name, img, options }) => {
  const [clicked, setClicked] = useState(true);
  const front = (
    <Container>
      <Image src={img} width="70%" className="lang-img"></Image>
      <h3 className="display-6">{name}</h3>
    </Container>
  );
  const back = <ul className="h-100 d-flex flex-column justify-content-center">{options.map(item=><li className="text-start h5">{item}</li>)}</ul>
  const handleClick = () => (setClicked(!clicked));
  return (
    <Container
      style={{ background: "peachpuff", cursor:"pointer"}}
      className="rounded-4 h-100 py-2 lang-card"
      onClick={() => handleClick()}
      // type="button"
    >
      {clicked ? front : back}
    </Container>
  );
};

export default Language;
