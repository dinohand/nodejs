<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./Navbar.svelte";
  import Popup from "./Popup.svelte";
 //  import Restore from "./Restore.svelte";
   
   function newJob()
   {
    return "";
   }
</script>

<main>
  <Navbar />
  <div class="container-fluid">
    <!-- Cron Jobs-->
    <h2>Cronjobs</h2>
    <div class="form-group">
      <label for="env_vars">Environment Variables:</label>
      <textarea  class="form-control" rows="3" id="env_vars" placeholder="# Please set PATH, MAILTO, HOME... here" />
    </div>
    
    <a class="btn btn-primary" onclick="newJob();"> <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" /> New</a>
    <a class="btn btn-info" onclick="doBackup();">  <span class="glyphicon glyphicon-floppy-save" aria-hidden="true" /> Backup</a>
    <form id="import_form" enctype="multipart/form-data"  action="" method="post" style="display:none">
      <input type="file"  id="import_file" name="import_file"  onchange="#" />
    </form>
    <a class="btn btn-warning" onclick="import_db()"      ><span class="glyphicon glyphicon-import" aria-hidden="true" /> Import</a >
    <a class="btn btn-warning" href=""><span class="glyphicon glyphicon-download-alt" aria-hidden="true" /> Export</a>
    <!--<a class="btn btn-info" onclick="import_crontab()"><span class="glyphicon glyphicon-import" aria-hidden="true"></span> Import from crontab</a>-->
    <a class="btn btn-success" onclick="getCrontab();"><span class="glyphicon glyphicon-open" aria-hidden="true" /> Get from crontab</a>
    <a class="btn btn-success" onclick="setCrontab();"><span class="glyphicon glyphicon-save" aria-hidden="true" /> Save to crontab</a>
    <br />
    <br />
    <table class="table table-striped" id="main_table" width="90%">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Job</th>
          <th>Time</th>
          <th>Last Modified</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        <tr /><tr style="background:#3A6DA6;color:#fff">
          <td />

          <td>
            <a   class="btn" data-toggle="tooltip" data-placement="right"  title="==="><span class="glyphicon glyphicon-info-sign" aria-hidden="true" /> </a>
            <span class="glyphicon glyphicon-floppy-saved" aria-hidden="true" />
            <a  data-toggle="tooltip"              data-placement="right"  title="'Save to crontab' to deploy"            >              <span                class="glyphicon glyphicon-floppy-remove"
                aria-hidden="true" /> </a>
          </td>
          <td />
          <td>
            <span style="cursor:pointer" data-toggle="tooltip" data-placement="bottom"              title="★"/>
            <a class="btn" data-toggle="tooltip" data-placement="right" title=""> <span class="glyphicon glyphicon-info-sign" aria-hidden="true" /></a>
          </td>
          <td style="width:20" title="" />
          <td>
            <!-- controls based on crontab state -->

            <a class="btn btn-primary btn-danger" data-toggle="tooltip" data-placement="left" title="stderr" href=""  target="_blank"><span class="glyphicon glyphicon-list-alt" aria-hidden="true" /></a>
            <a class="btn btn-primary" data-toggle="tooltip" data-placement="left"title="stdout" href="" target="_blank"><span class="glyphicon glyphicon-list-alt"  aria-hidden="true"/></a>
            <a class="btn btn-info" onclick="runJob('===')"> <span class="glyphicon glyphicon-play" aria-hidden="true" /> Run now</a>
            <a class="btn btn-primary" onclick="editJob('===')"><span class="glyphicon glyphicon-edit" aria-hidden="true" /> Edit</a>
            <a class="btn btn-info" onclick="stopJob('===')"><span class="glyphicon glyphicon-stop" aria-hidden="true" /> Disable</a>
            <a class="btn btn-info" onclick="startJob('===')"><span class="glyphicon glyphicon-play" aria-hidden="true" /> Enable</a>
            <a class="btn btn-danger" onclick="deleteJob('===')"><span class="glyphicon glyphicon-trash" aria-hidden="true" />danger</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
<Popup/>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
