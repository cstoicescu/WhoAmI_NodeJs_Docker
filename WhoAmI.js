const express = require('express')
const app = express()
const os = require('os');
app.get('/whoami', function(req, res) {
res.send( 
`<div style=" background-color:#BCBBBB; height:100%; margin-left: 20%; width: 60%; ">
 <h1 style="text-align:center">Topic: Advanced Topics in Computer Networks</h1> 
  <h2 style="text-align:center">Name: Catalin Stoicescu</h2>
     <h2 style="text-align:center">Github: <a target="_blank" href="https://github.com/cstoicescu">
  <img height="50px" width="auto" src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png"> 
    </a>
    </h2>
<h1 style="text-align:center">I am <u>${os.hostname()}</u></h1>
	<div style="position:absolute;  font-family: Brush Script MT, cursive; font-size:20px; top:60%; left:50%;transform: translate(-50%, -50%);">
		<p style="text-align:center">Me when the final exams start</p>
		<img src="https://media1.tenor.com/images/2a8c4b934b6b0c7bd90a3f6c1c28a0b7/tenor.gif?itemid=5368580">
	</div>
</div>`
);
})
app.listen(8081, function() {
console.log('app listening on port 8081!')
})
