const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var sqlite3 = require('sqlite3').verbose()

function getDataBase(database,cb){
	var db = new sqlite3.Database(database+'.db')
	db.serialize(function(){
		cb(db)
	})
	db.close()
}

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'build')))
app.use(express.urlencoded({ extended: true }))


app.get('/maerli',(req,res)=>{
	res.send('ok')
})
app.post('/user',async (req,res)=>{
	let {user,senha} = req.body
	let data = getDataBase('maresia',async (db)=>{
		db.all("SELECT id_user,nome,senha FROM users WHERE nome=? AND senha=?",[user,senha], (err, rows) => {
		if(err){
			console.log(err)
			res.json({err})
		}
		if(rows.length == 0) res.json({user:false})
		if(rows.length == 1) res.json({user:true})
	})
	})
})

app.post('/garcon',async (req,res)=>{
	let {user,senha} = req.body
	let data = getDataBase('maresia',async (db)=>{
		db.all("SELECT id_garcon,nome,senha FROM garcon WHERE nome=? AND senha=?",[user,senha], (err, rows) => {
		if(err){
			console.log(err)
			res.json({err})
		}
		if(rows.length == 0) res.json({user:false})
		if(rows.length == 1) res.json({user:true})
	})
	})
})

app.get('/database/:table',(req,res)=>{
	var table = req.params.table
	let data = getDataBase('maresia',async (db)=>{
		db.all("SELECT * FROM "+table,[], (err, rows) => {
		if(err){
			console.log(err)
			res.json({err})
		}
		res.json(rows)
	})
	})
})

app.get('/select/:table/:coluna/:value',(req,res)=>{
	var table = req.params.table
	var coluna = req.params.coluna
	var value = req.params.value
	let data = getDataBase('maresia',async (db)=>{
		db.all("SELECT * FROM "+table+" WHERE "+coluna+"=?",[value], (err, rows) => {
		if(err){
			console.log(err)
			res.json({err})
		}
		res.json(rows)
	})
	})
})

app.post('/insert/:table',(req,res)=>{
	var table = req.params.table
	var values = Object.values(req.body)
	var keys = Object.keys(req.body)
	var data = getDataBase('maresia',(db)=>{
		db.run("INSERT INTO "+table+"("+keys.join(',')+") VALUES("+keys.map(x=>'?').join(',')+")",values,(err)=>{
			console.log(err)
		})
		res.json({message:'dados inseridos'})
	})
})
	
app.listen(4000,()=>{
	console.log('running')
})
