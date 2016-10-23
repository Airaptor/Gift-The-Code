//var friends;
var friends = TAFFY([{"id":1,"first":"John","last":"Smith","about":" fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt","email":"Active"},
{"id":2,"first":"Kelly","last":"Ruth","about":" fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum sinctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta oluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt","email":"Active@hotmail.com"},
{"id":3,"first":"Jeff","last":"Stevenson","about":"fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt","email":"hi@hotmail.co"},
{"id":4,"first":"Jennifer","last":"Gill","about":" fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero temporeinctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta inctio. Nam libero tempore, cum soluta , cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt","email":"still@hotmail.com"}
]);

var notes = TAFFY([
  {"id":"Kelly","date": "2016/11/14","positivity": 3,"note":"went okay sorry fine bad awesome mediocre had a blast today at the park today"},
  {"id":"Kelly","date": "2016/09/1","positivity": 4,"note":"kelly got a job, she got hired at google, she codes assembly, very good for her, yes congratulations"},
  {"id":"Kelly","date": "2016/04/1","positivity": 2,"note":"was upset today because she did not receive a discount"},
  {"id":"Jeff","date": "2016/12/1","positivity": 1,"note":"okay bad day at the office I was talking to my boss got into a fit, i hate work, dont not enjoy it all im losing, lose, lose, loss"},
  {"id":"Jeff","date": "2016/08/1","positivity": 3,"note":"today was okay okay okay went a bit neutral dont know what to do I like hate love life"},
  {"id":"Jeff","date": "2016/01/1","positivity": 9,"note":"very amazing day today was great had a good day, got an awesome grade on my midterm"},
  {"id":"Jennifer","date": "2016/11/14","positivity": 9,"note":"very excited for new job, happy, life is good and great right now"},
  {"id":"Jennifer","date": "2016/09/1","positivity": 9,"note":"Got a job, very excited and happy lots of work, but i love, i like and i win"},
  {"id":"Jennifer","date": "2016/04/1","positivity": 9,"note":"therapy was been working very excited and happy I am loving and in love with my life right now, good!"},
  {"id":"John","date": "2016/12/1","positivity": 4,"note":"im a pretty neutral person like okay neutral not great not hate"},
  {"id":"John","date": "2016/08/1","positivity": 5,"note":"I keep losing, i dont feel good, getting into violence and getting involved with bad people"},
  {"id":"John","date": "2016/01/1","positivity": 7,"note":"today was a little bit better I felt good"}
]);

var newCurr;

window.onload = function() {
  //alert("loaded");
  var friends = createdatabase();
  var popup = document.getElementById("popupContact");
  $(popup).addClass("displayNone");

  loadNames(friends, false);
};

function createdatabase(){
  /*var friends = TAFFY([
  	{"id":1,"first":"John","last":"Smith","about":"Seattle, WA","email":"Active"},
  	{"id":2,"first":"Kelly","last":"Ruth","about":"Dallas, TX","email":"Active"},
  	{"id":3,"first":"Jeff","last":"Stevenson","about":"Washington, D.C.","email":"Active"},
  	{"id":4,"first":"Jennifer","last":"Gill","about":"Seattle, WA","email":"Active"}
  ]);

  friends.insert({"id":5,"first":"first","last":"last","about":"about","email":"email"});

  var kellyNotes = TAFFY([
    {"id":1,"note":"looks okay today"},
    {"id":1,"note":"he got a job"},
    {"id":1,"note":"received a discount"}
  ]);

  var jeffNotes = TAFFY([
  	{"id":1,"note":"ltoday"},
    {"id":1,"note":" job"},
  	{"id":1,"note":"count"}
  ]);

  kellyNotes({id:1}).each(function (r) {
   //alert(r.note + "!");
});

jeffNotes({id:1}).each(function (r) {
   //alert(r.note + "!");
});
  //Console.Log("Kel" + k);
  //Console.Log("jeff" + j);

  //alert(kelly.last);
  return friends;*/
}

