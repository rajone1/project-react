// export default function Todolist(item) {
//   return (
//     <div>
//       <li>
//         first item: {item.naem1} Second item: {item.naem2}
//       </li>
//       ;
//     </div>
//   );
// }

// export default function Todolist({ naem1, naem2 }) {
//   return (
//     <div>
//       <li>
//         first item: {naem1} Second item: {naem2}
//       </li>
//       ;
//     </div>
//   );
// }

// conditional rendaring option 1

// export default function Todolist({ naem1, naem2, isdone }) {
//   if (isdone === true) {
//     return <li>finished {naem1}</li>;
//   } else {
//     return <li>work on {naem1}</li>;
//   }
// }
// conditional rendaring option 2
// export default function Todolist({ naem1, naem2, isdone }) {
//   if (isdone) {
//     return <li>finished {naem1}</li>;
//   }
//   return <li>work on {naem1}</li>;
// }

// conditional rendaring option 3

// export default function Todolist({ naem1, naem2, isdone }) {
//   return (
//     <li>
//       {isdone ? "finished " : "work in progress "}:- {naem1}
//     </li>
//   );
// }
// conditional rendaring option 4 true and false

// export default function Todolist({ naem1, isdone }) {
//   return (
//     <li>
//       {naem1}
//       {isdone && "done"}
//     </li>
//   );
// }

// false value show
export default function Todolist({ naem1, isdone }) {
  return (
    <li>
      {naem1}
      {isdone || " Note done"}
    </li>
  );
}
