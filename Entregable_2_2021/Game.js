class Game {
    constructor(context, width, height) {
        this.context = context;
        this.board = new Board(this.context);
        this.mode = '';
        this.dragging = false;
        this.selectedChip = null;
        this.width = width;
        this.height = height;

    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.board.draw();

    }

    checkHit(clickedX, clickedY) {


        let selectedChip = this.board.getSelectedChip(clickedX, clickedY);

        if (selectedChip) {
            this.dragging = true;
            this.selectedChip = selectedChip;
            this.dragging = true;

            return true;
        }

        return false;
    }
    handlerDrag(clickedX, clickedY) {

        if (this.dragging && this.selectedChip) {

            this.selectedChip.move(clickedX, clickedY);
            this.dragging = true;
            this.draw();
        }
    }

    stopDragging() {
        this.mode = 'standBy';
        //TODO
    }

    checkMove() {
        if (this.board.checkMove(this.selectedChip)) {

        }
    }

    dropChip(clickedX, clickedY) {

        if (this.selectedChip) {
            this.board.dropChip(this.selectedChip, clickedX, clickedY);
            this.selectedChip = null;
            this.dragging = false
            this.draw();

        }
    }

    setTurn() {
        this.board.setTurn();
    }

}