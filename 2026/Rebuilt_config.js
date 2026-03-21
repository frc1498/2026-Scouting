var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true",
      "idx": 0,
      "column": 0
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026 Troy",
      "required": "true",
      "idx": 1,
      "column": 0
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true",
      "idx": 2,
      "column": 0
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true",
      "idx": 3,
      "column": 0
    },
    { "name": "Alliance",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red",
        "b1": "Blue"
      },
      "required":"true",
      "idx": 4,
      "column": 0
    },
    { "name": "Team #1",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999,
      "idx": 5,
      "column": 0
    },
    { "name": "Team #2",
      "code": "t2",
      "type": "team",
      "min": 1,
      "max": 99999,
      "idx": 7,
      "column": 0
    },
    { "name": "Team #3",
      "code": "t3",
      "type": "team",
      "min": 1,
      "max": 99999,
      "idx": 9,
      "column": 0
    }
   
  ],
  "auton": [
    { "name": "1",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "2",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "3",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },

    {"name": "Start Location",
      "code": "sl",
      "type": "radio",
      "choices": {
      "dt": "Depot Trench<br>",
      "db": "Depot Bump<br>",
      "mi": "Middle<br>",
      "ob": "Outpost Bump<br>",
      "ot": "Outpost Trench"
      },
       "idx": 1,
       "column": 0
     },
     {"name": "Start Location",
      "code": "sl2",
      "type": "radio",
      "choices": {
      "dt": "Depot Trench<br>",
      "db": "Depot Bump<br>",
      "mi": "Middle<br>",
      "ob": "Outpost Bump<br>",
      "ot": "Outpost Trench"
      },
       "idx": 1,
       "column": 2
     },
     {"name": "Start Location",
      "code": "sl3",
      "type": "radio",
      "choices": {
      "dt": "Depot Trench<br>",
      "db": "Depot Bump<br>",
      "mi": "Middle<br>",
      "ob": "Outpost Bump<br>",
      "ot": "Outpost Trench"
      },
       "idx": 1,
       "column": 4
     },
    
    { "name": "Pickup from Depot",
      "code": "afd",
      "type": "bool",
      "idx": 2,
      "column": 0
    },
    { "name": "Pickup form Depot",
      "code": "afd2",
      "type": "bool",
      "idx": 2,
      "column": 2
    },
    { "name": "Pickup from Depot",
      "code": "afd3",
      "type": "bool",
      "idx": 2,
      "column": 4
    },
    { "name": "Pickup from Outpost",
      "code": "afo",
      "type": "bool",
      "idx": 3,
      "column": 0
    },
    
    { "name": "Pickup from Outpost",
      "code": "afo2",
      "type": "bool",
      "idx": 3,
      "column": 2
    },
    { "name": "Pickup from Outpost",
      "code": "afo3",
      "type": "bool",
      "idx": 3,
      "column": 4
    },

    { "name": "Pickup from Neutral Zone",
      "code": "aff",
      "type": "bool",
      "idx": 4,
      "column": 0
    },
    { "name": "Pickup from Neutral Zone",
      "code": "aff2",
      "type": "bool",
      "idx": 4,
      "column": 2
    },
    { "name": "Pickup from Neutral Zone",
      "code": "aff3",
      "type": "bool",
      "idx": 4,
      "column": 4
    },
    { "name": "Auto Shoot",
      "code": "as",
      "type": "bool",
      "idx": 5,
      "column": 0
     },
     {"name": "Auto Shoot",
      "code": "as2",
      "type": "bool",
      "idx": 5,
      "column": 2
      },
            {"name": "Auto Shoot",
        "code": "as3",
        "type": "bool",
        "idx": 5,
        "column":4
        },

      { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices":{
      "cm": "Climbed Middle<br>",
      "cs": "Climbed Side<br>",
      "a": "Attempted<br>",
      "n": "Not Attempted"
      },
      "defaultValue": "n",
      "idx": 6,
      "column": 0
    },
    { "name": "Climb (L1)",
      "code": "ac2",
      "type": "radio",
      "choices":{
      "cm": "Climbed Middle<br>",
      "cs": "Climbed Side<br>",
      "a": "Attempted<br>",
      "n": "Not Attempted"
      },
      "defaultValue": "n",
      "idx": 6,
      "column": 2
    },
    { "name": "Climb (L1)",
      "code": "ac3",
      "type": "radio",
      "choices":{
      "cm": "Climbed Middle<br>",
      "cs": "Climbed Side<br>",
      "a": "Attempted<br>",
      "n": "Not Attempted"
      },
      "defaultValue": "n",
      "idx": 6,
      "column": 4
    }
  ],
  "teleop": [

    { "name": "11",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "22",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "33",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },
     {"name": "Crossed Bump",
    "code": "cb",
    "type": "bool",
    "idx": 1,
    "column": 0
      
    },
    {"name": "Crossed Bump",
    "code": "cb2",
    "type": "bool",
    "idx": 1,
    "column": 2  
    },
    {"name": "Crossed Bump",
    "code": "cb3",
    "type": "bool",
    "idx": 1,
    "column": 4  
    },
    {"name": "Crossed Trench",
     "code": "ct",
     "type": "bool",
     "idx": 2,
     "column": 0    
     },

    {"name": "Crossed Trench",
     "code": "ct2",
     "type": "bool",
     "idx": 2,
     "column": 2    
     },

      {"name": "Crossed Trench",
     "code": "ct3",
     "type": "bool",
     "idx": 2,
     "column": 4   
     },
    { "name": "Herd Balls",
      "code": "hb",
      "type": "bool",
      "idx": 3,
      "column": 0
    },
    { "name": "Herd Balls",
      "code": "hb2",
      "type": "bool",
      "idx": 3,
      "column": 2
    },
    { "name": "Herd Balls",
      "code": "hb3",
      "type": "bool",
      "idx": 3,
      "column": 4
    },
    
    { "name": "Pass from Neutral Zone",
      "code": "pnz",
      "type": "bool",
      "idx": 4,
      "column": 0
    },
    { "name": "Pass from Neutral Zone",
      "code": "pnz2",
      "type": "bool",
      "idx": 4,
      "column": 2
    },
    { "name": "Pass from Neutral Zone",
      "code": "pnz3",
      "type": "bool",
      "idx": 4,
      "column": 4
    },
    { "name": "Pass from Opp Alliance Zone",
      "code": "poa",
      "type": "bool",
      "idx": 5,
      "column": 0
    },
    { "name": "Pass from Opp Alliance Zone",
      "code": "poa2",
      "type": "bool",
      "idx": 5,
      "column": 2
    },
    { "name": "Pass from Opp Alliance Zone",
      "code": "poa3",
      "type": "bool",
      "idx": 5,      
      "column": 4
    }
    
  ],
  "endgame": [
    { "name": "111",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
      
    { "name": "222",
     "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "333",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },
    
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x",
      "idx": 1,
      "column": 0
    },
      { "name": "Climb",
      "code": "tc2",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x",
      "idx": 1,
      "column": 2
    },
       { "name": "Climb",
      "code": "tc3",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x",
      "idx": 1,
      "column": 4
    }
  ],
  "postmatch": [
    { "name": "1111",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "2222",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "3333",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
      },
   
  
    { "name": "Broke",
      "code": "bk",
      "type": "bool",
      "idx": 1,
      "column": 0
    },
    { "name": "Broke",
      "code": "bk2",
      "type": "bool",
      "idx": 1,
      "column": 2
    },
    { "name": "Broke",
      "code": "bk3",
      "type": "bool",
      "idx": 1,
      "column": 4
    },
   { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool",
      "idx": 2,
      "column": 0
    },
    { "name": "Died/Immobilized",
      "code": "die2",
      "type": "bool",
      "idx": 2,
      "column": 2
    },
    { "name": "Died/Immobilized",
      "code": "die3",
      "type": "bool",
      "idx": 2,
      "column": 4
    }, 
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool",
      "idx": 3,
      "column": 0
    },

    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip2",
      "type": "bool",
      "idx": 3,
      "column": 2
    },

    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip3",
      "type": "bool",
      "idx": 3,
      "column": 4
    },
    
    
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 4,
      "column": 0
    },
       { "name": "Comments",
      "code": "co2",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 4,
      "column": 2
    },
       { "name": "Comments",
      "code": "co3",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 4,
      "column": 4
    },
      {"name": "Alliance Acheived Rank Point",
      "code": "arp",
      "type": "radio",
      "choices": {
            "e": "Energized RP<br>",
            "s": "Supercharged RP<br>",
            "no": "None"
          },
        "defaultValue": "no",
        "idx": 5,
        "column": 0
        }
  ]
}`;
