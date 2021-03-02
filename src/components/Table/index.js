import React from 'react';
import { useTable } from 'react-table';
import makeData from './makeData';

import EditIcon from '@material-ui/icons/Edit';
import Modal from "@material-ui/core/Modal";
import API from "../../utils/API";

import { makeStyles } from '@material-ui/core/styles';


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
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })



  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function DataTable() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Name',
            accessor: 'item',
          },
          {
            Header: 'Category',
            accessor: 'category',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Description',
            accessor: 'description',
          },
          {
            Header: 'Price',
            accessor: 'price',
          },
          {
            Header: 'In Stock',
            accessor: 'instock',
          },
          {
            Header: 'Edit',
            Cell: ({ cell: { value } }) => <Icons values={value} />
          }
    
        ],
      },
    ],
    []
  )

  // const [data, setData] = useState([]);
  // // const [originalData, setOriginaldata] = useState([]);
  // const data = response(() => makeData(20), [])

//  useEffect(() => {
//     const token = localStorage.getItem("token");
//     API.getAllproducts(token)
//       .then(({ data }) => {
//         console.log(data);
//         setData(data);
//         // setOriginaldata(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     setSkipPageReset(false);
//   }, []);
const data = React.useMemo(() => makeData(20), [])

  return (
      <Table columns={columns} data={data} />
  )

  } 
  
  const Icons = ({values}) => {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 >Edit Products Below</h2>
        <p >
          Save and Delete
        </p>

        <button>Save</button>
        <button>Delete</button>
        
      </div>
    );


      return (
        <div>
        <EditIcon type="button" onClick={handleOpen} /> 

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
         
          {body}
          
       </Modal>

        </div>

      );
};

export default DataTable


 {/* Here we render something (card, form, input?) to display and edit corresponding table. We will have to change the state of the data, and send the changes when clicking the Save button. Delete button deletes item. */}