var contain = document.getElementById("containerID");
var config = {
 content: [{
     type: 'row',
     content:[{
         type: 'component',
         componentName: 'Editor',
         componentState: { label: 'A' }

     },{
         type: 'column',
         content:[{
             type: 'component',
             componentName: 'Client List',
             componentState: { label: 'B' }
         },{
             type: 'component',
             componentName: 'Tools',
             componentState: { label: 'C' }
         }]
     }]
 }]
};

var myLayout = new GoldenLayout( config , contain);
myLayout.registerComponent( 'Editor', function( container, componentState ){
	container.getElement().html(
    '<div class="toolbar-actions" style="overflow-y:scroll;margin-top:2%;height:100%">' +
      '<div class="btn-group">' +
        '<button class="btn btn-large">' +
          '<span class="icon icon-folder"></span>' +
        '</button>' +
        '<button class="btn btn-large">' +
          '<span class="icon icon-download"></span>' +
        '</button>' +
        '<button class="btn btn-large">' +
          '<span class="icon icon-upload"></span>' +
        '</button>' +
      '</div>' +
      '<button class="btn btn-default">' +
        '<span class="icon icon-home icon-text"></span>'+
        'Filters'+
      '</button>'+
      '<button class="btn btn-default btn-dropdown pull-right">' +
        '<span class="icon icon-megaphone"></span>' +
      '</button>' +
      '<div id="editor" style="text-align:center;" width="100%" height="600px"' +
				'<div id=clientInformation>' +
          '<h4 style="font-weight:bold;" id="titleName">Name</h4>' +
          '<h5 style="font-weight:bold;" id="titleEmail">email</h5>' +
          '<span style="font-weight:bold;" id="titleAbout" style="width:100%">about</span>' +
        '<div>' +
        '<div class="table-responsive">' +
  '<table class="table">' +
    '<thead>' +
      '<tr>' +
        '<th style="width:5%">#</th>' +
        '<th style="width:10%">Date</th>' +
        '<th style="width:10%">Positivity</th>' +
        '<th style="width:55%">Notes</th>' +
      '</tr>' +
  '</thead>' +
  '  <tbody id=notesBody>' +

    '</tbody>' +
  '</table>' +
  '</div>' +

  '<div id="textarea" style="height:80%">'+
				'<textarea id="texteditor" autofocus></textarea>' +
        '<input style="margin-bottom:1%;" id="date" name="name" placeholder="YYYY/MM/DD" type="text">' +
        '<input style="margin-bottom:1%;" id="positivityInput" name="name" placeholder="1-10" type="text">' +
        '<br>' +
        '<button id="saveButton" onclick="saveNewNote()"class="btn btn-primary">' +
          'Save note' +
        '</button>' +
			'</div>' +

			'</div>' +
    '</div>'
  )
})

myLayout.registerComponent( 'Client List', function( container, componentState ){
	container.getElement().html(
    '<div class="toolbar-actions" style="overflow-y: scroll;">' +
      '<button class="btn btn-primary" onclick="insertNewClient()">' +
        'add new' +
      '</button>' +
      //Popup Div Starts Here
      '<div id="popupContact">' +
      //Contact Us Form
      '<form action="#" id="form" method="post" name="form">' +
      '<h3>Add new client</h3>' +
      '<hr>' +
      '<input id="first" name="name" placeholder="First name" type="text">' +
      '<br>' +
      '<input id="last" name="last" placeholder="Last name" type="text">' +
      '<br>' +
      '<input id="email" name="email" placeholder="Email" type="text">' +
      '<br>' +
      '<textarea id="about" name="message" placeholder="About"></textarea>' +
      '<br>' +
      '<button class="btn btn-primary" onclick="saveNewClient(); return false;">' +
        'Create entry' +
      '</button>' +
      '</form>' +
      '</div>' +
      //Popup Div Ends Here
      '<ul id="namelist" class="panel-body nav nav-pills nav-stacked">' +
			'</ul>' +
    '</div>'
    )
})

