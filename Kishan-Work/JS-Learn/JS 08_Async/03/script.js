const key = document.querySelector('#key');
const showKey = (event)=>{
    key.innerHTML = `
    <table style="width:100%">
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${event.key === ' '?'space':event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
    `
}
document.addEventListener('keydown',showKey);