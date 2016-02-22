<?php

if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['json_call'])) {
    echo file_get_contents('http://videoapi.my.mail.ru/videos/mail/alex.costantin/_myvideo/4375.json');
    exit;
}

?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript">
$.ajax({
    url: document.URL,
    dataType: 'JSON',
    type: 'POST',
    data: {json_call : true},
    success: function(response) {
        alert(response.version);
        alert(response.videos[0].key);
    }
});
</script>