myLayout.registerComponent( 'Tools', function( container, componentState ){
	container.getElement().html(
		'<div style="font-weight:bold" class="col-lg-12 panel panel-default">' +
			'<div class = "panel-heading">' +
        '<ul class="nav nav-tabs" id="myTab">' +
          '<li class="active"><a onclick="chart_one()" data-target="#home" data-toggle="tab">Home</a></li>' +
          '<li><a data-target="#profile" onclick="chart_two()" data-toggle="tab">Consultation Visits</a></li>' +
          '<li><a data-target="#messages" data-toggle="tab">Messages</a></li>' +
       '</ul>' +

       '<div class="tab-content">' +
        '<div class="tab-pane active" id="home"></div>'+
        '<div style="width:80%;margin:15px auto;"class="tab-pane" id="profile">' +
          '<canvas id="myChart" width="400" height="250"></canvas>' +
        '</div>' +
        '<div class="tab-pane" id="messages">Message</div>' +
       '</div>' +
			'</div>' +
			'<div class = "panel-body">' +

			'</div>' + //closes panel-body
	 '</div>' // closes panel-default
 );
});

myLayout.init();






//loadNames
function loadNames(){
  var first_names = friends().select("first");
  var last_names = friends().select("last");
  var i;
  var n = first_names.length;
  var node = document.getElementById("namelist");
  //var pNode = node.parentNode;

  for (i = 0; i < n; i++) {

		var appendThisP = document.createElement("li");
    var appendThisA = document.createElement("a");
    appendThisP.className = "names";
    appendThisP.id = String(first_names[i]);
    var y = first_names[i];

    appendThisP.setAttribute("style", "font-weight:bold; text-align:center;");

    appendThisP.addEventListener("click", function(event) {
        loadClientData(event);
        event.preventDefault();
    });


    var actual = document.createTextNode(first_names[i] + " " + last_names[i]);
		appendThisA.appendChild(actual);
    appendThisP.appendChild(appendThisA);
		node.appendChild(appendThisP);
  }
}




function insertNewClient(){
  var popup = document.getElementById("popupContact");
  var namelist = document.getElementById("namelist");
  $(popupContact).removeClass("displayNone");
	$(namelist).addClass("displayNone");
}






function saveNewClient(){
  var popup = document.getElementById("popupContact");
  var namelist = document.getElementById("namelist");


  var first_names = friends().select("first");
  var n = first_names.length;
  n++;


  var first = document.getElementById("first");
  var last = document.getElementById("last");
  var email = document.getElementById("email");
  var about = document.getElementById("about");

  //alert(first.value + last.value + email.value + about.value);

  friends.insert({"id":String(n),"first":String(first.value),"last":String(last.value),"about":String(about.value),"email":String(email.value)});

  var node = document.getElementById("namelist");
  var pNode = node.parentNode;
  var appendThisP = document.createElement("li");
  var appendThisA = document.createElement("a");
  appendThisP.className = "names";
  appendThisP.id = String(first.value);

    appendThisP.setAttribute("style", "font-weight:bold; text-align:center;");

    appendThisP.addEventListener("click", function(event) {
        loadClientData(event);
        event.preventDefault();
    });


  var actual = document.createTextNode(String(first.value) + " " + String(last.value));
  appendThisA.appendChild(actual);
  appendThisP.appendChild(appendThisA);
  node.appendChild(appendThisP);


	$(popupContact).addClass("displayNone");
  $(namelist).removeClass("displayNone");
}




function loadClientData(event){
  var currentSelection = event.currentTarget.id;
  loadtitle(currentSelection);
  loadNotes(currentSelection);
}

function loadtitle(currentSelection){
  var first_names = friends().select("first");
  var n = first_names.length;
  var i;
  var currentID;

  for(i=0 ; i < n ;i++){
    //alert("ran");
    if(String(currentSelection) === String(first_names[i])){
      currentID = i+1;
    }
  }

  var currUser = friends({id:currentID}).first();

  document.getElementById("titleName").innerHTML = currUser.first + " " + currUser.last;
  document.getElementById("titleEmail").innerHTML = currUser.email;
  document.getElementById("titleAbout").innerHTML = currUser.about;

}

