    function TodoItem2() {

    let todoName = 'Hello twoo';
    let todoDate = '30-23-2321';

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

    export default TodoItem2;