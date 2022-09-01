<!-- script>
  import Navbar from "./Navbar.svelte";
  import Popup from "./Popup.svelte";
</script -->

<head>
<title>Crontab UI</title>
<script src="js/jquery.js"></script>
<script src="js/script.js"></script>
<script src="js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/bootstrap.min.css" />
<script lang="js">
	var crontabs = [];
	var routes = [];
	$(function () {
		// initialize tooltips
		$('[data-toggle="tooltip"]').tooltip();
		crontabs = JSON.parse('<%- crontabs.replace(/\\\\/g, "\\\\\\\\").replace(/\\\"/g,"\\\\\"").replace(/\'/g,"\\\'") %>');
		routes = JSON.parse('<%- routes %>');
	})
</script>
</head>
<Navbar/>
<div class="container">
	<h2>db</h2>
	<table class="table">
	<tr>
		<th>Id</th>
		<th></th>
		<th>Job</th>
		<th>Time</th>
		<th>Last Modified</th>
	</tr>

			<tr>
			<tr style="background:#3A6DA6;color:#fff">

				<td>

				</td>

				<td>

				</td>
				<td> crontab.command </td>
				<td> crontab.schedule </td>
				<td> crontab.timestamp</td>
			</tr>

	</table>
	<a class="btn btn-primary" onclick="restore_backup('<%= db %>')" href="#"><span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span> Restore</a>
	<a class="btn btn-danger" onclick="delete_backup('<%= db %>')" href="#"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</a>
</div>

<Popup/>
