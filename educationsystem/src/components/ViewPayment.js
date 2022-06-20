import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ViewPayment(){
    const [payment, setPayment] = useState(null);
    const{ id } = useParams();
    const fetchPaymentById = () => {
        axios.get("http://localhost:8081/api/edu/get/" + id).then(resp => setPayment(resp.data))

    }
    useEffect(fetchPaymentById, []);
    return(
        <div>
        <div className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/view/all/payment" style={{color:"yellow"}} className="previous round">Back</Link> </div>

             <h2>Payment By Id</h2>
                {
                    payment !== null &&
                    <div>
                        
                       <p>TransactionId: {payment.transactionId}</p>
                        {/* <p>CardNumber: {payment.cardNumber}</p> */}
                        <p>CardType: {payment.cardType}</p>
                        <p>BankName: {payment.bankName}</p>
                        <p>Amount: {payment.bankName}</p>
                        <p>Description: {payment.description}</p>
                        <p>PaymentDate: {payment.paymentDate}</p>
                        <p>StudentId: {payment.studentId}</p>
                        <p>Course: {payment.course}</p>
                         </div>
                        }
        </div>
    )
}
export default ViewPayment;