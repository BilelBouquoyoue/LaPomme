import axios from 'axios';


function callButton(id){
  window.location = `/print/${id}`
}

function callButton2(id){
  window.location = `/print2/${id}`
}

async function deleteCommande(id){
  try {
    const res=await axios.delete(`/api/transactionEnCours/${id}`);

} catch (err) {
  console.log(err);
}
}


  export default { callButton, callButton2, deleteCommande}