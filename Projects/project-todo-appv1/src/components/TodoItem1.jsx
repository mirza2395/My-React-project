function TodoItem1() {

let todoName = 'Hello one';
let todoDate = '10-10-10';

    return (
    <div class="container">
<div class="row rowst">
  <div class="col-6">{todoName}</div>
  <div class="col-4">{todoDate}</div>
  <div class="col-2"><button type="button" class="btn btn-danger mybtn">delete</button></div>
</div>
</div>
);
}

export default TodoItem1;