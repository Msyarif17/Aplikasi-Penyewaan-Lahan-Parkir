@extends('tiket.main')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>tiket</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="{{ route('tiket.create') }}"> Create New Book</a>
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif


    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Details</th>
            <th width="280px">Action</th>
        </tr>
	    @foreach ($tiket as $book)
	    <tr>
	        <td>{{ ++$i }}</td>
	        <td>{{ $book->name }}</td>
	        <td>{{ $book->detail }}</td>
	        <td>
                <form action="{{ route('tiket.destroy',$book->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('tiket.show',$book->id) }}">Show</a>
                    <a class="btn btn-primary" href="{{ route('tiket.edit',$book->id) }}">Edit</a>
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>


@endsection