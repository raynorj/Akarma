function delete_karma() {
	var span_tags = document.getElementsByTagName("span");

	const comment_regex = new RegExp('[0-9]+ points{0,1}'); //add quantifier to s
	const display_regex = new RegExp('[0-9]+ karma'); //can be combined with previous?

	for (let i = 0; i < span_tags.length; i++) {
		if (comment_regex.test(span_tags[i].innerHTML)) {
			span_tags[i].innerHTML = "";
		}
		if (display_regex.test(span_tags[i].innerHTML)) {
			span_tags[i].innerHTML = "";
		}
	}
}

delete_karma();