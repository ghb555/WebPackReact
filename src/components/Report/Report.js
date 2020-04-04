import React from "react";

const calculateTotalCost = ({ usage, price }) =>
usage.reduce((summ, call) => summ + call.duration, 0) * price;

export const Report = ({data}) => {

  const {
      title,
      year,
      month,
      client: { name, lastName, email, phoneNumber },
      price,
      currency,
      usage
    } = data;

return (
  <div>
    <h3>{title}</h3>
    <h6>
      {year}/ {month}
    </h6>
    <section>
      <div>
        {lastName} {name}
        <br />
        {email} <br /> {phoneNumber}
      </div>
    </section>
    <h5>Report</h5>
    <div>
      Total Cost: {calculateTotalCost(data)} {currency}
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Duration</th>
          <th>Price</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {usage.map(({ when, from, to, duration }) => (
          <tr key={when}>
            <td>{when}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{duration}</td>
            <td>
              {price} {currency}
            </td>
            <td>
              {Math.ceil(price, duration, 100) / 100} {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
};


