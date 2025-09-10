import { useState } from "react";

export default function App() {
  const [phones, setPhones] = useState([
    { name: "iphone x", price: 500, qty: 4 },
    { name: "iphone 11", price: 550, qty: 4 },
    { name: "iphone 12", price: 600, qty: 4 },
    { name: "iphone 13", price: 650, qty: 4 },
    { name: "iphone 14", price: 650, qty: 4 },
  ]);

  const addNewPhone = () => {
    let newPhoneName = prompt("enter new phone name : ");
    let newPhonePrice = prompt("enter new phone price : ");
    let newPhoneQty = prompt("enter new phone quantity : ");
    let newObj = {
      name: newPhoneName,
      price: newPhonePrice,
      qty: newPhoneQty,
    };
    if(newPhoneName == '' || newPhonePrice == '' || newPhoneQty == ''){
      alert('please fill the values !')
    }else{
      let copy = [...phones];
      copy.push(newObj)
      setPhones(copy);
    }
  };

  const editPhoneInfo = ()=>{
    let index = +prompt('enter phone index you want to update');
    let newNameValue = prompt('enter new phone name');
    let newPriceValue = prompt('enter new price');
    let newQty = prompt('enter new qty');
    let copy = [...phones];
    if (newNameValue == '' && newPriceValue == '' && newQty == ''){
      alert('please fill the values !')
    }else{
      copy[index].name = newNameValue;
      copy[index].price = newPriceValue;
      copy[index].qty = newQty;
      setPhones(copy);
    }
  }
  const deleteIndex = (indexToDelete) =>{
    let areYouSure = confirm('are you sure ?');
    if(areYouSure){
      let copy = [...phones];  
      copy.splice(indexToDelete,1);
      setPhones(copy);
    }
}
  return (
    <div className="flex flex-col  gap-3.5 justify-center items-center mt-7">
      <button className="btn btn-primary w-[200px]" onClick={() => {addNewPhone();}}>add new phone</button>
      <button className="btn btn-primary w-[200px]" onClick={() => {editPhoneInfo();}}>edit phone info </button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>item name</th>
            <th>item price</th>
            <th>item qty</th>
            <th>item total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {phones.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{el.qty * el.price}</td>
                <td><button className="btn btn-error w-[150px]" onClick={() => {deleteIndex(index);}}>delete phone </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
