class BorrowDecorator {
    constructor(borrow) {
        this.borrow = borrow;
    }

    getDetails() {
        return this.borrow.getDetails();
    }
}
module.exports = BorrowDecorator;