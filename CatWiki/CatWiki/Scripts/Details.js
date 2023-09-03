function createBlockLevel() {
    var LevelValue = document.querySelectorAll('p#number');
    console.log(LevelValue.length)
    var LevelSection = document.querySelectorAll('div.level');
    for (let count = 0; count <= LevelSection.length; count++) {
        for (let i = 1; i <= 5; i++) {
            var blockLevel = document.createElement('div');
            blockLevel.classList.add('block-level-empty');
            if (LevelValue[count].textContent - i >= 0) {
                blockLevel.classList.remove('block-level-empty')
                blockLevel.classList.add('block-level');
            }
            LevelSection[count].appendChild(blockLevel);
        }
    }
}
createBlockLevel();