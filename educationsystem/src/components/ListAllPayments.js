import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ListAllPayments() {
    const [payments, setPayments] = useState([]);
    const [transactionId, settransactionId] = useState(0);
    const [payment, setPayment] = useState(null);
    // const{transactionId, settransactionId } = useParams();
    const fetchAll = () => {
        axios.get("http://localhost:8081/api/edu/all").then(resp => setPayments(resp.data))
    }
    useEffect(fetchAll, []);
    const handleChange = (event) => {
        settransactionId(event.target.value);
    }
    const handleSubmit = (event) => {
        // settransactionId(event.target.value);
        axios.get("http://localhost:8081/api/edu/get/" + transactionId).then(resp => setPayment(resp.data))
    }
    return (
        <div className='container-fluid'>
             <div className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/admin/dashboard" style={{color:"yellow"}} className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"bisque", fontSize:"30px"}} className = "text-center">List All Payments</h4>
      <hr />
      
      {/* <Link to = "/payment/save" className = "btn btn-primary mb-2" > Add Payment </Link> */}
      <table  className="table table-bordered table-striped"></table>
                {/* <table class ="table table-bordered"> */}
            <div>
                <label>Transaction ID</label>
                <input type="number" name="transactionId" value={transactionId} onChange={handleChange} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            <div>
                {
                    payment !== null ?
                        <div>
                        <p>TransactionId: {payment.transactionId}</p>
                        {/* <p>CardNumber: {payment.cardNumber}</p> */}
                        <p>CardType: {payment.cardType}</p>
                        <p>BankName: {payment.bankName}</p>
                        <p>Amount: {payment.amount}</p>
                        <p>Description: {payment.description}</p>
                        <p>PaymentDate: {payment.paymentDate}</p>
                        <p>StudentId: {payment.studentId}</p>
                        <p>Course: {payment.course}</p>
                            {/* <p><Link to="/admin/dashboard">Back</Link></p> */}
                        </div>
                        :
                        <div className='container-fluid'>
                            <h2 style={{ color: 'red', backgroundColor:"aqua", fontSize:"30px"}}><center><b>Payment Details</b></center></h2>
                            <table className="table table-bordered" border='7' >
                                <thead >
                                    <tr style={{ color: "black", backgroundColor: 'aquamarine' }}>
                                        <th>TransactionId</th>
                                        {/* <th>CardNumber</th> */}
                                        <th>CardType</th>
                                        <th>BankName</th>
                                        <th>Amount</th>
                                        <th>Description</th>
                                        <th>PaymentDate</th>
                                        <th>StudentId</th>
                                        <th>Course</th>
                                        <th>Action</th>
                                        {/* <th>Edit User</th>
                                        <th>Delete User</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments.map((p, index) =>
                                            <tr key={index+1} style={{ color: "black", backgroundColor: 'azure' }}>
                                                <td>{p.transactionId}</td>
                                                {/* <td>{p.cardNumber}</td> */}
                                                <td>{p.cardType}</td>
                                                <td>{p.bankName}</td>
                                                <td>{p.amount}</td>
                                                <td>{p.description}</td>
                                                <td>{p.paymentDate}</td>
                                                <td>{p.studentId}</td>
                                                <td>{p.course}</td>
                                                <td ><Link   className = "btn btn-primary mb-2" to={`/view/all/payment/${p.transactionId}`} style={{ color: "white" }} >View</Link></td>
                                                {/* <td><Link to={`/eddituser/${u.transactionId}`}>Edit</Link></td>
                                                <td><Link to={`/deleteuser/${u.transactionId}`}>Delete</Link></td> */}
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            {/* <p><Link to="/">Go Back To Home Page</Link></p> */}
                        </div>
                }
            </div>
        </div>
    )
}
export default ListAllPayments;