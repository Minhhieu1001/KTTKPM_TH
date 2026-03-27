const BorrowDecorator = require("./BorrowDecorator");

class ExtendTime extends BorrowDecorator {
    getDetails() {
        return super.getDetails() + " + extended time";
    }
}
module.exports = ExtendTime;