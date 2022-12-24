elem = document.getElementsByClassName('a-menu');

current_page = document.location;

console.log(current_page);

for(var i = 0; i < elem.length; i++)
{
	var href = elem[i].getAttribute('href');
	if(current_page['href'].endsWith(href))
	{
		elem[i].classList.add('a-active')
	}
}
