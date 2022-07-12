/**
 * @param {HTMLElement[]} navItems
 * @param {string} target
 */

export function menuActiveItem(navItems, target) {
	for (let i = 0; i < navItems.length; i++) {
		const item = navItems[i];
		// deactivate all menu items
		item.classList.remove('active');
		if (item.innerText === target) {
			item.classList.add('active');
		}
	}
}
