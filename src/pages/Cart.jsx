function Cart() {
  return (
    <div>
      {/* Zawartość podstrony "Cart" */}
    </div>
  );
}

export default Cart;

// const Cart = ({ cartItems }) => {
//   return (
//     <div>
//       <h2>Koszyk</h2>
//       {cartItems.length === 0 ? (
//         <p>Koszyk jest pusty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               <span>{item.name}</span>
//               <span>{item.price}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;