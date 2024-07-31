function AddTodo() {
return ( <div class="container">
<div class="row rowst">
  <div class="col-6">
    <input type="text" placeholder="Enter Todo"></input>
  </div>
  <div class="col-4"><input type="date"/></div>
  <div class="col-2"><button type="button" class="btn btn-success mybtn">Add</button></div>
</div>
</div>
);
}


export default AddTodo;