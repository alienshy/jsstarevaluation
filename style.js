let lastClickedIndex = -1;
        function changeColor(clickedElement) {
            const divElements = document.querySelectorAll('.star');
            const clickedIndex = Array.from(divElements).indexOf(clickedElement);
            for (let i = 0; i <= clickedIndex; i++) {
                divElements[i].style.backgroundColor = "yellow";
            }
            for (let i = clickedIndex + 1; i < divElements.length; i++) {
                divElements[i].style.backgroundColor = "white";
            }
            lastClickedIndex = clickedIndex;
        }