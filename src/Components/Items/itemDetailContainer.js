import React from "react";

import ItemDetail from "./ItemDetail";

const getItems = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: 1,
        title: "Item1",
        pictureUrl: "http://via.placeholder.com/450",
        description:
          "lorem ipsum",
        price: "$500"
      },
      {
        id: 2,
        title: "Item2",
        pictureUrl: "http://via.placeholder.com/450",
        description:
          'No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset".',
        price: "$1000"
      }
    ]);
  }, 2000);
});

const ItemDeteailContainer = () => {
  const [itemDetailResq, setItemDetailResq] = React.useState();

  React.useEffect(() => {
    getItems.then((res) => {
      setItemDetailResq(res[0]);
    });
  }, []);
  console.log(itemDetailResq);
  return (
    <>
      {itemDetailResq === undefined ? (
        <p>loading</p>
      ) : (
        <ItemDetail
          id={itemDetailResq.id}
          title={itemDetailResq.title}
          pictureUrl={itemDetailResq.pictureUrl}
          description={itemDetailResq.description}
          price={itemDetailResq.price}
        />
      )}
    </>
  );
};

export default ItemDeteailContainer;