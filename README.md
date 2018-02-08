# datatables-refresh

Plugin for JQuery Datatables. Adds the "refresh" button to DataTables which works with server-side processing.
## Installation

### npm

```bash
npm i datatables-refresh
```

```js
/* Jquery Datatables */
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-dt/css/jquery.dataTables.css';

/* datatables-refresh */
import 'datatables-refresh/js/dataTables.refresh.js';
```

### Direct &lt;script&gt; Include

```html
<!-- Jquery Datatables -->
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>

<!-- datatables-refresh -->
<script src="dataTables.refresh.js"></script>
```

```js
table = $('table').DataTable({
  'dom': 'liRprt',
  'processing': true,
  'serverSide': true,
  'ajax': {
    'url': myUrl,
    'type': 'POST'
  },
  refresh: {
    name: 'Refresh',
    selector: 'btn btn-default' // for example, classes from Bootstrap Framework
  }
});
```






