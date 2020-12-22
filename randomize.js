var items = [];
$(document).ready(function () {
    var id = $('body').attr('id');
    if(id != 'exercise_head') {
        document.getElementById('body');
        $('a').each(function () {
            if ($(this)[0].hasAttribute("href")) {
                if ($(this).attr('href').indexOf("/content/package/") >= 0) {
                    items.push($(this).attr('href'))
                }
            }
        })
        function questioner() {
            if (confirm("Click ok to launch a random question")) {
                index = Math.floor((Math.random() * items.length) + 1);
                var win = window.open(items[index], '_blank');
                win.focus();
                questioner()
            }
        }
        questioner()
    }
});
