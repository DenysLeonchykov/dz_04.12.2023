
const blockAll = document.querySelector('.blockAll')
const block1 = document.querySelector('.block1')
const block2 = document.querySelector('.block2').style.display = "none"

blockAll.addEventListener('mouseover', () => {
    block1.style.display = 'none';
    document.querySelector('.block2').style.display = ''
})

blockAll.addEventListener('mouseout', () => {
    document.querySelector('.block2').style.display = "none";
    block1.style.display = ''
})


