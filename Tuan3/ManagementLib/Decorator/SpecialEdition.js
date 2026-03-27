const BorrowDecorator = require("./BorrowDecorator");

class SpecialEdition extends BorrowDecorator {
    getDetails() {
        return super.getDetails() + " + special edition";
    }
}
module.exports = SpecialEdition;