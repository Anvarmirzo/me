document.addEventListener('DOMContentLoaded', function (event) {
	function filterSelection(btnData) {
		const tabs = document.getElementsByClassName('works-tab');

		if (btnData == 'all') btnData = '';
		for (let tab of tabs) {
			removeClass(tab, 'show');
			if (tab.className.indexOf(btnData) > -1) addClass(tab, 'show');
		}
	}

	function addClass(element, name) {
		let i, arr1, arr2;
		arr1 = element.className.split(' ');
		arr2 = name.split(' ');
		for (i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {
				element.className += ' ' + arr2[i];
			}
		}
	}

	function removeClass(element, name) {
		let i, arr1, arr2;
		arr1 = element.className.split(' ');
		arr2 = name.split(' ');
		for (i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
		}
		element.className = arr1.join(' ');
	}

	// Add active class to the current button (highlight it)
	let btnContainer = document.getElementById('myBtnContainer');
	let btns = btnContainer.getElementsByClassName('btn');

	for (const btn of btns) {
		btn.addEventListener('click', function (e) {
			filterSelection(this.dataset.id);
			let current = document.getElementsByClassName('active');
			current[0].className = current[0].className.replace(' active', '');
			this.className += ' active';
		});
	}

	filterSelection('all');
});
