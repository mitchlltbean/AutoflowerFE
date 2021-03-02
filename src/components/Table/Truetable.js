import { useState, useEffect, React, useStyles } from "react";
import { useTable, T } from "react-table";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function Truetable() {
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const [data, setData] = useState({
    item: "",
    description: "",
    price: "",
    instock: "",
  });

  const [products, setProducts] = useState([]);
  // const [originalData, setOriginaldata] = React.useState([]);
  // const [skipPageReset, setSkipPageReset] = React.useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    API.getAllproducts(token)
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
        // setOriginaldata(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setSkipPageReset(false);
  }, []);

  const [open, setOpen] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }
  //Update inventory
  const handleUpdate = () => {
    const token = localStorage.getItem("token");
    API.updateProducts(token, data, {
      id: data.id,
      item: data.item,
      description: data.description,
      price: data.price,
      instock: data.instock,
    }).then((res) => {
      setData({
        id: "",
        item: "",
        description: "",
        price: "",
        instock: "",
      });
    });
    refreshPage();
  };
  //delete product

  const handleDeleteproduct = (id) => {
    console.log("HANDLE DELETE Employee", id);
    const token = localStorage.getItem("token");
    console.log(token, "TOKEN FOR DELETE");
    API.deleteProducts(token, data.id)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    refreshPage();
  };
  const HandleInputchange = (e) => {
    const { name, value } = e.target;
    console.log(e.target, "E TARGET");
    setData({ ...data, [name]: value });
  };
  const handleOpen = (product) => {
    // alert("hello");
    setOpen(true);
    setData({
      ...data,
      id: product.id,
      item: product.item,
      description: product.description,
      price: product.price,
      instock: product.instock,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
      <h2>Edit Products Below</h2>
      <p></p>
      <input type="hidden" name="id" value={data.id}></input>
      <input name="item" value={data.item} onChange={HandleInputchange}></input>

      <input
        name="description"
        value={data.description}
        onChange={HandleInputchange}
      ></input>
      <input
        name="price"
        value={data.price}
        onChange={HandleInputchange}
      ></input>
      <input
        name="instock"
        value={data.instock}
        onChange={HandleInputchange}
      ></input>
      <button onClick={handleUpdate}>Save</button>
      <button onClick={handleDeleteproduct}>Delete</button>
    </>
  );
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ITEM</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell>INSTOCK</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.instock}</TableCell>
                <TableCell>
                  <div>
                    {" "}
                    <EditIcon
                      type="button"
                      onClick={() =>
                        handleOpen({
                          id: row.id,
                          item: row.item,
                          description: row.description,
                          price: row.price,
                          instock: row.instock,
                        })
                      }
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* <div style={modalStyle} className={classes.paper}> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      > */}

      {/* </Modal> */}
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {/* <button onClick={() => handleDeleteproduct(data.id)}>Delete</button> */}
    </div>
    // </div>
  );
}
