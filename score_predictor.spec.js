//The main block of the end-to-end functionality test
describe("NBA Score Predictor Application", function(){
    //This block loads the required application index page
    describe("The Page should load", function(){
        it("The Page should load", function(){
            cy.visit('./index.html');
        })
    })
	//This block checks that each team is placed at 'Home' section
    describe("Each team can be placed at home", ()=>{
        //This block clicks the button of the Lakers team, and places them at home
        describe("Prompt should be generated on clicking on Team 'Lakers'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="LAKERS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'LAKERS');
            })
        })
		//This block clicks the button of the Warriors team, and places them at home
        describe("Prompt should be generated on clicking on Team 'Warriors'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="WARRIORS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'WARRIORS');
            })
        })
		//This block clicks the button of the Suns team, and places them at home
        describe("Prompt should be generated on clicking on Team 'Suns'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="SUNS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'SUNS');
            })
        })
		//This block clicks the button of the Mavericks	team, and places them at home
        describe("Prompt should be generated on clicking on Team 'Mavericks'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="MAVERICKS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'MAVERICKS');
            })
        })
		//This block clicks the button of the Raptors team, and places them at home
        describe("Prompt should be generated on clicking on Team 'Raptors'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="RAPTORS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'RAPTORS');
            })
        })
		//This block clicks the button of the Bucks team, and places them at home
        describe("Prompt should be generated on clicking on Team 'Bucks'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="BUCKS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'BUCKS');
            })
        })
    })
	//This block checks that each team is placed at 'Away' section	
    describe("Each team can be placed at away", ()=>{
        //This block clicks the button of the Lakers team, and places them at away
        it('Should reload the page', ()=>{cy.visit('./index.html');})
        describe("Prompt should be generated on clicking on Team 'Lakers'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="LAKERS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'LAKERS');
            })
        })
        //This block clicks the button of the Warriors team, and places them at away
        describe("Prompt should be generated on clicking on Team 'Warriors'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="WARRIORS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'WARRIORS');
            })
        })
        //This block clicks the button of the Suns team, and places them at away
        describe("Prompt should be generated on clicking on Team 'Suns'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="SUNS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'SUNS');
            })
        })
        //This block clicks the button of the Mavericks team, and places them at away
        describe("Prompt should be generated on clicking on Team 'Mavericks'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="MAVERICKS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'MAVERICKS');
            })
        })
        //This block clicks the button of the Raptors team, and places them at away
        describe("Prompt should be generated on clicking on Team 'Raptors'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="RAPTORS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'RAPTORS');
            })
        })
        //This block clicks the button of the Bucks team, and places them at away
        describe("Prompt should be generated on clicking on Team 'Bucks'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="BUCKS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'BUCKS');
            })
        })
    })
	//This block will enter two teams, the Lakers and Mavericks, into the Home and Away sections respectively.
    describe('Should enter two teams, Lakers and Mavericks at Home and Away respectively', ()=>{
        it('Should reload the page', ()=>{cy.visit('./index.html');})
		//Places team Lakers at 'Home' position
        describe("Prompt should be generated on clicking on Team 'Lakers'", ()=>{
            it("Should generate a prompt, and place them at home", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="LAKERS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'LAKERS');
            })
        })
		//Places team Mavericks at 'Away' position
        describe("Prompt should be generated on clicking on Team 'Mavericks'", ()=>{
            it("Should generate a prompt, and place them at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="MAVERICKS"]').click({force:true});
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'MAVERICKS');
            })
        })
    })
    //This block clicks the button at the centre of the console that calls the Predict Score function. It checks that no value generated is zero.
    describe("Random Scores should be generated for both teams", ()=>{
        it("Should generate a random score for both teams", ()=>{
            cy.get('button[id="submit"]').click();
            cy.get('p[id="score--0"]').invoke('text').should('not.equal', '0');
            cy.get('p[id="score--1"]').invoke('text').should('not.equal', '0');
        })
        it("Should generate a new random score", ()=>{
            cy.get('button[id="submit"]').click();
            cy.get('p[id="score--0"]').invoke('text').should('not.equal', '0');
            cy.get('p[id="score--1"]').invoke('text').should('not.equal', '0');
        })
        it("Should generate a new random score", ()=>{
            cy.get('button[id="submit"]').click();
            cy.get('p[id="score--0"]').invoke('text').should('not.equal', '0');
            cy.get('p[id="score--1"]').invoke('text').should('not.equal', '0');
        })
    })
	//This block checks that same teams can't play at both home and away.
    describe("Doesn't allow the same team to play both home and away", ()=>{
        describe("Doesn't allow the same team to play both home and away", ()=>{
            it("Should generate a prompt and enter 'home'", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="MAVERICKS"]').click({force:true});
            })
            it("Should see an alert box saying 'Please choose another team' and set both scores to 0", ()=>{  
                cy.on('window:alert', (str)=>{
                    expect(str).to.equal('Please choose another team');
                })
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'Team 1');
                cy.get('p[id="score--0"]').invoke('text').should('equal', '0');
                cy.get('p[id="score--1"]').invoke('text').should('equal', '0');
            })
        })
        describe("Doesn't allow the same team to play both home and away", ()=>{
            it('Should reload the page', ()=>{cy.visit('./index.html');})
            it("Should generate a prompt, and place 'Mavericks' at away", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('home');
                })
                cy.get('button[value="MAVERICKS"]').click({force:true});
                cy.get('h2[id="name--0"]').invoke('text').should('equal', 'MAVERICKS');
            })
            it("Should generate a prompt and enter 'away'", ()=>{
                cy.window().then(($win)=>{
                    cy.stub($win, 'prompt').returns('away');
                })
                cy.get('button[value="MAVERICKS"]').click({force:true});
            })
            it("Should see an alert box saying 'Please choose another team' and set both scores to 0", ()=>{  
                cy.on('window:alert', (str)=>{
                    expect(str).to.equal('Please choose another team');
                })
                cy.get('h2[id="name--1"]').invoke('text').should('equal', 'Team 2');
                cy.get('p[id="score--0"]').invoke('text').should('equal', '0');
                cy.get('p[id="score--1"]').invoke('text').should('equal', '0');
            })
        })
    })
})
// score_predictor.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


