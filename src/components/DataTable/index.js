import { styled } from "@material-ui/core";
import React from "react";
import "./style.css";
import API from "../../utils/API";

import { useTable, usePagination } from "react-table";
// import makeData from './makeData'
import { Button, TableBody, TableRow } from "semantic-ui-react";
import { TableCell, TextField, TableHead, Select } from "@material-ui/core";
import MaUTable from "@material-ui/core/Table";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <TextField value={value} onChange={onChange} onBlur={onBlur} />;
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    usePagination
  );

  //Category Dropdown Selection
  // const classes = useStyles();
  // const [age, setAge] = React.useState('');
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // Render the UI for your table
  return (
    <>
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </Button>{" "}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </Button>{" "}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </Button>{" "}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </Button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <TextField
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </div>
    </>
  );
}

function DataTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Category",
            accessor: "category",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Description",
            accessor: "description",
          },
          {
            Header: "Image",
            accessor: "image",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Stock",
            accessor: "stock",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = React.useState([]);
  const [originalData, setOriginaldata] = React.useState([]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    API.getAllproducts(token)
      .then(({ data }) => {
        console.log(data);
        setData(data);
        setOriginaldata(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSkipPageReset(false);
  }, []);

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData);

  return (
    <div>
      <Button onClick={resetData}>Reset Data</Button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}

export default DataTable;