import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById, editBookById } = useBooksContext();

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleDelete = () => {
        deleteBookById(book.id);
    }
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        editBookById(id, newTitle);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;
