var Spreadsheet = function(rows) {
    this.rows = rows;
    this.cols = 26; // A to Z
    
    // Initialize grid with zeros
    this.grid = Array(rows + 1).fill().map(() => Array(this.cols).fill(0));
};

Spreadsheet.prototype.setCell = function(cell, value) {
    const [row, col] = this.parseCell(cell);
    this.grid[row][col] = value;
};

Spreadsheet.prototype.resetCell = function(cell) {
    const [row, col] = this.parseCell(cell);
    this.grid[row][col] = 0;
};

Spreadsheet.prototype.getValue = function(formula) {
    // Remove the '=' and split by '+'
    const expression = formula.substring(1);
    const [operand1, operand2] = expression.split('+');
    
    // Parse both operands
    const value1 = this.parseOperand(operand1);
    const value2 = this.parseOperand(operand2);
    
    return value1 + value2;
};

// Helper method to parse cell reference like "A1" to [row, col]
Spreadsheet.prototype.parseCell = function(cell) {
    const colChar = cell[0];
    const rowStr = cell.substring(1);
    
    const col = colChar.charCodeAt(0) - 'A'.charCodeAt(0);
    const row = parseInt(rowStr);
    
    return [row, col];
};

// Helper method to parse operand (could be number or cell reference)
Spreadsheet.prototype.parseOperand = function(operand) {
    // Check if it's a cell reference (starts with letter)
    if (/^[A-Z]/.test(operand)) {
        const [row, col] = this.parseCell(operand);
        return this.grid[row][col];
    } else {
        // It's a number
        return parseInt(operand);
    }
};