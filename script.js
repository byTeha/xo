let cells = document.querySelectorAll('#field td');
let tabl = document.querySelector('#field');
let gameRes = document.querySelector('#gameRes');
let gameResp = document.querySelector('#gameRes p');

function start(cells) {
    let i = 0;
    for (let elem of cells){
        elem.addEventListener('click',function func(){
            elem.textContent = ['X','O'][i % 2];
            if (isVictory(cells)) {
                gameRes.style.display = 'flex';
                gameResp.textContent += this.textContent;
                tabl.classList.add('pointer');
			} else if (i == 8) {
                gameRes.style.display = 'flex';
				gameResp.textContent = 'Ничья';
			}
            i++;
            elem.removeEventListener('click',func)
        })
    }
}

function isVictory(cells){
    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let comb of combs) {
		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent 
				&& 
			cells[comb[1]].textContent == cells[comb[2]].textContent 
				&& 
			cells[comb[0]].textContent != ''
		) {
			return true;
		}
	}
	
	return false;
};

start(cells);
isVictory()
