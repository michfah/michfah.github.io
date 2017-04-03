var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/clubs/:id', function(req, result) {
    var clubId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=clubs.length;i<len;i++) {
        if (clubs[i].id === clubId) {
           data = clubs[i];
           break;
        }
    }  
    result.json(data);
});

app.get('/clubs', function(req, result) {
    result.json(clubs);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/players', function(req, result) {
    var players = [];
    for (var i=0,len=clubs.length;i<len;i++) {
        if (clubs[i].players) {
            for (var j=0,squadLen=clubs[i].players.length;j<squadLen;j++) {
                players.push(clubs[i].players[j]);   
            }
        }
    }  
    result.json(players);
});

//app.delete('/clubs/:id', function(req, res) {
//    var customerId = parseInt(req.params.id);
//    var data = { status: true };
//    for (var i=0,len=customers.length;i<len;i++) {
//        if (customers[i].id === customerId) {
//           customers.splice(i,1);
//           data = { status: true };
//           break;
//        }
//    }  
//    res.json(data);
//});

app.listen(8080);

console.log('Express listening on port 8080');

        var clubs = [
            {
                id: 1, 
                image: 'images/bohs.jpg',
                founded: '1890', 
                club:'Bohemians', 
                location:'Phibsborough, Dublin 7', 
                stadium: 'Dalymount Park',
                capacity: '8,000',
                manager: 'Keith Long',
                players: [
                    {
                        id: 1,
                        name: 'Shane Supple',
                        position: 'GK',
                        dob: '04/05/87',
                        club:'Bohemians'
                    },
                    {
                        id: 2,
                        name: 'Derek Pender',
                        position: 'DF',
                        dob: '02/10/84',
                        club:'Bohemians'
                    },
                    {
                        id: 3,
                        name: 'Lorcan Fitzgerald',
                        position: 'DF',
                        dob: '03/01/89',
                        club:'Bohemians'
                    },
                    {
                        id: 4,
                        name: 'Stephen Best',
                        position: 'DF',
                        dob: '15/03/97',
                        club:'Bohemians'
                    },
                    {
                        id: 5,
                        name: 'Rob Cornwall',
                        position: 'DF',
                        dob: '16/10/94',
                        club:'Bohemians'
                    },
                    {
                        id: 6,
                        name: 'Dano Byrne',
                        position: 'DF',
                        dob: '07/05/93',
                        club:'Bohemians'
                    },
                    {
                        id: 7,
                        name: 'Eoin Wearen',
                        position: 'MF',
                        dob: '02/10/92',
                        club:'Bohemians'
                    },
                    {
                        id: 8,
                        name: 'Phillip Gannon',
                        position: 'MF',
                        dob: '11/10/96',
                        club:'Bohemians'
                    },
                    {
                        id: 9,
                        name: 'Dinny Corcoran',
                        position: 'FW',
                        dob: '13/02/89',
                        club:'Bohemians'
                    },
                    {
                        id: 10,
                        name: 'Keith Ward',
                        position: 'MF',
                        dob: '12/12/90',
                        club:'Bohemians'
                    },
                    {
                        id: 11,
                        name: 'Kaleem Simon',
                        position: 'MF',
                        dob: '08/07/96',
                        club:'Bohemians'
                    },
                    {
                        id: 12,
                        name: 'Eoghan Morgan',
                        position: 'MF',
                        dob: '21/01/98',
                        club:'Bohemians'
                    },
                    {
                        id: 14,
                        name: 'Paddy Kavanagh',
                        position: 'MF',
                        dob: '29/12/85',
                        club:'Bohemians'
                    },
                    {
                        id: 15,
                        name: 'Oscar Brennan',
                        position: 'MF',
                        dob: '19/12/96',
                        club:'Bohemians'
                    },
                    {
                        id: 16,
                        name: 'Fuad Sule',
                        position: 'MF',
                        dob: '20/01/97',
                        club:'Bohemians'
                    },
                    {
                        id: 17,
                        name: 'Jamie Doyle',
                        position: 'MF',
                        dob: '30/10/93',
                        club:'Bohemians'
                    },
                    {
                        id: 18,
                        name: 'Ian Morris',
                        position: 'MF',
                        dob: '27/02/87',
                        club:'Bohemians'
                    },
                    {
                        id: 19,
                        name: 'Dean Casey',
                        position: 'MF',
                        dob: '15/12/98',
                        club:'Bohemians'
                    },
                    {
                        id: 20,
                        name: 'Warren O\'Hora',
                        position: 'DF',
                        dob: '19/04/99',
                        club:'Bohemians'
                    },
                    {
                        id: 21,
                        name: 'George Poynton',
                        position: 'MF',
                        dob: '08/09/97',
                        club:'Bohemians'
                    },
                    {
                        id: 22,
                        name: 'Dominic Peppard',
                        position: 'MF',
                        dob: '17/02/99',
                        club:'Bohemians'
                    },
                    {
                        id: 23,
                        name: 'Cian Clarke',
                        position: 'GK',
                        dob: '05/09/01',
                        club:'Bohemians'
                    },
                    {
                        id: 24,
                        name: 'Ismahil Akinade',
                        position: 'FW',
                        dob: '11/02/94',
                        club:'Bohemians'
                    },
                    {
                        id: 25,
                        name: 'Greg Murray',
                        position: 'GK',
                        dob: '30/08/93',
                        club:'Bohemians'
                    }
                ]
            }, 
            {
                id: 2, 
                image: 'images/bray.jpg',
                founded: '1942', 
                club:'Bray Wanderers', 
                location:'Bray, Co. Wicklow', 
                stadium: 'Carlisle Grounds',
                capacity: '7,000',
                manager: 'Harry Kenny',
                players: [
                   {
                        id: 1,
                        name: 'Peter Cherrie',
                        position: 'GK',
                        dob: '01/10/83',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 2,
                        name: 'Hugh Douglas',
                        position: 'DF',
                        dob: '22/06/93',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 3,
                        name: 'John Sullivan',
                        position: 'MF',
                        dob: '06/01/91',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 4,
                        name: 'Conor Kenna',
                        position: 'DF',
                        dob: '21/08/84',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 5,
                        name: 'Derek Foran',
                        position: 'DF',
                        dob: '09/10/89',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 6,
                        name: 'Keith Buckley',
                        position: 'MF',
                        dob: '17/06/92',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 7,
                        name: 'Ryan Brennan',
                        position: 'MF',
                        dob: '11/11/91',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 8,
                        name: 'Mark Salmon',
                        position: 'MF',
                        dob: '31/10/88',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 9,
                        name: 'Aaron Greene',
                        position: 'MF',
                        dob: '02/01/90',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 10,
                        name: 'Karl Moore',
                        position: 'MF',
                        dob: '09/11/88',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 11,
                        name: 'Gary McCabe',
                        position: 'MF',
                        dob: '01/08/88',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 12,
                        name: 'Conor Earley',
                        position: 'MF',
                        dob: '28/05/93',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 14,
                        name: 'Jamie Aherne',
                        position: 'FW',
                        dob: '09/05/95',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 15,
                        name: 'Alan Kehoe',
                        position: 'DF',
                        dob: '12/04/96',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 16,
                        name: 'Dylan Connolly',
                        position: 'MF',
                        dob: '22/05/95',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 17,
                        name: 'Ger Pender',
                        position: 'FW',
                        dob: '22/05/94',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 18,
                        name: 'Calvin Rogers',
                        position: 'DF',
                        dob: '10/05/97',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 19,
                        name: 'Kevin Lynch',
                        position: 'MF',
                        dob: '21/03/92',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 20,
                        name: 'Anthony Flood',
                        position: 'FW',
                        dob: '31/12/84',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 21,
                        name: 'Tim Clancy',
                        position: 'DF',
                        dob: '08/04/84',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 22,
                        name: 'Darragh Noone',
                        position: 'MF',
                        dob: '28/04/97',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 23,
                        name: 'Jason Marks',
                        position: 'DF',
                        dob: '02/05/89',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 24,
                        name: 'Ryan Robinson',
                        position: 'DF',
                        dob: '06/03/98',
                        club:'Bray Wanderers'
                    },
                    {
                        id: 93,
                        name: 'Lee Steacy',
                        position: 'GK',
                        dob: '18/01/93',
                        club:'Bray Wanderers'
                    }
                ]
            }, 
            {
                id: 3, 
                image: 'images/cork.jpg',
                founded: '1984', 
                club:'Cork City', 
                location:'Cork', 
                stadium: 'Turners Cross',
                capacity: '7,500',
                manager: 'John Caulfield',
                players: [
                    {
                        id: 1,
                        name: 'Mark McNulty',
                        position: 'GK',
                        dob: '13/10/80',
                        club:'Cork City'
                    },
                    {
                        id: 2,
                        name: 'John Kavanagh',
                        position: 'DF',
                        dob: '19/07/94',
                        club:'Cork City'
                    },
                    {
                        id: 3,
                        name: 'Alan Bennett',
                        position: 'DF',
                        dob: '04/10/81',
                        club:'Cork City'
                    },
                    {
                        id: 4,
                        name: 'John Dunleavy',
                        position: 'DF',
                        dob: '03/07/91',
                        club:'Cork City'
                    },
                    {
                        id: 5,
                        name: 'Ryan Delaney',
                        position: 'DF',
                        dob: '06/09/96',
                        club:'Cork City'
                    },
                    {
                        id: 6,
                        name: 'Greg Bolger',
                        position: 'MF',
                        dob: '09/09/88',
                        club:'Cork City'
                    },
                    {
                        id: 7,
                        name: 'Jimmy Keohane',
                        position: 'MF',
                        dob: '22/01/91',
                        club:'Cork City'
                    },
                    {
                        id: 8,
                        name: 'Conor McCormack',
                        position: 'MF',
                        dob: '18/05/90',
                        club:'Cork City'
                    },
                    {
                        id: 9,
                        name: 'Achille Campion',
                        position: 'FW',
                        dob: '03/10/90',
                        club:'Cork City'
                    },
                    {
                        id: 10,
                        name: 'Steven Beattie',
                        position: 'MF',
                        dob: '20/08/88',
                        club:'Cork City'
                    },
                    {
                        id: 11,
                        name: 'Stephen Dooley',
                        position: 'MF',
                        dob: '19/10/91',
                        club:'Cork City'
                    },
                    {
                        id: 14,
                        name: 'Kevin O\'Connor',
                        position: 'MF',
                        dob: '07/05/95',
                        club:'Cork City'
                    },
                    {
                        id: 15,
                        name: 'Christian Nanetti',
                        position: 'MF',
                        dob: '13/10/96',
                        club:'Cork City'
                    },
                    {
                        id: 16,
                        name: 'Gearóid Morrissey',
                        position: 'MF',
                        dob: '17/11/91',
                        club:'Cork City'
                    },
                    {
                        id: 17,
                        name: 'Connor Ellis',
                        position: 'FW',
                        dob: '12/05/97',
                        club:'Cork City'
                    },
                    {
                        id: 18,
                        name: 'Rimvydas Sadauskas',
                        position: 'DF',
                        dob: '13/12/97',
                        club:'Cork City'
                    },
                    {
                        id: 19,
                        name: 'Karl Sheppard',
                        position: 'FW',
                        dob: '14/02/91',
                        club:'Cork City'
                    },
                    {
                        id: 20,
                        name: 'Shane Griffin',
                        position: 'DF',
                        dob: '08/09/94',
                        club:'Cork City'
                    },
                    {
                        id: 21,
                        name: 'Conor McCarthy',
                        position: 'DF',
                        dob: '03/03/97',
                        club:'Cork City'
                    },
                    {
                        id: 24,
                        name: 'Seán Maguire',
                        position: 'FW',
                        dob: '01/05/94',
                        club:'Cork City'
                    },
                    {
                        id: 25,
                        name: 'Alan Smith',
                        position: 'GK',
                        dob: '25/05/93',
                        club:'Cork City'
                    },
                    {
                        id: 26,
                        name: 'Garry Buckley',
                        position: 'DF',
                        dob: '19/08/93',
                        club:'Cork City'
                    },
                    {
                        id: 30,
                        name: 'Garan Manley',
                        position: 'MF',
                        dob: '19/10/96',
                        club:'Cork City'
                    }
                ]
            }, 
            {
                id: 4, 
                image: 'images/derry.jpg',
                founded: '1928', 
                club:'Derry City', 
                location:'Derry, Northern Ireland', 
                stadium: 'Brandywell Stadium',
                capacity: '7,700',
                manager: 'Kenny Shiels',
                players: [
                    {
                        id: 1,
                        name: 'Gerard Doherty',
                        position: 'GK',
                        dob: '24/08/81', 
                        club:'Derry City'
                    },
                    {
                        id: 2,
                        name: 'Conor McDermott',
                        position: 'MF',
                        dob: '18/09/97', 
                        club:'Derry City'
                    },
                    {
                        id: 3,
                        name: 'Dean Jarvis',
                        position: 'DF',
                        dob: '01/06/92', 
                        club:'Derry City'
                    },
                    {
                        id: 4,
                        name: 'Aaron McEneff',
                        position: 'MF',
                        dob: '09/07/95', 
                        club:'Derry City'
                    },
                    {
                        id: 6,
                        name: 'Nicky Low',
                        position: 'MF',
                        dob: '06/01/92', 
                        club:'Derry City'
                    },
                    {
                        id: 7,
                        name: 'Barry McNamee',
                        position: 'MF',
                        dob: '17/02/92', 
                        club:'Derry City'
                    },
                    {
                        id: 8,
                        name: 'Harry Monaghan',
                        position: 'MF',
                        dob: '24/03/93', 
                        club:'Derry City'
                    },
                    {
                        id: 9,
                        name: 'Ronan Curtis',
                        position: 'FW',
                        dob: '29/03/96', 
                        club:'Derry City'
                    },
                    {
                        id: 10,
                        name: 'Joshua Daniels',
                        position: 'MF',
                        dob: '22/02/99', 
                        club:'Derry City'
                    },
                    {
                        id: 11,
                        name: 'Rory Patterson',
                        position: 'FW',
                        dob: '16/07/84', 
                        club:'Derry City'
                    },
                    {
                        id: 13,
                        name: 'Batmunkh Dulguun',
                        position: 'FW',
                        dob: '19/10/96', 
                        club:'Derry City'
                    },
                    {
                        id: 14,
                        name: 'Rory Holden',
                        position: 'FW',
                        dob: '23/08/97', 
                        club:'Derry City'
                    },
                    {
                        id: 16,
                        name: 'Nathan Boyle',
                        position: 'FW',
                        dob: '14/04/94', 
                        club:'Derry City'
                    },
                    {
                        id: 17,
                        name: 'Cathal Farren',
                        position: 'FW',
                        dob: '26/07/95', 
                        club:'Derry City'
                    },
                    {
                        id: 19,
                        name: 'Mark Timlin',
                        position: 'MF',
                        dob: '17/11/94', 
                        club:'Derry City'
                    },
                    {
                        id: 22,
                        name: 'Sam Todd',
                        position: 'DF',
                        dob: '01/03/96', 
                        club:'Derry City'
                    },
                    {
                        id: 23,
                        name: 'Ben Doherty',
                        position: 'DF',
                        dob: '24/03/97', 
                        club:'Derry City'
                    },
                    {
                        id: 24,
                        name: 'Scott Whiteside',
                        position: 'DF',
                        dob: '16/06/97', 
                        club:'Derry City'
                    },
                    {
                        id: 27,
                        name: 'Alon Netzer',
                        position: 'DF',
                        dob: '19/02/94', 
                        club:'Derry City'
                    },
                    {
                        id: 29,
                        name: 'Lukas Schubert',
                        position: 'MF',
                        dob: '25/06/89', 
                        club:'Derry City'
                    },
                    {
                        id: 30,
                        name: 'Aaron Barry',
                        position: 'DF',
                        dob: '24/11/92', 
                        club:'Derry City'
                    },
                    {
                        id: 31,
                        name: 'Mikhail Kennedy',
                        position: 'FW',
                        dob: '06/10/96', 
                        club:'Derry City'
                    }
                ]
            },
            {
                id: 5, 
                image: 'images/drogs.jpg',
                founded: '1919', 
                club:'Drogheda United', 
                location:'Drogheda, Co Louth', 
                stadium: 'United Park',
                capacity: '2,000',
                manager: 'Pete Mahon',
                players: [
                    {
                        id: 1,
                        name: 'Stephen McGuinness',
                        position: 'GK',
                        dob: '10/03/95', 
                        club:'Drogheda United'
                    },
                    {
                        id: 2,
                        name: 'Colm Deasy',
                        position: 'DF',
                        dob: '04/01/97', 
                        club:'Drogheda United'
                    },
                    {
                        id: 3,
                        name: 'Stephen Dunne',
                        position: 'DF',
                        dob: '12/09/95', 
                        club:'Drogheda United'
                    },
                    {
                        id: 4,
                        name: 'Kevin Farragher',
                        position: 'DF',
                        dob: '27/06/93', 
                        club:'Drogheda United'
                    },
                    {
                        id: 5,
                        name: 'Lloyd Buckley',
                        position: 'DF',
                        dob: '29/02/96', 
                        club:'Drogheda United'
                    },
                    {
                        id: 6,
                        name: 'Jake Hyland',
                        position: 'MF',
                        dob: '10/08/95', 
                        club:'Drogheda United'
                    },
                    {
                        id: 7,
                        name: 'Marc Griffin',
                        position: 'FW',
                        dob: '16/06/91', 
                        club:'Drogheda United'
                    },
                    {
                        id: 8,
                        name: 'Killian Brennan',
                        position: 'MF',
                        dob: '16/10/91', 
                        club:'Drogheda United'
                    },
                    {
                        id: 9,
                        name: 'Seán Brennan',
                        position: 'MF',
                        dob: '06/11/90', 
                        club:'Drogheda United'
                    },
                    {
                        id: 10,
                        name: 'Seán Thornton',
                        position: 'MF',
                        dob: '18/05/83', 
                        club:'Drogheda United'
                    },
                    {
                        id: 11,
                        name: 'Gavin Brennan',
                        position: 'MF',
                        dob: '23/01/88', 
                        club:'Drogheda United'
                    },
                    {
                        id: 12,
                        name: 'Luke Gallagher',
                        position: 'MF',
                        dob: '29/07/94', 
                        club:'Drogheda United'
                    },
                    {
                        id: 14,
                        name: 'Adam Wixted',
                        position: 'MF',
                        dob: '08/03/95', 
                        club:'Drogheda United'
                    },
                    {
                        id: 15,
                        name: 'Ciarán McGuigan',
                        position: 'DF',
                        dob: '08/12/89', 
                        club:'Drogheda United'
                    },
                    {
                        id: 16,
                        name: 'Gareth McCaffrey',
                        position: 'MF',
                        dob: '26/01/96', 
                        club:'Drogheda United'
                    },
                    {
                        id: 17,
                        name: 'Thomas Byrne',
                        position: 'FW',
                        dob: '26/01/99', 
                        club:'Drogheda United'
                    },
                    {
                        id: 18,
                        name: 'Conor Kane',
                        position: 'DF',
                        dob: '02/10/98', 
                        club:'Drogheda United'
                    },
                    {
                        id: 19,
                        name: 'Mark Doyle',
                        position: 'FW',
                        dob: '06/10/95', 
                        club:'Drogheda United'
                    },
                    {
                        id: 20,
                        name: 'Eoghan Dempsey',
                        position: 'DF',
                        dob: '15/04/97', 
                        club:'Drogheda United'
                    },
                    {
                        id: 21,
                        name: 'Jamie Hollywood',
                        position: 'MF',
                        dob: '30/06/97', 
                        club:'Drogheda United'
                    },
                    {
                        id: 22,
                        name: 'Stephen Elliott',
                        position: 'FW',
                        dob: '06/01/84', 
                        club:'Drogheda United'
                    },
                    {
                        id: 23,
                        name: 'Dylan Sweeney',
                        position: 'GK',
                        dob: '06/11/93', 
                        club:'Drogheda United'
                    },
                    {
                        id: 24,
                        name: 'Richie Purdy',
                        position: 'MF',
                        dob: '16/06/97', 
                        club:'Drogheda United'
                    },
                    {
                        id: 27,
                        name: 'Ryan McEvoy',
                        position: 'MF',
                        dob: '06/01/94', 
                        club:'Drogheda United'
                    },
                    {
                        id: 28,
                        name: 'Shane Elworthy',
                        position: 'MF',
                        dob: '06/10/96', 
                        club:'Drogheda United'
                    },
                    {
                        id: 32,
                        name: 'Jamie Hickey',
                        position: 'GK',
                        dob: '27/07/98', 
                        club:'Drogheda United'
                    },
                    {
                        id: 33,
                        name: 'Lee Partridge',
                        position: 'FW',
                        dob: '09/02/91', 
                        club:'Drogheda United'
                    },
                    {
                        id: 34,
                        name: 'Nathan Seery',
                        position: 'MF',
                        dob: '26/10/96', 
                        club:'Drogheda United'
                    }
                ]
            },
            {
                id: 6, 
                image: 'images/dundalk.jpg',
                founded: '1903', 
                club:'Dundalk', 
                location:'Dundalk, Co Louth', 
                stadium: 'Oriel Park',
                capacity: '4,500',
                manager: 'Stephen Kenny',
                players: [
                    {
                        id: 1,
                        name: 'Gary Rogers',
                        position: 'GK',
                        dob: '25/09/81',
                        club:'Dundalk'
                    },
                    {
                        id: 2,
                        name: 'Sean Gannon',
                        position: 'DF',
                        dob: '11/07/91',
                        club:'Dundalk'
                    },
                    {
                        id: 3,
                        name: 'Brian Gartland',
                        position: 'DF',
                        dob: '04/11/86',
                        club:'Dundalk'
                    },
                    {
                        id: 4,
                        name: 'Paddy Barrett',
                        position: 'DF',
                        dob: '22/07/93',
                        club:'Dundalk'
                    },
                    {
                        id: 5,
                        name: 'Chris Shields',
                        position: 'MF',
                        dob: '27/12/90',
                        club:'Dundalk'
                    },
                    {
                        id: 6,
                        name: 'Stephen O\'Donnell',
                        position: 'MF',
                        dob: '15/01/86',
                        club:'Dundalk'
                    },
                    {
                        id: 7,
                        name: 'Michael Duffy',
                        position: 'MF',
                        dob: '28/07/94',
                        club:'Dundalk'
                    },
                    {
                        id: 8,
                        name: 'John Mountney',
                        position: 'MF',
                        dob: '22/02/93',
                        club:'Dundalk'
                    },
                    {
                        id: 9,
                        name: 'David McMillan',
                        position: 'FW',
                        dob: '14/12/88',
                        club:'Dundalk'
                    },
                    {
                        id: 10,
                        name: 'Jamie McGrath',
                        position: 'MF',
                        dob: '30/09/96',
                        club:'Dundalk'
                    },
                    {
                        id: 11,
                        name: 'Patrick McEleney',
                        position: 'FW',
                        dob: '26/09/92',
                        club:'Dundalk'
                    },
                    {
                        id: 12,
                        name: 'Shane Grimes',
                        position: 'DF',
                        dob: '26/10/96',
                        club:'Dundalk'
                    },
                    {
                        id: 14,
                        name: 'Dane Massey',
                        position: 'DF',
                        dob: '17/04/88',
                        club:'Dundalk'
                    },
                    {
                        id: 15,
                        name: 'Seán Hoare',
                        position: 'DF',
                        dob: '15/03/94',
                        club:'Dundalk'
                    },
                    {
                        id: 16,
                        name: 'Ciarán Kilduff',
                        position: 'FW',
                        dob: '29/09/88',
                        club:'Dundalk'
                    },
                    {
                        id: 17,
                        name: 'Thomas Byrne',
                        position: 'FW',
                        dob: '16/03/96',
                        club:'Dundalk'
                    },
                    {
                        id: 18,
                        name: 'Robbie Benson',
                        position: 'MF',
                        dob: '07/05/92',
                        club:'Dundalk'
                    },
                    {
                        id: 19,
                        name: 'Niclas Vemmelund',
                        position: 'DF',
                        dob: '02/10/92',
                        club:'Dundalk'
                    },
                    {
                        id: 20,
                        name: 'Eoghan Dempsey',
                        position: 'DF',
                        dob: '26/11/95',
                        club:'Dundalk'
                    },
                    {
                        id: 21,
                        name: 'Conor Clifford',
                        position: 'MF',
                        dob: '01/10/91',
                        club:'Dundalk'
                    },
                    {
                        id: 22,
                        name: 'Gabriel Sava',
                        position: 'GK',
                        dob: '15/10/86',
                        club:'Dundalk'
                    },
                    {
                        id: 23,
                        name: 'Keith Dalton',
                        position: 'MF',
                        dob: '10/09/97',
                        club:'Dundalk'
                    },
                    {
                        id: 24,
                        name: 'Steven Kinsella',
                        position: 'MF',
                        dob: '22/08/98',
                        club:'Dundalk'
                    },
                    {
                        id: 25,
                        name: 'Carlton Ubaezuono',
                        position: 'MF',
                        dob: '22/04/98',
                        club:'Dundalk'
                    },
                    {
                        id: 26,
                        name: 'Thomas Stewart',
                        position: 'FW',
                        dob: '26/10/87',
                        club:'Dundalk'
                    },
                    {
                        id: 30,
                        name: 'Ben Kelly',
                        position: 'GK',
                        dob: '26/07/97',
                        club:'Dundalk'
                    }
                ]
            },
            {
                id: 7, 
                image: 'images/harps.jpg',
                founded: '1954', 
                club:'Finn Harps', 
                location:'Ballybofey, Co Donegal', 
                stadium: 'Finn Park',
                capacity: '6,000',
                manager: 'Ollie Horgan',
                players: [
                    {
                        id: 1,
                        name: 'Ciarán Gallagher',
                        position: 'GK',
                        dob: '01/04/92',
                        club:'Finn Harps'
                    },
                    {
                        id: 2,
                        name: 'Damien McNulty',
                        position: 'DF',
                        dob: '10/02/91',
                        club:'Finn Harps'
                    },
                    {
                        id: 3,
                        name: 'Ciarán Coll',
                        position: 'DF',
                        dob: '19/08/91',
                        club:'Finn Harps'
                    },
                    {
                        id: 4,
                        name: 'Killian Cantwell',
                        position: 'DF',
                        dob: '24/05/95',
                        club:'Finn Harps'
                    },
                    {
                        id: 5,
                        name: 'Packie Mailey',
                        position: 'DF',
                        dob: '18/04/88',
                        club:'Finn Harps'
                    },
                    {
                        id: 6,
                        name: 'Gareth Harkin',
                        position: 'MF',
                        dob: '19/12/87',
                        club:'Finn Harps'
                    },
                    {
                        id: 7,
                        name: 'Michael Funston',
                        position: 'MF',
                        dob: '15/05/85',
                        club:'Finn Harps'
                    },
                    {
                        id: 8,
                        name: 'Jonny Bonner',
                        position: 'MF',
                        dob: '09/07/91',
                        club:'Finn Harps'
                    },
                    {
                        id: 9,
                        name: 'Danny Morrissey',
                        position: 'FW',
                        dob: '13/12/93',
                        club:'Finn Harps'
                    },
                    {
                        id: 10,
                        name: 'Ciarán O\'Connor',
                        position: 'FW',
                        dob: '04/07/96',
                        club:'Finn Harps'
                    },
                    {
                        id: 11,
                        name: 'Caolan McAleer',
                        position: 'MF',
                        dob: '19/08/93',
                        club:'Finn Harps'
                    },
                    {
                        id: 12,
                        name: 'Ciarán Kelly',
                        position: 'DF',
                        dob: '10/09/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 14,
                        name: 'Thomas McMonagle',
                        position: 'DF',
                        dob: '19/10/90',
                        club:'Finn Harps'
                    },
                    {
                        id: 16,
                        name: 'Seán Houston',
                        position: 'MF',
                        dob: '29/10/89',
                        club:'Finn Harps'
                    },
                    {
                        id: 17,
                        name: 'BJ Banda',
                        position: 'FW',
                        dob: '12/09/91',
                        club:'Finn Harps'
                    },
                    {
                        id: 18,
                        name: 'Kealan McDermott',
                        position: 'MF',
                        dob: '23/04/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 19,
                        name: 'Barry Molloy',
                        position: 'MF',
                        dob: '28/11/83',
                        club:'Finn Harps'
                    },
                    {
                        id: 20,
                        name: 'Paddy McCourt',
                        position: 'FW',
                        dob: '10/02/85',
                        club:'Finn Harps'
                    },
                    {
                        id: 21,
                        name: 'Lee McCarron',
                        position: 'GK',
                        dob: '10/09/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 22,
                        name: 'Ethan Boyle',
                        position: 'MF',
                        dob: '04/01/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 23,
                        name: 'Gareth Doherty',
                        position: 'MF',
                        dob: '10/09/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 25,
                        name: 'Simon McGlynn',
                        position: 'MF',
                        dob: '30/05/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 26,
                        name: 'Harry Doherty',
                        position: 'GK',
                        dob: '29/03/96',
                        club:'Finn Harps'
                    },
                    {
                        id: 30,
                        name: 'Dylan McCroary',
                        position: 'FW',
                        dob: '10/09/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 33,
                        name: 'Nathan Clifford',
                        position: 'MF',
                        dob: '09/07/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 35,
                        name: 'Oisin Hassett',
                        position: 'MF',
                        dob: '13/02/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 36,
                        name: 'Shane Blaney',
                        position: 'DF',
                        dob: '10/09/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 37,
                        name: 'Daire O\'Baoill',
                        position: 'DF',
                        dob: '29/10/97',
                        club:'Finn Harps'
                    },
                    {
                        id: 99,
                        name: 'Eddie Dsane',
                        position: 'FW',
                        dob: '10/09/92',
                        club:'Finn Harps'
                    }
                ]
            },
            {
                id: 8, 
                image: 'images/galway.jpg',
                founded: '1937', 
                club:'Galway United', 
                location:'Galway', 
                stadium: 'Eamonn Deacy Park',
                capacity: '5,000',
                manager: 'Shane Keegan',
                players: [
                     {
                        id: 1,
                        name: 'Conor Winn',
                        position: 'GK',
                        dob: '26/02/92',
                        club:'Galway United'
                    },
                    {
                        id: 2,
                        name: 'Colm Horgan',
                        position: 'DF',
                        dob: '02/07/94',
                        club:'Galway United'
                    },
                    {
                        id: 3,
                        name: 'Marc Ludden',
                        position: 'DF',
                        dob: '10/09/97',
                        club:'Galway United'
                    },
                    {
                        id: 4,
                        name: 'Paul Sinnott',
                        position: 'DF',
                        dob: '24/07/86',
                        club:'Galway United'
                    },
                    {
                        id: 5,
                        name: 'Lee Grace',
                        position: 'DF',
                        dob: '01/12/92',
                        club:'Galway United'
                    },
                    {
                        id: 6,
                        name: 'Alex Byrne',
                        position: 'MF',
                        dob: '08/03/95',
                        club:'Galway United'
                    },
                    {
                        id: 7,
                        name: 'Gavan Holohan',
                        position: 'MF',
                        dob: '15/12/91',
                        club:'Galway United'
                    },
                    {
                        id: 8,
                        name: 'David Cawley',
                        position: 'MF',
                        dob: '17/09/91',
                        club:'Galway United'
                    },
                    {
                        id: 9,
                        name: 'Pádraic Cunningham',
                        position: 'FW',
                        dob: '13/11/96',
                        club:'Galway United'
                    },
                    {
                        id: 10,
                        name: 'Vinny Faherty',
                        position: 'FW',
                        dob: '13/07/87',
                        club:'Galway United'
                    },
                    {
                        id: 11,
                        name: 'Conor Melody',
                        position: 'MF',
                        dob: '15/03/97',
                        club:'Galway United'
                    },
                    {
                        id: 12,
                        name: 'Maurice Nugent',
                        position: 'DF',
                        dob: '10/09/96',
                        club:'Galway United'
                    },
                    {
                        id: 13,
                        name: 'Aaron Conway',
                        position: 'DF',
                        dob: '07/12/97',
                        club:'Galway United'
                    },
                    {
                        id: 14,
                        name: 'Kevin Devaney',
                        position: 'MF',
                        dob: '26/09/90',
                        club:'Galway United'
                    },
                    {
                        id: 15,
                        name: 'Robert Spelman',
                        position: 'MF',
                        dob: '01/09/97',
                        club:'Galway United'
                    },
                    {
                        id: 16,
                        name: 'Ciaran Nugent',
                        position: 'GK',
                        dob: '27/10/91',
                        club:'Galway United'
                    },
                    {
                        id: 17,
                        name: 'Gary Shanahan',
                        position: 'MF',
                        dob: '15/02/93',
                        club:'Galway United'
                    },
                    {
                        id: 18,
                        name: 'Jesse Devers',
                        position: 'FW',
                        dob: '11/01/97',
                        club:'Galway United'
                    },
                    {
                        id: 19,
                        name: 'Ronan Murray',
                        position: 'FW',
                        dob: '10/09/97',
                        club:'Galway United'
                    },
                    {
                        id: 20,
                        name: 'Declan Sharkey',
                        position: 'MF',
                        dob: '28/04/98',
                        club:'Galway United'
                    },
                    {
                        id: 21,
                        name: 'Gary Kinneen',
                        position: 'DF',
                        dob: '01/07/97',
                        club:'Galway United'
                    },
                    {
                        id: 57,
                        name: 'Stephen Folan',
                        position: 'DF',
                        dob: '14/01/92',
                        club:'Galway United'
                    }
                ]
            },
            {
                id: 9, 
                image: 'images/limerick.jpg',
                founded: '1937', 
                club:'Limerick', 
                location:'Limerick', 
                stadium: 'Markets Field',
                capacity: '5,000',
                manager: 'Martin Russell',
                players: [
                    {
                        id: 1,
                        name: 'Freddy Hall',
                        position: 'GK',
                        dob: '03/03/85',
                        club:'Limerick'
                    },
                    {
                        id: 2,
                        name: 'Shaun Kelly',
                        position: 'DF',
                        dob: '09/03/89',
                        club:'Limerick'
                    },
                    {
                        id: 3,
                        name: 'Robbie Williams',
                        position: 'DF',
                        dob: '02/10/84',
                        club:'Limerick'
                    },
                    {
                        id: 5,
                        name: 'David O\'Connor',
                        position: 'DF', 
                        dob: '24/08/91',
                        club:'Limerick'
                    },
                    {
                        id: 6,
                        name: 'Paul O\'Conor',
                        position: 'MF',
                        dob: '10/08/87',
                        club:'Limerick'
                    },
                    {
                        id: 7,
                        name: 'Lee Lynch',
                        position: 'MF',
                        dob: '27/11/91',
                        club:'Limerick'
                    },
                    {
                        id: 8,
                        name: 'Shane Duggan',
                        position: 'MF',
                        dob: '11/03/89',
                        club:'Limerick'
                    },
                    {
                        id: 9,
                        name: 'John O\'Flynn',
                        position: 'FW',
                        dob: '11/07/82',
                        club:'Limerick'
                    },
                    {
                        id: 10,
                        name: 'Rodrigo Tosi',
                        position: 'FW',
                        dob: '06/01/83',
                        club:'Limerick'
                    },
                    {
                        id: 11,
                        name: 'Shane Tracy',
                        position: 'DF',
                        dob: '14/09/88',
                        club:'Limerick'
                    },
                    {
                        id: 12,
                        name: 'Garbhán Coughlan',
                        position: 'FW',
                        dob: '24/01/93',
                        club:'Limerick'
                    },
                    {
                        id: 14,
                        name: 'Ian Turner',
                        position: 'MF',
                        dob: '19/04/89',
                        club:'Limerick'
                    },
                    {
                        id: 15,
                        name: 'Tony Whitehead',
                        position: 'DF',
                        dob: '22/12/95',
                        club:'Limerick'
                    },
                    {
                        id: 16,
                        name: 'Stephen Kenny',
                        position: 'MF',
                        dob: '14/05/93',
                        club:'Limerick'
                    },
                    {
                        id: 18,
                        name: 'Dean Clarke',
                        position: 'FW',
                        dob: '18/01/91',
                        club:'Limerick'
                    },
                    {
                        id: 19,
                        name: 'Tommy Robson',
                        position: 'DF',
                        dob: '09/01/91',
                        club:'Limerick'
                    },
                    {
                        id: 20,
                        name: 'Chris Mulhall',
                        position: 'MF',
                        dob: '09/02/88',
                        club:'Limerick'
                    },
                    {
                        id: 21,
                        name: 'Chiedoze Ogbene',
                        position: 'MF',
                        dob: '01/05/97',
                        club:'Limerick'
                    },
                    {
                        id: 22,
                        name: 'Clyde O\'Connell',
                        position: 'MF',
                        dob: '14/07/92',
                        club:'Limerick'
                    },
                    {
                        id: 23,
                        name: 'Keith Dalton',
                        position: 'MF',
                        dob: '14/05/93',
                        club:'Limerick'
                    },
                    {
                        id: 26,
                        name: 'Brendan Clarke',
                        position: 'GK',
                        dob: '17/09/85',
                        club:'Limerick'
                    },
                    {
                        id: 28,
                        name: 'Barry Cotter',
                        position: 'DF',
                        dob: '04/12/98',
                        club:'Limerick'
                    },
                    {
                        id: 25,
                        name: 'Alan Murphy',
                        position: 'DF', 
                        dob: '13/02/98',
                        club:'Limerick'
                    },
                    {
                        id: 31,
                        name: 'Tobias Kainz',
                        position: 'DF',
                        dob: '14/01/92',
                        club:'Limerick'
                    },
                    {
                        id: 32,
                        name: 'Bastien Héry',
                        position: 'MF',
                        dob: '23/03/92',
                        club:'Limerick'
                    },
                    {
                        id: 33,
                        name: 'Colm Walsh-O\'Loughlin',
                        position: 'MF',
                        dob: '12/04/99',
                        club:'Limerick'
                    },
                    {
                        id: 34,
                        name: 'William Fitzgerald',
                        position: 'MF',
                        dob: '19/05/99',
                        club:'Limerick'
                    }
                ]
            },
            {
                id: 10, 
                image: 'images/stpats.jpg',
                founded: '1929', 
                club:'Saint Patrick\'s Athletic', 
                location:'Inchicore, Dublin 8', 
                stadium: 'Richmond Park',
                capacity: '5,350',
                manager: 'Liam Buckley',
                players: [
                    {
                        id: 1,
                        name: 'Conor O\'Malley',
                        position: 'GK',
                        dob: '01/08/94',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 2,
                        name: 'Michael Barker',
                        position: 'DF', 
                        dob: '16/08/93',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 3,
                        name: 'Ian Bermingham',
                        position: 'DF', 
                        dob: '16/06/89',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 4,
                        name: 'Gavin Peers',
                        position: 'DF',
                        dob: '10/11/85',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 5,
                        name: 'Darren Dennehy',
                        position: 'DF',
                        dob: '21/09/88',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 6,
                        name: 'Pat Cregg',
                        position: 'MF',
                        dob: '21/02/86',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 7,
                        name: 'Conan Byrne',
                        position: 'MF', 
                        dob: '10/07/85',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 8,
                        name: 'Graham Kelly',
                        position: 'MF', 
                        dob: '31/10/91',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 9,
                        name: 'Chris Fagan',
                        position: 'FW',
                        dob: '11/05/89',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 10,
                        name: 'Sam Verdon',
                        position: 'FW',
                        dob: '03/09/95',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 11,
                        name: 'Jonathan Lunney',
                        position: 'MF',
                        dob: '02/02/98',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 12,
                        name: 'Lee Desmond',
                        position: 'DF',
                        dob: '22/01/95',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 13,
                        name: 'Rory Feely',
                        position: 'DF',
                        dob: '03/01/97',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 14,
                        name: 'Darragh Markey',
                        position: 'MF',
                        dob: '23/05/97',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 15,
                        name: 'Jack Bayly',
                        position: 'MF',
                        dob: '18/06/96',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 16,
                        name: 'Barry Murphy',
                        position: 'GK',
                        dob: '08/06/85',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 17,
                        name: 'Ciaran Kelly',
                        position: 'DF',
                        dob: '23/03/92',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 18,
                        name: 'Kurtis Byrne',
                        position: 'FW',
                        dob: '09/04/90',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 19,
                        name: 'Steven Grogan',
                        position: 'MF',
                        dob: '23/03/92',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 20,
                        name: 'Billy Dennehy',
                        position: 'MF',
                        dob: '17/02/87',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 22,
                        name: 'Ger O\'Brien',
                        position: 'DF',
                        dob: '02/07/84',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 23,
                        name: 'Alex O\'Hanlon',
                        position: 'MF',
                        dob: '24/04/96',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 24,
                        name: 'Aidan Keena',
                        position: 'FW',
                        dob: '25/04/99',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 28,
                        name: 'Barry Cotter',
                        position: 'DF',
                        dob: '13/03/93',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 25,
                        name: 'Pat Jennings',
                        position: 'GK',
                        dob: '23/08/83',
                        club:'Saint Patrick\'s Athletic'
                    },
                    {
                        id: 26,
                        name: 'Josh O\'Hanlon',
                        position: 'FW',
                        dob: '23/03/92',
                        club:'Saint Patrick\'s Athletic'
                    }
                ]
            },
            {
                id: 11, 
                image: 'images/rovers.jpg',
                founded: '1899', 
                club:'Shamrock Rovers', 
                location:'Tallaght, Dublin 24', 
                stadium: 'Tallaght Stadium',
                capacity: '6,000',
                manager: 'Stephen Bradley',
                players: [
                    {
                        id: 1,
                        name: 'Tomer Chencinski',
                        position: 'GK',
                        dob: '01/12/84',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 2,
                        name: 'Shane Hanney',
                        position: 'MF',
                        dob: '19/02/98',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 3,
                        name: 'Luke Byrne',
                        position: 'DF',
                        dob: '08/07/93',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 4,
                        name: 'David Webster',
                        position: 'DF',
                        dob: '09/08/89',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 6,
                        name: 'Roberto Lopes',
                        position: 'MF',
                        dob: '17/06/92',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 7,
                        name: 'Ryan Connolly',
                        position: 'MF',
                        dob: '13/01/92',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 8,
                        name: 'Ronan Finn',
                        position: 'MF',
                        dob: '21/12/87',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 9,
                        name: 'Michael O\'Connor',
                        position: 'FW',
                        dob: '31/07/98',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 10,
                        name: 'Brandon Miele',
                        position: 'MF',
                        dob: '28/08/94',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 11,
                        name: 'Darren Meenan',
                        position: 'MF',
                        dob: '16/11/86',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 14,
                        name: 'Gary Shaw',
                        position: 'FW',
                        dob: '10/05/92',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 15,
                        name: 'Dan Devine',
                        position: 'DF',
                        dob: '23/03/92',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 16,
                        name: 'David McAllister',
                        position: 'MF',
                        dob: '29/12/88',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 17,
                        name: 'Simon Madden',
                        position: 'DF',
                        dob: '01/05/88',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 18,
                        name: 'Paul Corry',
                        position: 'MF',
                        dob: '03/02/91',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 19,
                        name: 'Seán Boyd',
                        position: 'FW',
                        dob: '20/06/98',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 20,
                        name: 'Trevor Clarke',
                        position: 'MF',
                        dob: '26/03/98',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 21,
                        name: 'Aaron Bolger',
                        position: 'MF',
                        dob: '02/02/00',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 22,
                        name: 'James Doona',
                        position: 'MF',
                        dob: '15/01/98',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 23,
                        name: 'Seán Heaney',
                        position: 'DF',
                        dob: '27/01/96',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 24,
                        name: 'Dean Dillon',
                        position: 'MF',
                        dob: '08/06/99',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 25,
                        name: 'Kevin Horgan',
                        position: 'GK',
                        dob: '26/04/97',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 26,
                        name: 'Aaron Dobbs',
                        position: 'MF',
                        dob: '06/01/99',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 27,
                        name: 'Luke Kiely',
                        position: 'MF',
                        dob: '09/06/99',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 28,
                        name: 'Graham Burke',
                        position: 'FW',
                        dob: '02/09/95',
                        club:'Shamrock Rovers'
                    },
                    {
                        id: 29,
                        name: 'Sam Bone',
                        position: 'MF',
                        dob: '23/11/94',
                        club:'Shamrock Rovers'
                    }
                ]
            },
            {
                id: 12, 
                image: 'images/sligo.jpg',
                founded: '1928', 
                club:'Sligo Rovers', 
                location:'Sligo', 
                stadium: 'The Showgrounds',
                capacity: '4,500',
                manager: 'Dave Robertson',
                players: [
                    {
                        id: 1,
                        name: 'Micheál Schlingermann',
                        position: 'GK',
                        dob: '23/06/91',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 2,
                        name: 'Tobi Adebayo-Rowling',
                        position: 'DF',
                        dob: '16/11/96',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 3,
                        name: 'Regan Donelon',
                        position: 'DF',
                        dob: '17/04/96',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 4,
                        name: 'Mick Leahy',
                        position: 'DF',
                        dob: '30/04/89',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 5,
                        name: 'Kyle Callan-McFadden',
                        position: 'DF',
                        dob: '20/04/95',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 6,
                        name: 'Pat McCann',
                        position: 'MF',
                        dob: '26/03/98',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 7,
                        name: 'Daniel Kearns',
                        position: 'MF',
                        dob: '26/08/91',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 8,
                        name: 'Craig Roddan',
                        position: 'MF',
                        dob: '22/04/93',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 9,
                        name: 'Mathew Stevens',
                        position: 'FW',
                        dob: '12/02/98',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 10,
                        name: 'Raffaele Cretaro',
                        position: 'FW',
                        dob: '15/10/81',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 11,
                        name: 'Kieran Sadlier',
                        position: 'MF',
                        dob: '14/09/94',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 12,
                        name: 'Chris Kenny',
                        position: 'MF',
                        dob: '04/05/90',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 14,
                        name: 'Gary Boylan',
                        position: 'DF',
                        dob: '24/04/96',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 16,
                        name: 'Shaun Patton',
                        position: 'GK',
                        dob: '22/08/95',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 18,
                        name: 'John Russell',
                        position: 'MF',
                        dob: '18/05/85',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 19,
                        name: 'Jonah Ayunga',
                        position: 'FW',
                        dob: '24/05/97',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 20,
                        name: 'Gary Armstrong',
                        position: 'MF',
                        dob: '28/01/96',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 23,
                        name: 'Jason Hunt',
                        position: 'DF',
                        dob: '21/03/96',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 24,
                        name: 'Mickey Place',
                        position: 'MF',
                        dob: '09/04/98',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 25,
                        name: 'Oisín Connolly',
                        position: 'DF',
                        dob: '21/01/89',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 26,
                        name: 'Ryan McManus',
                        position: 'MF',
                        dob: '16/02/90',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 27,
                        name: 'Liam Martin',
                        position: 'FW',
                        dob: '23/01/94',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 28,
                        name: 'Mark Hannon',
                        position: 'MF',
                        dob: '04/06/92',
                        club:'Sligo Rovers'
                    },
                    {
                        id: 30,
                        name: 'Edward McGinty',
                        position: 'GK',
                        dob: '05/08/99',
                        club:'Sligo Rovers'
                    }
                ]
            }
        ];