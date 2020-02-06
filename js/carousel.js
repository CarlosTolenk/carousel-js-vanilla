(function () {

    const DIRECTION_LEFT = 'left';
    const DIRECTION_RIGHT = 'right';
    const squares = ['red', 'blue', 'green', 'orange'];
    const containerCarousel = document.getElementById('carousel');
    const actionButtonLeft = document.getElementById('left-btn');
    const actionButtonRight = document.getElementById('right-btn');
    const addColorPalette = document.getElementById('add-color');
    const parentContainerCarousel = containerCarousel.parentElement;
    let selectedList = [];
    let activesSquares = [];
    let count = 0;


    /*
    *  Dibujar en el DOM los elementos
    *  Param squares[]
    * */
    const drawSquare = (squares) => {
        let wrapperCarousel = document.createElement('div');
        wrapperCarousel.classList.add('wrapper-carousel');
        squares.map(color => {
            addSquareColor(color)
        });
    };

    const drawButtonIndication = (squares, callback) => {
        squares.map((color, index) => {
            addButtonColor(color, callback);
        });
    };

    const drawCircleIndication = (squares, current = 0) => {
        squares.map((color, index) => {
            addCircleIndication(color);
        });
    };


    const animationCarousel = (direction) => {
        const totalSquares = WrapperCarousel.querySelectorAll(".square").length;
        direction === DIRECTION_LEFT ? ++count : --count;
        WrapperCarousel.style.left = count * 310 + 'px';
        actionButtonLeft.style.display = count < 0 ? "block" : "none";
        actionButtonRight.style.display = count > 3 - totalSquares ? "block" : "none";
    };

    const filterSquare = (element) => {
        controlWhiteListRender(element.value);
        touchedButtonAndAssignColorStatus(element);
        const squareNotInUse = getAllSquareNotInUse();
        setAllSquare();
        if (activesSquares.length !== squareNotInUse.length) {
            WrapperCarousel.style.left = 0 + 'px';
            removeSquareNotInUse(squareNotInUse);
        }
    };

    const removeSquareNotInUse = (squareNotInUse) => {
        squareNotInUse.map((squareDOM) => squareDOM.remove())
    };

    const getAllSquareNotInUse = () => {
        return activesSquares.filter(squareDOM => {
            return !selectedList.includes(squareDOM.style.backgroundColor);
        });
    };

    const addButtonColor = (color, callback) => {
        let containerButtons = document.querySelector('.container-button');

        if (containerButtons === null) {
            containerButtons = document.createElement('div');
            containerButtons.classList.add('container-button');
            parentContainerCarousel.insertAdjacentElement('afterbegin', containerButtons)
        }
        let button = document.createElement("button");
        button.type = "button";
        button.classList.add('button-indication');
        button.value = color;
        button.innerText = color.toUpperCase();
        button.onclick = (event) => callback(event.target);
        containerButtons.append(button);
    };

    const addCircleIndication = () => {
        let containerIndication = document.querySelector('.container-indication');
        if (containerIndication === null) {
            containerIndication = document.createElement('div');
            containerIndication.classList.add('container-indication');
            parentContainerCarousel.insertAdjacentElement('beforeend', containerIndication)
        }
        let circleIndication = document.createElement('div');
        circleIndication.classList.add('circle-indication');
        circleIndication.style.backgroundColor = 'gray';
        containerIndication.append(circleIndication);
    };

    const addSquareColor = (color) => {
        let wrapperCarousel = document.querySelector('.wrapper-carousel');

        if (wrapperCarousel === null) {
            wrapperCarousel = document.createElement('div');
            wrapperCarousel.classList.add('wrapper-carousel');
        }
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = `${color}`;
        activesSquares.push(square);
        wrapperCarousel.append(square);
        containerCarousel.append(wrapperCarousel);
    };

    const setAllSquare = () => {
        const WrapperContainer = document.querySelector('.wrapper-carousel');
        activesSquares.map((squareDOM) => {
            WrapperContainer.append(squareDOM)
        });
    };

    const touchedButtonAndAssignColorStatus = (element) => {
        if (element.style.backgroundColor === '') {
            element.style.backgroundColor = 'purple';
            element.style.color = 'white';
        } else {
            element.style.backgroundColor = '';
            element.style.color = '';
        }
    };

    const controlWhiteListRender = (value) => {
        if (selectedList.includes(value)) {
            const index = selectedList.indexOf(value);
            if (index > -1) {
                selectedList.splice(index, 1);
            }
        } else {
            selectedList.push(value);
        }
    };

    drawButtonIndication(squares, (item) => filterSquare(item));
    drawCircleIndication(squares, 0);
    drawSquare(squares);

    actionButtonLeft.addEventListener("click", function (e) {
        animationCarousel(DIRECTION_LEFT);
    });
    actionButtonRight.addEventListener("click", function (e) {
        animationCarousel(DIRECTION_RIGHT);
    });

    addColorPalette.addEventListener("click", function () {
        const selectInputValue = document.getElementById('selected-color');
        const newColorSelected = selectInputValue.options[selectInputValue.selectedIndex].value;
        squares.push(newColorSelected);
        addSquareColor(newColorSelected);
        addButtonColor(newColorSelected, (item) => filterSquare(item));
        addCircleIndication();
    });

    const WrapperCarousel = document.querySelector('.wrapper-carousel');

})();
