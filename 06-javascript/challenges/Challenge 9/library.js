 library.js
function createLibrary() {
    const books = [];
    const members = [];
    const borrowings = [];

    return {
        addBook(bookData) {
            books.push({ 
                ...bookData, 
                availableCopies: bookData.copies 
            });
        },

        addMember(memberData) {
            members.push({ ...memberData, history: [] });
        },

        borrowBook(memberId, isbn) {
            const member = members.find(m => m.id === memberId);
            const book = books.find(b => b.isbn === isbn);
            
            if (!member || !book || book.availableCopies === 0) {
                return false;
            }

            book.availableCopies--;
            const borrowDate = new Date();
            const dueDate = new Date(borrowDate.getTime() + 14 * 24 * 60 * 60 * 1000);
            
            borrowings.push({
                memberId,
                isbn,
                borrowDate,
                dueDate,
                returned: false
            });

            member.history.push({
                isbn,
                title: book.title,
                borrowedAt: borrowDate,
                returnedAt: null
            });

            return true;
        },

        returnBook(memberId, isbn) {
            const borrowing = borrowings.find(b => 
                b.memberId === memberId && 
                b.isbn === isbn && 
                !b.returned
            );

            if (!borrowing) return false;

            const book = books.find(b => b.isbn === isbn);
            book.availableCopies++;
            borrowing.returned = true;
            borrowing.returnDate = new Date();

            const member = members.find(m => m.id === memberId);
            const historyItem = member.history.find(h => h.isbn === isbn);
            if (historyItem) {
                historyItem.returnedAt = borrowing.returnDate;
            }

            return true;
        },

        getAvailableCopies(isbn) {
            const book = books.find(b => b.isbn === isbn);
            return book ? book.availableCopies : 0;
        },

        getMemberHistory(memberId) {
            const member = members.find(m => m.id === memberId);
            return member ? member.history : [];
        },

        getOverdueBooks() {
            const today = new Date();
            return borrowings.filter(b => 
                !b.returned && 
                today > b.dueDate
            );
        },

        searchBooks(query) {
            const lowerQuery = query.toLowerCase();
            return books.filter(book => 
                book.title.toLowerCase().includes(lowerQuery) || 
                book.author.toLowerCase().includes(lowerQuery)
            );
        }
    };
}


const library = createLibrary();
library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.borrowBook('M1', '123');
console.log(library.getAvailableCopies('123')); // Returns 3

