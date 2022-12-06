/* eslint-env es6 */
/* eslint-disable */

    let span = document.getElementsByClassName('span');
	let card = document.getElementsByClassName('card')
	let card_page = Math.ceil(card.length/2);
	let l = 0;
	let movePer = 25;
	let maxMove = 100;

	// laptop_view	
	let laptop_view = window.matchMedia("(max-width: 1280px)");
	if (laptop_view.matches)
	 {
	 	movePer = 33.7;
	 	maxMove = 200;
	 }

	// ipad_view	
	let ipad_view = window.matchMedia("(max-width: 1280px)");
	if (ipad_view.matches)
	 {
	 	movePer = 51.7;
	 	maxMove = 350;
	 }

	// mobile_view	
	let tab_view = window.matchMedia("(max-width: 325px)");
	if (tab_view.matches)
	 {
	 	movePer = 108;
	 	maxMove = 800;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (card == 1){l = 0; }
		for(const i of card)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of card){
			if (card_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}