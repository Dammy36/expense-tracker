import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

function Tables({ expenses, onDelete }) {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="content">Date</span>
              </TableCell>
              <TableCell>
                <span className="content">Expenses</span>
              </TableCell>
              <TableCell>
                <span className="content">Amount</span>
              </TableCell>
              <TableCell>
                <span className="content">Action</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => {
              return (
                <TableRow key={expense.id}>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.name}</TableCell>
                  <TableCell>${expense.amount.toFixed(2)}</TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert(`Edit ${expense.name} ?`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onDelete(expense.id)}
                    style={{ margin: "10px" }}
                  >
                    Delete
                  </Button>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tables;
