//for update and delete products

const [employees, setEmployees] = useState([]);

const token = localStorage.getItem("token");
useEffect(() => {
  API.getAllemployees(token)
    .then(({ data }) => {
      console.log(data);
      setEmployees(data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
//handle delete employee
const handleDeleteEmployee = (id) => {
  console.log("HANDLE DELETE Employee", id);
  const token = localStorage.getItem("token");
  console.log(token, "TOKEN FOR DELETE");
  API.deleteEmployee(token, id).then(({ data }) => {
    console.log(data, "SET new All employees state after delete");
    API.getAllemployees(token)
      .then(({ data }) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
//handle create employee
const handleCreateemployee = (id) => {
  console.log("HANDLE DELETE Employee", id);
  const token = localStorage.getItem("token");
  API.create(id, token)
    .then(({ data }) => {
      console.log(data, "SET new All employees state after new employee");
      //push new employee? to state
      setEmployees(data);
    })
    .catch((err) => {
      console.log(err);
    });
};



function ItemsTable() {
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  const handleAddClick = () => {
    setAddModalOpen(true);
  };
  const handleClose = ()=>{
    setAddModalOpen(false)
  }
  <Box mt={4} position="fixed" bottom={10} right={10}>
    <Fab color="secondary" aria-label="Add" onClick={handleAddClick}>
      <AddIcon />
    </Fab>
  </Box>
  <AddItemModal isOpen={addModalOpen} handleClose={handleClose}/>