function loadNotes(currentSelection){
  var counter=0;
  var node = document.getElementById("notesBody");
  newCurr = currentSelection;

  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }

  notes({id:String(newCurr)}).each(function (r) {
    counter++;
   var row = document.createElement("tr");
   row.className = "success";

   //document number
   var docNum = document.createElement("td");
   var actual1 = document.createTextNode(counter);
   //document date
   var docDate = document.createElement("td");
   var actual2 = document.createTextNode(r.date);
   //document date
   var docPos = document.createElement("td");
   var actual4 = document.createTextNode(r.positivity);
   //document note
   var docNote = document.createElement("td");
   var actual3 = document.createTextNode(r.note);



   docNum.appendChild(actual1);
   docDate.appendChild(actual2);
   docNote.appendChild(actual3);
   docPos.appendChild(actual4);

   row.appendChild(docNum);
   row.appendChild(docDate);
   row.appendChild(docPos);
   row.appendChild(docNote);

   node.appendChild(row);


  });


  /*  var save = document.getElementById("saveButton");
  save.removeEventListener("click", saveNewNote);

  save.addEventListener("click", function(event) {
      saveNewNote(event,currentSelection);
      event.preventDefault();
  });*/
}

function saveNewNote(){
  //event,currentSelection
  var str = String(document.getElementById("titleName").innerHTML);
  var strArray = str.split(" ");
  var current = strArray[0];
  //date
  //texteditor
  var first_names = notes().select("id");
  var n = first_names.length;
  var i;
  var currentID=0;

  for(i=0 ; i < n ;i++){
    if(String(current) === String(first_names[i])){
      currentID++;
    }
  }

  currentID++;

  var node = document.getElementById("notesBody");
  var date = document.getElementById("date").value;
  var positivity = document.getElementById("positivityInput").value;
  var texteditor = document.getElementById("texteditor").value;

  var row = document.createElement("tr");
  row.className = "success";

  //document number
  var docNum = document.createElement("td");
  var actual1 = document.createTextNode(currentID);
  //document date
  var docDate = document.createElement("td");
  var actual2 = document.createTextNode(date);
  //positivity
  var docPos = document.createElement("td");
  var actual4 = document.createTextNode(positivity);
  //document note
  var docNote = document.createElement("td");
  var actual3 = document.createTextNode(texteditor);



  docNum.appendChild(actual1);
  docDate.appendChild(actual2);
  docPos.appendChild(actual4);
  docNote.appendChild(actual3);

  row.appendChild(docNum);
  row.appendChild(docDate);
  row.appendChild(docPos);
  row.appendChild(docNote);

  node.appendChild(row);

  notes.insert({"id":String(current),"date": date,"positivity":positivity,"note":texteditor});

  notes.store();
}

function chart_one(){
  alert("hey");
}

function chart_two(){
  var str = String(document.getElementById("titleName").innerHTML);
  var strArray = str.split(" ");
  var current = strArray[0];

  var first_names = notes().select("id");
  var positivity = notes().select("positivity");
  var note = notes().select("note");

  var n = first_names.length;
  var i;
  var currentID=0;

  var sentimood = new Sentimood();

  var x_axis = new Array();
  var y_axis = new Array();
  var ySent_axis = new Array();

  for(i=0 ; i < n ;i++){
    if(String(current) === String(first_names[i])){
      currentID++;
      x_axis.push(currentID);
      y_axis.push(positivity[i]);
      var test = String(note[i]);
      var analysis = sentimood.analyze(test);

      ySent_axis.push((analysis.score/test.split(" ").length) * 2.5);
    }
  }

  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: x_axis,
    datasets: [{
      label: 'Positivity analysis',
      data: y_axis,
      backgroundColor: "rgba(153,255,51,0.6)"
    }, {
      label: 'Note analysis',
      data: ySent_axis,
      backgroundColor: "rgba(255,153,0,0.6)"
    }]
  }
});
}
