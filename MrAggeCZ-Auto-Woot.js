<script>
$('#woot').click();
API.on(API.ADVANCE,callback);
function callback(obj){
	$('#woot').click();
}
</script>
