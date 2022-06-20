import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../css/style.css";
import PaymentHeader from "./PaymentHeader";
import NavBarStudent from "./NavBarStudent";

function AddPayment() {
  const [payment, setPayment] = useState({
    cardNumber: "",
    cardType: "",
    bankName: "",
    amount: "",
    description: "",
    paymentDate: "",
    course: "",
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setPayment((payment) => ({
      ...payment,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    //validate add payment form
    let errors = {};

    if (!payment.cardNumber) {
      errors["cardNumber"] = "cardNumber is required";
    }

    if (typeof payment.cardNumber !== "undefined") {
      // this expression only for master card (/^(?:5[1-5][0-9]{14})$/)

      var pattern = new RegExp(/^[0-9]{16}$/);
      if (!pattern.test(payment.cardNumber)) {
        errors["cardNumber"] = "Please enter  valid 16 digit card number.";
      }
    }

    if (!payment.amount) {
      errors["amount"] = "amount is required";
    }

    if (!payment.description) {
      errors["description"] = "description is required";
    }
    if (typeof payment.description !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(payment.description)) {
        errors["description"] = "Please type only character ";
      }
    }

    if (!payment.paymentDate) {
      errors["paymentDate"] = "paymentDate is required";
    }
    if (!payment.course) {
      errors["course"] = "course is required";
    }
    if (typeof payment.course !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(payment.course)) {
        errors["course"] =
          "Please type only character not number or special character";
      }
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      alert("Payment submitted");
      const myUser = JSON.parse(localStorage.getItem("myUser"));
      const payload = {
        cardNumber: payment.cardNumber,
        cardType: payment.cardType,
        bankName: payment.bankName,
        amount: payment.amount,
        description: payment.description,
        paymentDate: payment.paymentDate,
        course: payment.course,
        studentId: myUser.studentId,
      };
      axios
        .post("http://localhost:8081/api/edu/save", payload)
        .then((resp) =>
          alert(
            "payment is saved with transactionId:" + resp.data.transactionId
          )
        );
      navigate(-1);
    }
  };
  return (
    <div className="form"  style={{marginTop:"7%"}}>
      
      <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/student/view/course"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
      <NavBarStudent/>
      
      <div className="form-body">
        <PaymentHeader />
        <div className="cardnumber">
          <label className="form__label" for="cardnumber">
            CardNumber
          </label>
          <input
            className="form__input"
            id="cardnumber"
            type="number"
            name="cardNumber"
            placeholder="Card Number"
            value={payment.cardNumber}
            onChange={handleChange}
          />
          {formErrors.cardNumber && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.cardNumber}
            </div>
          )}
        </div>
        <div className="cardtype">
          <label
            for="cardtypes"
            onChange={handleChange}
            className="form__label"
          >
            CardType
          </label>

          <select
            name="cardType"
            value={payment.cardType}
            onChange={handleChange}
          >
            <option value="">select</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          {formErrors.cardType && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.cardType}
            </div>
          )}
        </div>
        <div>
          <label for="banks" onChange={handleChange} className="form__label">
            BankName
          </label>

          <select
            name="bankName"
            value={payment.bankName}
            onChange={handleChange}
          >
            <option value="">select</option>
            <option value="axis">Axis</option>
            <option value="hdfc">HDFC</option>
            <option value="icici">ICICI</option>
            <option value="sbi">SBI</option>
          </select>
          {formErrors.bankName && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.bankName}
            </div>
          )}
        </div>
        <div className="amount">
          <label className="form__label" for="amount">
            Amount
          </label>
          <input
            className="form__input"
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={payment.amount}
            onChange={handleChange}
          />
          {formErrors.amount && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.amount}
            </div>
          )}
        </div>
        <div className="description">
          <label className="form__label" for="description">
            Description
          </label>
          <input
            className="form__input"
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={payment.description}
            onChange={handleChange}
          />
          {formErrors.description && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.description}
            </div>
          )}
        </div>
        <div className="course">
          <label className="form__label" for="course">
            Course
          </label>
          <input
            className="form__input"
            type="text"
            id="course"
            name="course"
            placeholder="Course"
            value={payment.course}
            onChange={handleChange}
          />
          {formErrors.course && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.course}
            </div>
          )}
        </div>

        <div className="paymentDate">
          <label className="form__label" for="paymentDate">
            PaymentDate
          </label>
          <input
            className="form__input"
            type="date"
            id="paymentDate"
            name="paymentDate"
            placeholder="Payment Date"
            value={payment.paymentDate}
            onChange={handleChange}
          />
          {formErrors.paymentDate && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.paymentDate}
            </div>
          )}
        </div>
      </div>
      <div transactionId="outer">
        <div class="inner1">
          <button className="btn btn-primary mb-2" onClick={handleSubmit}>
            Save
          </button>
        </div>
        <div class="inner2">
          <Link to="/student/view/course" className="btn btn-danger">
            {" "}
            Cancel{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AddPayment;
